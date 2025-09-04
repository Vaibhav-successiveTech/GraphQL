import { ProductModel, UserModel } from "./models.js"
import jwt from 'jsonwebtoken'
const ProductMutationResolver = {
    addProduct : async(_,{id,name,price,description},{token})=>{
        const user = await UserModel.findOne({token:token});
        if(!user || user.role != 'admin'){
            return {
                code : 400,
                message : 'Unauthorized User'
            }
        }
        const newProduct = new ProductModel({id:id,name:name,price:price,description:description});
        const res = await newProduct.save();
        return res;
    }
}

const UserMutationResolver = {
    RegisterUser : async(_,{id,name,role})=>{
        const token = jwt.sign({id,name},'UserKey');
        const newUser = UserModel({id:id,name:name,role:role,token:token});
        const res = await newUser.save();
        return res;
    },
    loginUser : async(_,{id,name},{token})=>{
        const res = jwt.verify(token,'UserKey');
        if(res.id!=id || res.name != name){
            return 'Invalid Username'
        }
        return 'User Logged In'
    }
}

export {ProductMutationResolver,UserMutationResolver}