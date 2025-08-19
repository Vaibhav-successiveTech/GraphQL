import { User, Comment,Post } from './dataSource.js'
export const blogMutationResolver = {
    updateUser: (_, { id, name, email }) => {
        const user = User.find(i => i.id == id);
        if (user) {
            user.name = name;
            user.email = email;
        }
        return User
    },
    deleteComments: (_, { id }) => {
        const index = Comment.findIndex(i => i.id == id);
        if (index !== -1) Comment.splice(index, 1);
        return Comment;
    },
    addPost: (_,{id,title,content,authorId})=>{
        const idx = Post.find(i => i.id == id);
        if(!idx)Post.push({id,title,content,authorId});
        return Post;
    },
    addComment: (_,{id,content,authorId,postId})=>{
        const idx = Comment.find(i=>i.id==id);
        if(!idx)Comment.push({id,content,authorId,postId})
        return Comment;
    }
}