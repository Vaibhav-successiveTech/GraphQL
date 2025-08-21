import mongoose from "mongoose"
export const connectToDb = async()=>{
    try{
        await mongoose.connect(`mongodb://localhost:27017/graphql`)
        console.log('Connected To DB')
    }catch(err){
        console.log(err)
    }
}
