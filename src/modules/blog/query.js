import { Post } from "./dataSource.js";
import { Comment } from "./dataSource.js";
import { User } from "./dataSource.js";
import axios from 'axios'

export const UserQueryResolver = {
    user: async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
        return User;
    },
    posts: async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
        return Post
    },
    comments: async () => {
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve()
            }, 2000)
        })
        return Comment
    },

    getUserBlog: (_, { id }) => {
        const Error = false;
        if(Error){
            return {
                message : 'Error in fetching Comments',
                Code : 400
            }
        }
        return User.find(user => user.id === parseInt(id))
    },
    getPostBlog: (_, { id }) => {
        const Error = true;
        if(Error){
            return {
                message : 'Error in fetching Comments',
                Code : 400
            }
        }
        return Post.find(post => post.id === parseInt(id))
    },
    getCommentBlog: (_, { id }) => {
        const Error = true;
        if(Error){
            return {
                message : 'Error in fetching Comments',
                Code : 400
            }
        }
        return Comment.find(comment => comment.id === parseInt(id))
    },

    getTodo: async (_,{page,limit})=>{
        const list = (await axios.get(`https://jsonplaceholder.typicode.com/todos`)).data;
        const start = limit * (page-1);
        const end = limit + start;
        const sort = false;
        let newlist = list.slice(start,end);
        if(sort){
            newlist.sort((a,b)=>b.id-a.id);
        }
        return newlist;
    }

}