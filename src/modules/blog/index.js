import { UserQueryResolver } from "./query.js";
import { blogMutationResolver } from "./mutation.js";

export const blogModule={
    Query:UserQueryResolver,
    Mutation:blogMutationResolver
}