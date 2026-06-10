const DB = window.WHUMATH_DATA || {};

const state = {
  lang: localStorage.getItem("whumath-language") || "zh",
  matchSeason: "all",
  matchCompetition: "all",
  dataSeason: "all",
  dataView: "history",
  rosterSeason: (DB.seasons && DB.seasons[DB.seasons.length - 1]) || "all",
  transferSeason: "all",
  newsSeason: "all",
};

const TEXT = {
  zh: {
    navHome: "首页",
    navMatches: "比赛",
    navData: "数据",
    navRoster: "名单",
    navTransfers: "转会",
    navNews: "资讯",
    navPhotos: "照片",
    homeKicker: "武汉大学数学与统计学院足球队",
    homeTitle: "WHUMATH",
    homeSubtitle: "2024年武汉大学五人制足球赛冠军",
    season: "赛季",
    competition: "赛事",
    all: "总计",
    allMatches: "全部比赛",
    allCompetitions: "全部赛事",
    matchesTitle: "比赛",
    date: "日期",
    stage: "阶段",
    venue: "场地",
    detail: "详细",
    goals: "进球",
    assists: "助攻",
    lineup: "首发名单",
    substitutes: "替补出场",
    matchPhoto: "比赛照片",
    missing: "待补充",
    dataTitle: "数据",
    history: "历史战绩",
    players: "球员",
    team: "球队",
    dataHistoryTab: "历史战绩",
    dataTeamTab: "球队",
    dataPlayersTab: "球员",
    rosterTitle: "名单",
    transfersTitle: "转会",
    transfersAllSeasons: "全部赛季",
    transfersNewcomers: "新援",
    transfersDepartures: "离队",
    transferIn: "加盟",
    transferOut: "离队",
    newsTitle: "资讯",
    newsAllSeasons: "全部赛季",
    photosTitle: "照片",
    championPhoto: "2024年武汉大学五人制足球赛冠军",
    captain: "队长",
    position: "位置",
    number: "号码",
    goalkeeper: "门将",
    noAssist: "-",
    noGoals: "无进球",
    playerProfile: "球员详情",
    backRoster: "返回名单",
    careerStats: "个人数据",
    playerPhoto: "球员照片",
    historyRecords: "队史纪录",
    appearanceRecord: "队史出场记录",
    goalRecord: "队史进球记录",
    assistRecord: "队史助攻记录",
    mathTeam: "数院",
    opponent: "对手",
    resultWin: "胜",
    resultDraw: "平",
    resultLoss: "负",
    resultUnknown: "待补充",
    backMatches: "返回比赛",
    noRows: "待补充",
    knownGoalsOnly: "部分进球者待补充",
    assistMissing: "助攻待补充",
    rosterMissing: "名单待补充",
    noSubstitutes: "-",
    matchesCount: "比赛",
    goalsFor: "进球",
    goalsAgainst: "丢球",
    wins: "胜场",
    draws: "平场",
    losses: "负场",
    appearances: "出场次数",
    starts: "首发次数",
    winRate: "胜率",
    cleanSheets: "零封",
    scorerRank: "射手榜",
    assistRank: "助攻榜",
    appearanceRank: "出场次数",
    startRank: "首发次数",
    winRank: "胜场",
    winRateRank: "胜率",
    cleanSheetRank: "零封",
    concededRank: "丢球",
    rank: "排名",
    player: "球员",
    value: "数据",
    source: "数据来源",
    format: "赛制",
    generatedAt: "生成时间",
  },
  en: {
    navHome: "Home",
    navMatches: "Matches",
    navData: "Data",
    navRoster: "Roster",
    navTransfers: "Transfers",
    navNews: "News",
    navPhotos: "Photos",
    homeKicker: "Wuhan University School of Mathematics and Statistics",
    homeTitle: "WHUMATH",
    homeSubtitle: "2024 Wuhan University Five-a-side Football Champion",
    season: "Season",
    competition: "Competition",
    all: "Total",
    allMatches: "All matches",
    allCompetitions: "All competitions",
    matchesTitle: "Matches",
    date: "Date",
    stage: "Stage",
    venue: "Venue",
    detail: "Details",
    goals: "Goals",
    assists: "Assists",
    lineup: "Starting Lineup",
    substitutes: "Substitutions",
    matchPhoto: "Match Photo",
    missing: "To be added",
    dataTitle: "Data",
    history: "Honors",
    players: "Players",
    team: "Team",
    dataHistoryTab: "Honors",
    dataTeamTab: "Team",
    dataPlayersTab: "Players",
    rosterTitle: "Roster",
    transfersTitle: "Transfers",
    transfersAllSeasons: "All seasons",
    transfersNewcomers: "Arrivals",
    transfersDepartures: "Departures",
    transferIn: "Joined",
    transferOut: "Left",
    newsTitle: "News",
    newsAllSeasons: "All seasons",
    photosTitle: "Photos",
    championPhoto: "2024 Wuhan University Five-a-side Football Champion",
    captain: "Captain",
    position: "Position",
    number: "Number",
    goalkeeper: "Goalkeeper",
    noAssist: "-",
    noGoals: "No goals",
    playerProfile: "Player Profile",
    backRoster: "Back to Roster",
    careerStats: "Career Stats",
    playerPhoto: "Player Photo",
    historyRecords: "Club Records",
    appearanceRecord: "Appearance Record",
    goalRecord: "Goal Record",
    assistRecord: "Assist Record",
    mathTeam: "WHUMATH",
    opponent: "Opponent",
    resultWin: "W",
    resultDraw: "D",
    resultLoss: "L",
    resultUnknown: "TBD",
    backMatches: "Back to Matches",
    noRows: "To be added",
    knownGoalsOnly: "Some scorers to be added",
    assistMissing: "Assists to be added",
    rosterMissing: "Roster to be added",
    noSubstitutes: "-",
    matchesCount: "Matches",
    goalsFor: "Goals",
    goalsAgainst: "Conceded",
    wins: "Wins",
    draws: "Draws",
    losses: "Losses",
    appearances: "Appearances",
    starts: "Starts",
    winRate: "Win rate",
    cleanSheets: "Clean sheets",
    scorerRank: "Scorers",
    assistRank: "Assists",
    appearanceRank: "Appearances",
    startRank: "Starts",
    winRank: "Wins",
    winRateRank: "Win Rate",
    cleanSheetRank: "Clean Sheets",
    concededRank: "Conceded",
    rank: "Rank",
    player: "Player",
    value: "Value",
    source: "Source",
    format: "Format",
    generatedAt: "Generated",
  },
};

const METRICS = [
  { key: "goals", label: "scorerRank", min: 1, direction: "desc" },
  { key: "assists", label: "assistRank", min: 1, direction: "desc" },
  { key: "appearances", label: "appearanceRank", min: 0, direction: "desc" },
  { key: "starts", label: "startRank", min: 0, direction: "desc" },
  { key: "wins", label: "winRank", min: 0, direction: "desc" },
  { key: "winRate", label: "winRateRank", min: 0, direction: "desc", percent: true, requireKnownResults: true },
  { key: "cleanSheets", label: "cleanSheetRank", min: 0, direction: "desc", requireGoalkeeper: true },
  { key: "goalsAgainst", label: "concededRank", min: 0, direction: "asc", requireGoalkeeper: true },
];

function t(key) {
  return TEXT[state.lang][key] || TEXT.zh[key] || key;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function display(value) {
  return value ? escapeHtml(value) : `<span class="missing">${t("missing")}</span>`;
}

function teamName() {
  return state.lang === "zh" ? t("mathTeam") : "WHUMATH";
}

function routeFromHash() {
  const hash = window.location.hash.replace(/^#\/?/, "") || "home";
  if (hash.startsWith("match/")) {
    return { name: "detail", matchId: decodeURIComponent(hash.slice("match/".length)) };
  }
  if (hash.startsWith("player/")) {
    return { name: "player", playerName: decodeURIComponent(hash.slice("player/".length)) };
  }
  return { name: hash };
}

function setRoute(route) {
  window.location.hash = route === "home" ? "#home" : `#${route}`;
}

function resultLabel(result) {
  if (result === "win") return t("resultWin");
  if (result === "draw") return t("resultDraw");
  if (result === "loss") return t("resultLoss");
  return t("resultUnknown");
}

function resultClass(result) {
  if (result === "win") return "score-win";
  if (result === "draw") return "score-draw";
  if (result === "loss") return "score-loss";
  return "score-unknown";
}

function matchScore(match) {
  return match.score && match.score.raw ? escapeHtml(match.score.raw) : t("missing");
}

function competitionName(name) {
  if (state.lang === "zh") return name || t("missing");
  const map = {
    新生杯: "Freshman Cup",
    振兴杯: "Zhenxing Cup",
    五人制: "Five-a-side",
  };
  return map[name] || name || t("missing");
}

function formatName(format) {
  if (state.lang === "zh") {
    const map = {
      "8-a-side": "八人制",
      "11-a-side": "十一人制",
      "5-a-side": "五人制",
    };
    return map[format] || format || t("missing");
  }
  return format || t("missing");
}

function initials(name) {
  const cleaned = String(name || "").trim();
  return cleaned.slice(0, 2).toUpperCase();
}

function gloveIcon() {
  return `<img class="glove-icon" src="assets/images/gloves.png" alt="${t("goalkeeper")}" title="${t("goalkeeper")}" />`;
}

function ballIcon() {
  return `<img class="ball-icon" src="assets/images/ball.jpg" alt="" aria-hidden="true" />`;
}

function bootsIcon() {
  return `<img class="boots-icon" src="assets/images/boots.png" alt="" aria-hidden="true" />`;
}

function statScope() {
  if (state.dataSeason === "all") return DB.stats.all;
  return DB.stats.bySeason[state.dataSeason] || DB.stats.all;
}

function selectControl(id, label, value, options) {
  return `
    <label class="select-control" for="${id}">
      <span>${escapeHtml(label)}</span>
      <select id="${id}">
        ${options
          .map(
            (option) => `
              <option value="${escapeHtml(option.value)}" ${option.value === value ? "selected" : ""}>
                ${escapeHtml(option.label)}
              </option>
            `
          )
          .join("")}
      </select>
    </label>
  `;
}

function renderHome() {
  return `
    <section class="home-hero">
      <img class="hero-image" src="assets/images/champion.jpg" alt="WHUMATH champion photo" />
      <div class="hero-gradient"></div>
      <div class="hero-copy">
        <p>${t("homeKicker")}</p>
        <h1>${t("homeTitle")}</h1>
        <span>${t("homeSubtitle")}</span>
      </div>
    </section>
  `;
}

function metricTile(label, value) {
  return `
    <div class="metric-tile">
      <span>${escapeHtml(label)}</span>
      <strong>${escapeHtml(value ?? t("missing"))}</strong>
    </div>
  `;
}

function renderMatches() {
  const seasonOptions = [
    { value: "all", label: t("allMatches") },
    ...DB.seasons.map((season) => ({ value: season, label: season })),
  ];
  const competitionOptions = [
    { value: "all", label: t("allCompetitions") },
    ...DB.competitions.map((competition) => ({ value: competition, label: competitionName(competition) })),
  ];

  const matches = [...DB.matches]
    .filter((match) => state.matchSeason === "all" || match.season === state.matchSeason)
    .filter((match) => state.matchCompetition === "all" || match.competition === state.matchCompetition)
    .sort((a, b) => b.sourceRow - a.sourceRow);

  return `
    <section class="page-head">
      <div>
        <h1>${t("matchesTitle")}</h1>
      </div>
    </section>
    <section class="toolbar">
      ${selectControl("matchSeason", t("season"), state.matchSeason, seasonOptions)}
      ${selectControl("matchCompetition", t("competition"), state.matchCompetition, competitionOptions)}
    </section>
    <section class="match-list">
      ${matches.length ? matches.map(renderMatchCard).join("") : emptyState()}
    </section>
  `;
}

function renderMatchCard(match) {
  const goals = goalRows(match);
  return `
    <article class="match-card" data-expand-match="${escapeHtml(match.id)}">
      <div class="match-main">
        <div class="match-side match-left">
          <span>${display(match.date)}</span>
          <strong>${competitionName(match.competition)} · ${display(match.stage)}</strong>
        </div>
        <div class="match-scoreline">
          <strong>${teamName()}</strong>
          <span class="score-pill ${resultClass(match.score.result)}">${matchScore(match)}</span>
          <strong>${display(match.opponent)}</strong>
        </div>
        <div class="match-side match-right">
          <strong>${display(match.venue)}</strong>
        </div>
      </div>
      <div class="match-extra">
        <div class="goal-list">
          <h3>${t("goals")}</h3>
          ${goals}
        </div>
        <button class="detail-button" type="button" data-detail-match="${escapeHtml(match.id)}">${t("detail")}</button>
      </div>
    </article>
  `;
}

function goalRows(match) {
  const rows = match.goals
    .slice()
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
    .map(
      (goal) => {
        const assists = match.assists
          .filter((assist) => (assist.order ?? 999) === (goal.order ?? 999))
          .map((assist) => assist.player);
        return `
          <div class="goal-row">
            ${ballIcon()}
            <strong>${escapeHtml(goal.player)}</strong>
            ${
              assists.length
                ? `<span class="assist-inline">${bootsIcon()}<span>${assists.map(escapeHtml).join(" / ")}</span></span>`
                : ""
            }
          </div>
        `;
      }
    );

  if (match.dataQuality.goalsIncomplete) {
    rows.push(`<div class="goal-row muted-row">${ballIcon()}<strong>${t("knownGoalsOnly")}</strong></div>`);
  }
  if (!rows.length) {
    const noGoals = match.score && match.score.known && match.score.goalsFor === 0;
    rows.push(`<div class="goal-row muted-row">${ballIcon()}<strong>${noGoals ? t("noGoals") : t("missing")}</strong></div>`);
  }
  return rows.join("");
}

function renderData() {
  const seasonOptions = [
    { value: "all", label: t("all") },
    ...DB.seasons.map((season) => ({ value: season, label: season })),
  ];
  const scope = statScope();
  const needsSeason = state.dataView === "team" || state.dataView === "players";

  return `
    <section class="page-head">
      <div>
        <h1>${t("dataTitle")}</h1>
      </div>
    </section>
    <section class="data-tabs" aria-label="${t("dataTitle")}">
      ${dataTabButton("history", t("dataHistoryTab"))}
      ${dataTabButton("team", t("dataTeamTab"))}
      ${dataTabButton("players", t("dataPlayersTab"))}
    </section>
    ${
      needsSeason
        ? `<section class="toolbar">${selectControl("dataSeason", t("season"), state.dataSeason, seasonOptions)}</section>`
        : ""
    }
    ${renderDataPane(scope)}
  `;
}

function dataTabButton(view, label) {
  return `
    <button class="data-tab ${state.dataView === view ? "is-active" : ""}" type="button" data-data-view="${view}">
      ${escapeHtml(label)}
    </button>
  `;
}

function renderDataPane(scope) {
  if (state.dataView === "team") {
    return `
      <section class="stats-section">
        <div class="section-title">
          <h2>${t("team")}</h2>
        </div>
        <div class="team-metrics">
          ${metricTile(t("matchesCount"), scope.team.matches)}
          ${metricTile(t("goalsFor"), scope.team.goalsFor)}
          ${metricTile(t("goalsAgainst"), scope.team.goalsAgainst)}
          ${metricTile(t("wins"), scope.team.wins)}
          ${metricTile(t("draws"), scope.team.draws)}
          ${metricTile(t("losses"), scope.team.losses)}
        </div>
      </section>
    `;
  }

  if (state.dataView === "players") {
    return `
      <section class="stats-section">
        <div class="section-title">
          <h2>${t("players")}</h2>
        </div>
        <div class="ranking-grid">
          ${METRICS.map((metric) => renderRanking(metric, scope.players)).join("")}
        </div>
      </section>
    `;
  }

  return `
    <section class="history-section">
      <div class="section-title">
        <h2>${t("history")}</h2>
      </div>
      <div class="honor-grid">
        ${DB.achievements.map(renderAchievement).join("")}
      </div>
      <div class="record-grid">
        ${historyRecordCard("appearances", t("appearanceRecord"))}
        ${historyRecordCard("goals", t("goalRecord"))}
        ${historyRecordCard("assists", t("assistRecord"))}
      </div>
    </section>
  `;
}

function historyRecordCard(key, label) {
  const players = DB.stats.all.players || [];
  const max = players.reduce((best, player) => Math.max(best, player[key] || 0), 0);
  const leaders = players.filter((player) => (player[key] || 0) === max && max > 0).map((player) => player.name);
  return `
    <article class="record-card">
      <span>${escapeHtml(label)}</span>
      <strong>${leaders.length ? leaders.map(escapeHtml).join(" / ") : t("missing")}</strong>
      <b>${max || t("missing")}</b>
    </article>
  `;
}

function renderAchievement(achievement) {
  const title = state.lang === "zh" ? achievement.title : achievement.titleEn;
  const image = achievement.image
    ? `<img src="${escapeHtml(achievement.image)}" alt="${escapeHtml(title)}" />`
    : `<div class="honor-placeholder">${t("missing")}</div>`;

  return `
    <article class="honor-card">
      ${image}
      <div>
        <span>${escapeHtml(achievement.year)}</span>
        <strong>${escapeHtml(title)}</strong>
      </div>
    </article>
  `;
}

function renderRanking(metric, players) {
  const rows = players
    .filter((player) => {
      if (metric.requireKnownResults && !player.knownResults) return false;
      if (metric.requireGoalkeeper && !player.goalkeeperAppearances) return false;
      const value = player[metric.key];
      if (metric.key === "winRate") return value !== null && value !== undefined;
      return value >= metric.min;
    })
    .sort((a, b) => {
      const valueA = a[metric.key] ?? 0;
      const valueB = b[metric.key] ?? 0;
      if (valueA === valueB) return a.name.localeCompare(b.name, "zh-Hans-CN");
      return metric.direction === "asc" ? valueA - valueB : valueB - valueA;
    });

  return `
    <article class="ranking-card">
      <h3>${t(metric.label)}</h3>
      <div class="ranking-table-scroll">
        <table>
          <thead>
            <tr>
              <th>${t("rank")}</th>
              <th>${t("player")}</th>
              <th>${t("value")}</th>
            </tr>
          </thead>
          <tbody>
            ${
              rows.length
                ? rows
                    .map(
                      (player, index) => `
                        <tr>
                          <td>${index + 1}</td>
                          <td>${escapeHtml(player.name)}</td>
                          <td>${formatMetricValue(player[metric.key], metric)}</td>
                        </tr>
                      `
                    )
                    .join("")
                : `<tr><td colspan="3">${t("missing")}</td></tr>`
            }
          </tbody>
        </table>
      </div>
    </article>
  `;
}

function formatMetricValue(value, metric) {
  if (value === null || value === undefined) return t("missing");
  if (metric.percent) return `${Math.round(value * 100)}%`;
  return escapeHtml(value);
}

function renderRoster() {
  const seasonOptions = DB.seasons.map((season) => ({ value: season, label: season }));
  const players = DB.rosters[state.rosterSeason] || [];

  return `
    <section class="page-head">
      <div>
        <h1>${t("rosterTitle")}</h1>
      </div>
    </section>
    <section class="toolbar">
      ${selectControl("rosterSeason", t("season"), state.rosterSeason, seasonOptions)}
    </section>
    <section class="roster-grid">
      ${players.length ? players.map(renderPlayerCard).join("") : emptyState()}
    </section>
  `;
}

function renderTransfers() {
  const items = DB.transfers || [];
  const seasonOptions = [
    { value: "all", label: t("transfersAllSeasons") },
    ...items.map((item) => ({ value: item.season, label: item.season })),
  ];
  const visibleItems = items.filter((item) => state.transferSeason === "all" || item.season === state.transferSeason);
  return `
    <section class="page-head">
      <div>
        <h1>${t("transfersTitle")}</h1>
      </div>
    </section>
    <section class="toolbar">
      ${selectControl("transferSeason", t("season"), state.transferSeason, seasonOptions)}
    </section>
    <section class="transfer-grid">
      ${visibleItems.length ? visibleItems.map(renderTransferCard).join("") : emptyState()}
    </section>
  `;
}

function renderTransferCard(item) {
  return `
    <article class="transfer-card">
      <span>${escapeHtml(item.season)}</span>
      <div class="transfer-list">
        ${transferRows(item.newcomers || [], "in")}
        ${transferRows(item.departures || [], "out")}
      </div>
    </article>
  `;
}

function transferRows(names, type) {
  const label = type === "in" ? t("transferIn") : t("transferOut");
  if (!names.length) {
    return `
      <div class="transfer-player-row">
        <span class="transfer-label transfer-${type}">${label}</span>
        <strong>${t("missing")}</strong>
      </div>
    `;
  }
  return names
    .map(
      (player) => `
        <div class="transfer-player-row">
          <span class="transfer-label transfer-${type}">${label}</span>
          <strong>${escapeHtml(player.name || player)}</strong>
          <span class="transfer-flow">
            <span>${display(player.from)}</span>
            <b class="transfer-arrow arrow-${type}" aria-hidden="true">→</b>
            <span>${display(player.to)}</span>
          </span>
          <time>${display(player.date)}</time>
        </div>
      `
    )
    .join("");
}

function renderNews() {
  const items = DB.news || [];
  const newsSeasons = [...new Set(items.map((item) => item.season).filter(Boolean))];
  const seasonOptions = [
    { value: "all", label: t("newsAllSeasons") },
    ...newsSeasons.map((season) => ({ value: season, label: season })),
  ];
  const visibleItems = items
    .filter((item) => state.newsSeason === "all" || item.season === state.newsSeason)
    .sort((a, b) => newsDateValue(b.date) - newsDateValue(a.date));
  return `
    <section class="page-head">
      <div>
        <h1>${t("newsTitle")}</h1>
      </div>
    </section>
    <section class="toolbar">
      ${selectControl("newsSeason", t("season"), state.newsSeason, seasonOptions)}
    </section>
    <section class="news-grid">
      ${visibleItems.length ? visibleItems.map(renderNewsCard).join("") : emptyState()}
    </section>
  `;
}

function newsDateValue(dateText) {
  const digits = String(dateText || "").replace(/\D/g, "");
  return digits ? Number(digits) : 0;
}

function renderNewsCard(item) {
  const type = state.lang === "zh" ? item.type : item.typeEn;
  const title = state.lang === "zh" ? item.title : item.titleEn;
  const tag = item.url ? "a" : "article";
  const linkAttributes = item.url ? ` href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer"` : "";
  const cardClass = item.url ? "news-card" : "news-card is-disabled";
  const cover = item.cover
    ? `<img class="news-cover" src="${escapeHtml(item.cover)}" alt="${escapeHtml(title || t("newsTitle"))}" />`
    : `<div class="news-cover news-cover-placeholder">${t("missing")}</div>`;

  return `
    <${tag} class="${cardClass}"${linkAttributes}>
      ${cover}
      <div class="news-body">
        <span>${display(item.date)}</span>
        <h2>${display(title)}</h2>
        <p>${display(type)}</p>
      </div>
    </${tag}>
  `;
}

function renderPhotos() {
  const newsPhotos = (DB.news || [])
    .filter((item) => item.cover)
    .sort((a, b) => newsDateValue(b.date) - newsDateValue(a.date))
    .map((item) => ({
      src: item.cover,
      title: state.lang === "zh" ? item.title : item.titleEn,
      meta: `${item.date || t("missing")} · ${state.lang === "zh" ? item.type : item.typeEn}`,
    }));
  const photos = [
    {
      src: "assets/images/champion.jpg",
      title: t("championPhoto"),
      meta: "2024",
      featured: true,
    },
    ...newsPhotos,
  ];

  return `
    <section class="page-head">
      <div>
        <h1>${t("photosTitle")}</h1>
      </div>
    </section>
    <section class="photo-grid">
      ${photos.length ? photos.map(renderPhotoCard).join("") : emptyState()}
    </section>
  `;
}

function renderPhotoCard(photo) {
  return `
    <article class="photo-card ${photo.featured ? "is-featured" : ""}">
      <img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.title || t("photosTitle"))}" />
      <div>
        <strong>${display(photo.title)}</strong>
        <span>${display(photo.meta)}</span>
      </div>
    </article>
  `;
}

function renderPlayerCard(player) {
  const isGoalkeeper = player.position === "门将";
  const number = player.number ? `#${player.number}` : `# ${t("missing")}`;
  const position = player.position
    ? isGoalkeeper && state.lang !== "zh"
      ? t("goalkeeper")
      : player.position
    : t("missing");
  return `
    <a class="player-card" href="#player/${encodeURIComponent(player.name)}">
      <div class="portrait-slot">${escapeHtml(initials(player.name))}</div>
      <span class="jersey-number">${escapeHtml(number)} · ${escapeHtml(position)} ${isGoalkeeper ? gloveIcon() : ""}</span>
      <strong>
        ${escapeHtml(player.name)}
        ${player.captain ? `<span class="captain-badge" title="${t("captain")}">C</span>` : ""}
      </strong>
    </a>
  `;
}

function findPlayerRoster(name) {
  const seasons = [...(DB.seasons || [])].reverse();
  for (const season of seasons) {
    const player = (DB.rosters[season] || []).find((item) => item.name === name);
    if (player) return { ...player, season };
  }
  return { name, position: "", number: "", captain: false, photo: "", season: "" };
}

function findPlayerStats(name) {
  return (DB.stats.all.players || []).find((player) => player.name === name) || {
    name,
    goals: 0,
    assists: 0,
    appearances: 0,
    starts: 0,
    wins: 0,
    winRate: null,
    cleanSheets: 0,
    goalsAgainst: 0,
    goalkeeperAppearances: 0,
  };
}

function renderPlayerProfile(playerName) {
  const name = playerName || "";
  const roster = findPlayerRoster(name);
  const stats = findPlayerStats(name);
  const isGoalkeeper = roster.position === "门将" || stats.goalkeeperAppearances > 0;
  const position = roster.position || t("missing");
  const number = roster.number ? `#${roster.number}` : `# ${t("missing")}`;
  const statTiles = [
    metricTile(t("goals"), stats.goals),
    metricTile(t("assists"), stats.assists),
    metricTile(t("appearances"), stats.appearances),
    metricTile(t("starts"), stats.starts),
    metricTile(t("wins"), stats.wins),
    metricTile(t("winRate"), stats.winRate === null || stats.winRate === undefined ? t("missing") : `${Math.round(stats.winRate * 100)}%`),
    ...(isGoalkeeper ? [metricTile(t("cleanSheets"), stats.cleanSheets), metricTile(t("goalsAgainst"), stats.goalsAgainst)] : []),
  ];

  return `
    <section class="detail-top">
      <button class="secondary-button" type="button" data-route="roster">${t("backRoster")}</button>
      <div class="player-photo-slot">
        <span>${t("playerPhoto")}</span>
        <strong>${escapeHtml(name || t("missing"))}</strong>
      </div>
    </section>
    <section class="player-profile-head">
      <div>
        <h1>${escapeHtml(name || t("missing"))}</h1>
        <p>${escapeHtml(number)} · ${escapeHtml(position)} ${isGoalkeeper ? gloveIcon() : ""}</p>
      </div>
      ${roster.captain ? `<span class="captain-badge profile-captain" title="${t("captain")}">C</span>` : ""}
    </section>
    <section class="stats-section">
      <div class="section-title">
        <h2>${t("careerStats")}</h2>
      </div>
      <div class="player-stat-grid">
        ${statTiles.join("")}
      </div>
    </section>
  `;
}

function renderDetail(matchId) {
  const match = DB.matches.find((item) => item.id === matchId);
  if (!match) return emptyState();

  return `
    <section class="detail-top">
      <button class="secondary-button" type="button" data-route="matches">${t("backMatches")}</button>
      <div class="photo-slot">
        <span>${t("matchPhoto")}</span>
        <strong>${t("missing")}</strong>
      </div>
    </section>
    <section class="detail-score">
      <div>
        <span>${display(match.date)} · ${competitionName(match.competition)} · ${display(match.stage)}</span>
        <h1>${teamName()} <span class="${resultClass(match.score.result)}">${matchScore(match)}</span> ${display(match.opponent)}</h1>
        <p>${t("venue")}: ${display(match.venue)} · ${t("format")}: ${escapeHtml(formatName(match.format))}</p>
      </div>
    </section>
    <section class="detail-grid">
      <article class="detail-panel">
        <h2>${t("lineup")}</h2>
        ${renderRosterList(match.roster.filter((person) => person.starter))}
        <h2>${t("substitutes")}</h2>
        ${renderRosterList(match.roster.filter((person) => !person.starter), t("noSubstitutes"))}
      </article>
      <article class="detail-panel">
        <h2>${t("goals")} / ${t("assists")}</h2>
        ${renderGoalAssistTable(match)}
      </article>
    </section>
  `;
}

function renderRosterList(people, emptyText = t("rosterMissing")) {
  if (!people.length) return `<p class="missing-block">${escapeHtml(emptyText)}</p>`;
  return `
    <div class="name-chip-list">
      ${people
        .map(
          (person) => `
            <span class="name-chip">
              ${escapeHtml(person.name)}
              ${person.captain ? `<b>C</b>` : ""}
              ${person.goalkeeper ? gloveIcon() : ""}
            </span>
          `
        )
        .join("")}
    </div>
  `;
}

function renderGoalAssistTable(match) {
  const orders = new Set();
  match.goals.forEach((goal) => orders.add(goal.order ?? 999));
  match.assists.forEach((assist) => orders.add(assist.order ?? 999));
  const sortedOrders = [...orders].sort((a, b) => a - b);

  if (!sortedOrders.length && !match.dataQuality.goalsIncomplete && !match.dataQuality.missingAssists) {
    const noGoals = match.score && match.score.known && match.score.goalsFor === 0;
    return `<p class="missing-block">${noGoals ? t("noGoals") : t("missing")}</p>`;
  }

  const rows = sortedOrders.map((order) => {
    const goals = match.goals.filter((goal) => (goal.order ?? 999) === order).map((goal) => goal.player);
    const assists = match.assists.filter((assist) => (assist.order ?? 999) === order).map((assist) => assist.player);
    return `
      <tr>
        <td>${order === 999 ? t("missing") : escapeHtml(order)}</td>
        <td>${goals.length ? goals.map(escapeHtml).join(" / ") : t("missing")}</td>
        <td>${assists.length ? assists.map(escapeHtml).join(" / ") : goals.length ? t("noAssist") : t("missing")}</td>
      </tr>
    `;
  });

  if (match.dataQuality.goalsIncomplete) {
    rows.push(`<tr><td colspan="3">${t("knownGoalsOnly")}</td></tr>`);
  }
  return `
    <table class="detail-table">
      <thead>
        <tr>
          <th>#</th>
          <th>${t("goals")}</th>
          <th>${t("assists")}</th>
        </tr>
      </thead>
      <tbody>${rows.join("")}</tbody>
    </table>
  `;
}

function emptyState() {
  return `<p class="missing-block">${t("noRows")}</p>`;
}

function bindChrome(route) {
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-route]").forEach((button) => {
    button.onclick = () => setRoute(button.dataset.route);
  });
  document.querySelectorAll(".nav-link").forEach((button) => {
    const target = button.dataset.route;
    const active =
      route.name === target ||
      (route.name === "detail" && target === "matches") ||
      (route.name === "player" && target === "roster");
    button.classList.toggle("is-active", active);
  });
  const languageToggle = document.getElementById("languageToggle");
  languageToggle.textContent = state.lang === "zh" ? "中文 / English" : "English / 中文";
  languageToggle.onclick = () => {
    state.lang = state.lang === "zh" ? "en" : "zh";
    localStorage.setItem("whumath-language", state.lang);
    render();
  };
}

function bindPage() {
  const matchSeason = document.getElementById("matchSeason");
  if (matchSeason) {
    matchSeason.addEventListener("change", (event) => {
      state.matchSeason = event.target.value;
      render(false);
    });
  }

  const matchCompetition = document.getElementById("matchCompetition");
  if (matchCompetition) {
    matchCompetition.addEventListener("change", (event) => {
      state.matchCompetition = event.target.value;
      render(false);
    });
  }

  const dataSeason = document.getElementById("dataSeason");
  if (dataSeason) {
    dataSeason.addEventListener("change", (event) => {
      state.dataSeason = event.target.value;
      render(false);
    });
  }

  document.querySelectorAll("[data-data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.dataView = button.dataset.dataView;
      render(false);
    });
  });

  const rosterSeason = document.getElementById("rosterSeason");
  if (rosterSeason) {
    rosterSeason.addEventListener("change", (event) => {
      state.rosterSeason = event.target.value;
      render(false);
    });
  }

  const transferSeason = document.getElementById("transferSeason");
  if (transferSeason) {
    transferSeason.addEventListener("change", (event) => {
      state.transferSeason = event.target.value;
      render(false);
    });
  }

  const newsSeason = document.getElementById("newsSeason");
  if (newsSeason) {
    newsSeason.addEventListener("change", (event) => {
      state.newsSeason = event.target.value;
      render(false);
    });
  }

  document.querySelectorAll("[data-expand-match]").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-open");
    });
  });

  document.querySelectorAll("[data-detail-match]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      window.location.hash = `#match/${encodeURIComponent(button.dataset.detailMatch)}`;
    });
  });
}

function render(shouldScroll = true) {
  const route = routeFromHash();
  const app = document.getElementById("app");

  if (route.name === "home") app.innerHTML = renderHome();
  else if (route.name === "matches") app.innerHTML = renderMatches();
  else if (route.name === "data") app.innerHTML = renderData();
  else if (route.name === "roster") app.innerHTML = renderRoster();
  else if (route.name === "transfers") app.innerHTML = renderTransfers();
  else if (route.name === "news") app.innerHTML = renderNews();
  else if (route.name === "photos") app.innerHTML = renderPhotos();
  else if (route.name === "player") app.innerHTML = renderPlayerProfile(route.playerName);
  else if (route.name === "detail") app.innerHTML = renderDetail(route.matchId);
  else {
    setRoute("home");
    return;
  }

  bindChrome(route);
  bindPage();
  if (shouldScroll) window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", () => render());
render();
