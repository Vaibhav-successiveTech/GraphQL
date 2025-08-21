import axios from 'axios'
export const sampleResolver = {
    Query: {
        Users: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users');
            return res.data;
        },

        getUser: async (_, { id }) => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return res.data;
        },
        Post: async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            return res.data;
        },
    },
} 