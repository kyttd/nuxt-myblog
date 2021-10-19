import { CommonItem, CommonList } from '../api'

export type CategoryItem = CommonItem & {
  name: string
}

export type TagItem = CommonItem & {
  name: string
}

export type BlogItem = CommonItem & {
  title: string
  body: string
  category: CategoryItem
  tags: TagItem[]
}

export type BlogIndexApiResponse = CommonList<BlogItem>
