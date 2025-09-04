import { ProductModel } from "./models.js"
const ProductQueryResolver = {
    fetchProduct: async () => {
        const res = await ProductModel.find();
        return res;
    },
    fetchProductId : async(_,{id})=>{
        const res = await ProductModel.findOne({id:id});
        return res;
    }
}

export {ProductQueryResolver};