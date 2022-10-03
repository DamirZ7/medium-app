export interface Post {
  _id: string
  _createdAt: string
  title: string
  author: {
    name: string
    image: string
  }
  comments: Comment[]
  description: string
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: {
    current: string
  }
  body: object[]
}

export interface Comment {
  approved: boolean
  _id: string
  name: string
  email: string
  comment: string
  post: {
    _ref: string
    _typo: string
  }
  _createdAt: string
  _rev: string
  _type: string
  _updatedAt: string
}
