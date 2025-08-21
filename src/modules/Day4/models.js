import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
    id:Number,
    name:String,
    price:Number,
    description:String
})

const UserSchema = new Schema({
    id : Number,
    name: String,
    role : String,
    token: String
})

const ProductModel = model('Product',ProductSchema);
const UserModel = model('User',UserSchema);

export {ProductModel,UserModel}