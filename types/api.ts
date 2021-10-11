// microCMS から返ってくるオブジェクトの共通プロパティ
export type CommonItem = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

// microCMS から返ってくるリストの共通プロパティ TにItemオブジェクトが入る
export type CommonList<T> = {
  contents: T[]
  totalCount: number
  offset: number
  limit: number
}
