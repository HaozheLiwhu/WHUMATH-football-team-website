from __future__ import annotations

import html
import json
import re
import time
from datetime import datetime
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import URLError
from urllib.parse import urlparse
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "assets" / "images"
METADATA_FILE = ROOT / "data" / "news_metadata.json"

NEWS_URLS = [
    "https://mp.weixin.qq.com/s/OeadtfMaEzsPnL7Yyk_HDA",
    "https://mp.weixin.qq.com/s/gXa9S-cMVKNhL7aWZwCK9Q",
    "https://mp.weixin.qq.com/s/brT7mroZQHgZMFJ1ay2ZAA",
    "https://mp.weixin.qq.com/s/3m9qmbgsjCAzTsCAP1TSVA",
    "https://mp.weixin.qq.com/s/sHy6rgQglgoG6-g6Lk-WDA",
    "https://mp.weixin.qq.com/s/cNGJMCjo_PW1nEDck98B3Q",
    "https://mp.weixin.qq.com/s/3DRuuww1iuSTzWbb8Z5saQ",
    "https://mp.weixin.qq.com/s/hqF8HelH4fEthJbB8hSZDA",
]

USER_AGENT = (
    "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) "
    "AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 "
    "MicroMessenger/8.0.48(0x1800302c) NetType/WIFI Language/zh_CN"
)


class MetaParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.meta: dict[str, str] = {}

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag.lower() != "meta":
            return
        values = {key.lower(): value or "" for key, value in attrs}
        key = values.get("property") or values.get("name")
        content = values.get("content")
        if key and content:
            self.meta[key] = html.unescape(content).strip()


def request(url: str, *, referer: str | None = None) -> Request:
    headers = {
        "User-Agent": USER_AGENT,
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    }
    if referer:
        headers["Referer"] = referer
    return Request(url, headers=headers)


def fetch_text(url: str) -> str:
    with urlopen(request(url), timeout=30) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        return response.read().decode(charset, errors="replace")


def fetch_bytes(url: str, referer: str) -> tuple[bytes, str]:
    with urlopen(request(url, referer=referer), timeout=30) as response:
        return response.read(), response.headers.get("Content-Type", "")


def normalize_url(url: str) -> str:
    url = html.unescape(url or "").strip()
    if url.startswith("//"):
        return f"https:{url}"
    return url


def js_var(document: str, name: str) -> str:
    match = re.search(rf"var\s+{re.escape(name)}\s*=\s*(['\"])(.*?)\1\s*;", document, re.S)
    if not match:
        return ""
    return decode_js_string(match.group(2))


def decode_js_string(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"\\u([0-9a-fA-F]{4})", lambda m: chr(int(m.group(1), 16)), value)
    value = re.sub(r"\\x([0-9a-fA-F]{2})", lambda m: chr(int(m.group(1), 16)), value)
    return (
        value.replace(r"\/", "/")
        .replace(r"\n", "\n")
        .replace(r"\r", "\r")
        .replace(r"\t", "\t")
        .replace(r"\'", "'")
        .replace(r'\"', '"')
        .replace(r"\\", "\\")
        .strip()
    )


def parse_metadata(document: str) -> dict[str, str]:
    parser = MetaParser()
    parser.feed(document)
    meta = parser.meta
    title = meta.get("og:title") or js_var(document, "msg_title")
    description = meta.get("og:description") or js_var(document, "msg_desc")
    cover_url = (
        meta.get("og:image")
        or js_var(document, "msg_cdn_url")
        or js_var(document, "cdn_url_1_1")
        or js_var(document, "msg_100_cdn_url")
    )
    date = find_publish_date(document, meta)
    return {
        "title": clean_wechat_text(title),
        "description": clean_wechat_text(description),
        "date": date.strip(),
        "image_url": normalize_url(cover_url),
    }


def find_publish_date(document: str, meta: dict[str, str]) -> str:
    candidates = [
        meta.get("article:published_time", ""),
        meta.get("pubdate", ""),
        meta.get("publishdate", ""),
        js_var(document, "publish_time"),
        js_var(document, "ori_create_time"),
        js_var(document, "ct"),
    ]
    patterns = [
        r"publish_time\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r"publishTime\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r"oriCreateTime\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r"ori_create_time\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r"create_time\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r"ct\s*[:=]\s*['\"]([^'\"]+)['\"]",
        r'"publish_time"\s*:\s*"([^"]+)"',
        r'"create_time"\s*:\s*"([^"]+)"',
        r'"ct"\s*:\s*"([^"]+)"',
    ]
    for pattern in patterns:
        match = re.search(pattern, document, re.S)
        if match:
            candidates.append(decode_js_string(match.group(1)))

    for candidate in candidates:
        formatted = normalize_date(candidate)
        if formatted:
            return formatted
    return ""


def normalize_date(value: str) -> str:
    value = clean_wechat_text(value)
    if not value:
        return ""

    timestamp = re.fullmatch(r"\d{10,13}", value)
    if timestamp:
        number = int(value)
        if number > 10_000_000_000:
            number //= 1000
        return datetime.fromtimestamp(number).strftime("%Y.%m.%d")

    match = re.search(r"(20\d{2})[./年-]\s*(\d{1,2})[./月-]\s*(\d{1,2})", value)
    if match:
        year, month, day = (int(part) for part in match.groups())
        return f"{year:04d}.{month:02d}.{day:02d}"
    return ""


def category_for(title: str) -> tuple[str, str]:
    if "专访" in title:
        return "专访", "Interview"
    if "录像" in title or "视频" in title:
        return "录像", "Video"
    return "战报", "Match Report"


def season_for(date_text: str) -> str:
    match = re.match(r"^(20\d{2})\.(\d{2})\.\d{2}$", date_text or "")
    if not match:
        return "2025-2026"
    year = int(match.group(1))
    month = int(match.group(2))
    if month >= 9:
        return f"{year}-{year + 1}"
    if month <= 6:
        return f"{year - 1}-{year}"
    return f"{year} 暑假"


def clean_wechat_text(value: str) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"\s+", " ", value).strip()
    if value in {"微信公众平台", "环境异常", "安全验证"}:
        return ""
    return value


def extension_for(content_type: str, url: str) -> str:
    content_type = content_type.lower()
    if "png" in content_type:
        return ".png"
    if "webp" in content_type:
        return ".webp"
    if "gif" in content_type:
        return ".gif"
    suffix = Path(urlparse(url).path).suffix.lower()
    if suffix in {".jpg", ".jpeg", ".png", ".webp", ".gif"}:
        return ".jpg" if suffix == ".jpeg" else suffix
    return ".jpg"


def download_cover(url: str, article_url: str, index: int) -> str:
    existing = local_cover(index)
    if existing:
        return existing
    if not url:
        return ""
    try:
        content, content_type = fetch_bytes(url, article_url)
    except URLError as exc:
        print(f"[{index}] cover failed: {exc}")
        return ""

    extension = extension_for(content_type, url)
    filename = f"news-{index:02d}{extension}"
    path = OUTPUT_DIR / filename
    path.write_bytes(content)
    return path.relative_to(ROOT).as_posix()


def local_cover(index: int) -> str:
    for extension in (".jpg", ".png", ".webp", ".gif"):
        path = OUTPUT_DIR / f"news-{index:02d}{extension}"
        if path.exists():
            return path.relative_to(ROOT).as_posix()
    return ""


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    METADATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    records = []

    for index, url in enumerate(NEWS_URLS, start=1):
        try:
            document = fetch_text(url)
            parsed = parse_metadata(document)
        except URLError as exc:
            print(f"[{index}] article failed: {exc}")
            parsed = {"title": "", "description": "", "date": "", "image_url": ""}

        cover = download_cover(parsed["image_url"], url, index)
        title = parsed["title"] or f"球队资讯 {index}"
        category, category_en = category_for(title)
        records.append(
            {
                "index": index,
                "season": season_for(parsed["date"]),
                "type": category,
                "typeEn": category_en,
                "title": title,
                "titleEn": title,
                "date": parsed["date"],
                "url": url,
                "cover": cover,
                "image": cover,
                "description": parsed["description"],
                "descriptionEn": parsed["description"],
                "image_url": parsed["image_url"],
            }
        )
        print(f"[{index}] {title} -> {cover or 'no cover'}")
        time.sleep(0.6)

    METADATA_FILE.write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {METADATA_FILE.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
