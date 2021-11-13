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

export type TocItem = {
  id: string
  name: string
  text: string | undefined
}

export type BlogsApiResponse = CommonList<BlogItem>
export type CategoriesApiResponse = CommonList<CategoryItem>
export type TagsApiResponse = CommonList<TagItem>
