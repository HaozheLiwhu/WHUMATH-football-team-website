# WHUMATH Football Website

武汉大学数学与统计学院足球队比赛数据库可视化网站。

## 本地查看

直接用浏览器打开 `index.html` 即可。

## 文件结构

- `assets/images/`：网站所有图片，包括 logo、图标、首页照片和资讯封面。
- `data/`：前端读取的数据文件，以及资讯封面元数据。
- `scripts/`：从 Excel 和资讯元数据生成网站数据的脚本。
- `whumath_database.xlsx`：后续维护优先修改的主数据库。

## 更新数据

网站数据来自 `whumath_database.xlsx`。这个数据库按 sheet 拆分为比赛、球员、转会、荣誉、资讯、赛事规则和场地映射，后续优先修改这个文件。

如果只更新了原始 `data.xlsx`，先运行：

```powershell
python scripts/build-database.py
```

修改 `whumath_database.xlsx` 后运行：

```powershell
python scripts/build-data.py
```

脚本会重新生成：

- `data/teamData.json`
- `data/teamData.js`

页面实际读取的是 `data/teamData.js`，因此不需要后端服务。

## 部署到 GitHub Pages

把整个文件夹提交到 GitHub 仓库后，在仓库设置里启用 GitHub Pages，选择根目录发布即可。
