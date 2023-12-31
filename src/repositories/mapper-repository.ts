import {BlogViewMongoDB, PostViewMongoDB, UsersViewMongoDB} from "../models/db-models";


export const mapperRepository = {
    blogOutputMongoDBToBlogViewModel(blogDB: BlogViewMongoDB) {
        return {
            id: blogDB._id.toString(),
            name: blogDB.name,
            description: blogDB.description,
            websiteUrl: blogDB.websiteUrl,
            createdAt: blogDB.createdAt,
            isMembership: blogDB.isMembership
        }
    },
    postOutputMongoDBToPostViewModel(postDB: PostViewMongoDB) {
        return {
            id: postDB._id.toString(),
            title: postDB.title,
            shortDescription: postDB.shortDescription,
            content: postDB.content,
            blogId: postDB.blogId,
            blogName: postDB.blogName,
            createdAt: postDB.createdAt
        }
    },
    userOutputMongoDBtoUsersViewMongo(userDB: UsersViewMongoDB) {
        return {
            id: userDB._id.toString(),
            login: userDB.login,
            email: userDB.email,
            createdAt: userDB.createdAt
        }
    },

}