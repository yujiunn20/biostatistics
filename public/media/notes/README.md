# 網站文章圖片

這裡只放網站實際使用的完成品。可編輯原始檔應放在 `assets-source/notes/`。

## 新增圖片

1. 在所屬章節下建立與文章 slug 相同的資料夾。
2. 放入 SVG、WebP 或必要時的 PNG。
3. 在 `src/data/figures.ts` 登錄圖片資料。
4. 在 `src/data/editorial.ts` 使用 `imageId` 引用。

範例：

```ts
// src/data/figures.ts
"data-types-overview": {
  src: "/media/notes/chapter-01/data-types/data-types-overview.svg",
  alt: "類別資料與數值資料的分類架構",
  caption: "資料可以依性質與測量尺度分類。",
  credit: "本站製作",
},

// src/data/editorial.ts
{
  type: "image",
  imageId: "data-types-overview",
}
```

檔名使用小寫英文與連字號，不使用空格、中文、`final` 或無意義流水號。
