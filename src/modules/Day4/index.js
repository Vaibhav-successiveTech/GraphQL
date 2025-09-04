import { ProductMutationResolver,UserMutationResolver } from "./mutation.js";
import { ProductQueryResolver } from "./query.js";

const ProductModule = {
    Query : ProductQueryResolver,
    Mutation : ProductMutationResolver
}

const UserModule = {
    Mutation : UserMutationResolver
}

export {ProductModule,UserModule}