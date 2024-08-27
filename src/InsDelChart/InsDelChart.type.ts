export type ListDataType = {
  name: string;
  category: string;
  value: number;
};

export type DataType = {
  listData: ListDataType[];
  columns: string[];
  negative: string;
  positive: string;
  negatives: string[];
  positives: string[];
};

export type FileChanges = {
  insertions: number;
  deletions: number;
  commits: number;
};

export type FileChangesMap = {
  [path: string]: FileChanges;
};

export type FileScoresMap = {
  [path: string]: number;
};

export type FileChangesNode = {
  name: string; // Name of file/directory.
  children: FileChangesNode[];
  value?: number; // Count of changed lines.
} & Partial<FileChanges>;
