//presentations input models

export type UsersInputModel = {
    login: string
    password: string
    email: string
}

export type findUserPaginateModel = {
    searchLoginTerm: string
    searchEmailTerm: string
    sortBy: string
    sortDirection: "asc" | "desc"
    pageNumber: number
    pageSize: number
}
//presentations view models
export type UsersViewModel = {
    id: string
    login: string
    email: string
    createdAt: string
}

export type UserViewPaginatedModel = {
    pagesCount: number
    pageSize: number
    page: number
    totalCount: number
    items: UsersViewModel[]
}

//auth
export type AuthModel = {
    loginOrEmail: string
    password: string
}