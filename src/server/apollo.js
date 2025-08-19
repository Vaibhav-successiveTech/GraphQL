import { ApolloServer } from "@apollo/server";

export const createApolloServer = (schema)=>{
    return new ApolloServer({
        schema,
        introspection : true
    })
}