import { messageModule } from "../modules/message/index.js";
import { blogModule } from "../modules/blog/index.js";
import { Post, User } from "../modules/blog/dataSource.js";
import { sampleResolver } from "../modules/sample/query.js";
import axios from 'axios';
export const resolvers = {
    Query: {
        ...messageModule.Query,
        ...blogModule.Query,
        ...sampleResolver.Query
    },
    Mutation: {
        ...messageModule.Mutation,
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
    Post: {
        author: (parent) => {
            return User.find(user => user.id === parent.authorId)
        }
    },

    Comment: {
        post: (parent) => {
            return Post.find(post => post.id === parent.postId)
        }
    },

    Comment: {
        author: (parent) => {
            const ans = User.find(user => user.id === parent.authorId)
            return ans;
        }
    }
};
