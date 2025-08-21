import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { typeDefs } from "./src/schema/typeDefs.js";
import { resolvers } from "./src/schema/resolvers.js";
import dotenv from 'dotenv'
dotenv.config();


const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const PORT = process.env.PORT || 4000
const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`🚀 Server ready at ${url}`);