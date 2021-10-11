import { CommonItem, CommonList } from '../api'

export type BlogItem = CommonItem & {
  title: string
  body: string
}

export type BlogIndexApiResponse = CommonList<BlogItem>
