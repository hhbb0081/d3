import { DataType } from "./InsDelChart.type";

export const data: DataType = {
  listData: [
    { name: "App.tsx", category: "Mostly false", value: 1000 },
    { name: "App.tsx", category: "Mostly true", value: 123 },
    { name: "index.ts", category: "Mostly true", value: 10 },
    { name: "index.ts", category: "Mostly false", value: 222 },
    { name: "src", category: "Mostly false", value: 524 },
  ],
  columns: ["speaker", "ruling", "count"],
  negative: "← Deletions",
  positive: "Insertions →",
  negatives: ["Mostly false", "False"],
  positives: ["Mostly true"],
};
