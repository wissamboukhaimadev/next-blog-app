export interface UserAxios {
    data: {
        id?: number
        email?: string
        password?: string
    }
}

interface User {
    id?: number
    email?: string
    password?: string
}

export interface CommentsAxios {
    data: IComment[]


}

export interface IComment {
    id: number
    body: string
    authorId: number
    postTitle: string
    author: User
}