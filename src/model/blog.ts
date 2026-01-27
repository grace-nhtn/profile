export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  category: string
  tags: string[]
  imageUrl?: string
}

export interface BlogData {
  posts: BlogPost[]
}
