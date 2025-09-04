import { messageModule } from "../modules/message/index.js";
import { blogModule } from "../modules/blog/index.js";
import { Post, User } from "../modules/blog/dataSource.js";
import { sampleResolver } from "../modules/sample/query.js";
import axios from 'axios';
import pubsub from '../server/pubsub.js'
import ChatModule from '../modules/chats/index.js'
import { ProductModule,UserModule } from "../modules/Day4/index.js";
export const resolvers = {
    Query: {
        ...messageModule.Query,
        ...blogModule.Query,
        ...sampleResolver.Query,
        ...ChatModule.Query,
        ...ProductModule.Query
    },
    Mutation: {
        ...messageModule.Mutation,
        ...blogModule.Mutation,
        ...ChatModule.Mutation,
        ...ProductModule.Mutation,
        ...UserModule.Mutation
    },
    Subscription : {
        MessageAdded : {
            subscribe : ()=>pubsub.asyncIterableIterator(['MESSAGE_ADDED'])
        },
        PostChat : {
            subscribe : ()=>{
                const res = pubsub.asyncIterableIterator(['POST_CHAT'])
                return res;
            }
        }
    },
    Posts: {
        userInfo: async (parent) => {
            try {
                const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${parent.userId}`);
                return res.data;
            } catch (err) {
                console.error("Error fetching userInfo:", err.message);
            }
        }
    },
    historyResult : {
        __resolveType(obj){
            if(obj.list){
                return 'history'
            }
            if(obj.code){
                return 'senderError'
            }
        }
    },
    UserResult: {
        __resolveType(obj) {
            if (obj.id) {
                return 'User'; 
            }
            if (obj.message) {
                return 'Error';
            }
            return null;
        }
    },
    ChatResult: {
        __resolveType(obj){
            if(obj.message){
                return 'Chat'
            }
            if(obj.code){
                return 'senderError'
            }
        }
    },
    RegisterResult : {
        __resolveType(obj){
            if(obj.id){
                return 'Participant'
            }
            if(obj.code){
                return 'senderError'
            }
        }
    },
    ProductResult : {
        __resolveType(obj){
            if(obj.code){
                return 'error'
            }
            if(obj.id){
                return 'Product'
            }
        }
    },
    Post: {
        author: (parent) => {
            return User.find(user => user.id == parent.authorId)
        },
    },
    Comment: {
        post: (parent) => {
            return Post.find(post => post.id == parent.postId)
        },
        author: (parent) => {
            const ans = User.find(user => user.id == parent.authorId)
            return ans;
        }
    },
};
