# 生物統計學習筆記

以 Astro 建立的純靜態生物統計筆記網站，內容來自專案內的 Word 學習筆記。

## 網站內容

- 繁體中文九章統計筆記
- 英文與日文路由架構
- 響應式章節導覽
- 明暗模式
- 瀏覽器端全文搜尋
- 未來可加入瀏覽器端統計計算器

## 本機使用

```bash
npm install
npm run dev
```

## 建立靜態網站

```bash
npm run build
```

輸出位於 `dist/`。Cloudflare Pages 可使用：

- Build command：`npm run build`
- Output directory：`dist`

## 更新 Word 筆記資料

```powershell
pwsh -NoProfile -File scripts/extract-notes.ps1 -OutputFile src/data/notes.json
pwsh -NoProfile -File scripts/refine-static-headings.ps1
```

執行後再以 `npm run build` 重新產生網站。
