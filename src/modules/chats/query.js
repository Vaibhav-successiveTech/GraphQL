import  jwt  from "jsonwebtoken"
import { history } from "./history.js"

export const fetchHistoryResolver = {
    fetchHistory : (_,{name},{token})=>{
        const res = jwt.verify(token,'UserKey');
        if(res!=name){
            return {
                code : 400,
                message : 'Unauthorized User'
            }
        }
        return {list : history}
    }
}