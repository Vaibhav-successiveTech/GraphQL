import { createApolloServer } from "./src/server/express.js";
import { connectToDb } from "./src/modules/Day4/db.js";

const httpServer = await createApolloServer(4000);

httpServer.listen(4000, async() => {
  await connectToDb();
  console.log(`🚀 Query/Mutation endpoint: http://localhost:4000/graphql`);
  console.log(`🚀 Subscription endpoint: ws://localhost:4000/graphql`);
});