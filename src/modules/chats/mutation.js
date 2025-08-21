import jwt from 'jsonwebtoken';
import { UserData } from './dataSource.js';
import { history } from './history.js';

const ChatMutation = {
    postChat : (_,{message},{pubsub,token})=>{
        const user = Object.values(UserData).includes(token);
        if(!user){
            return {
                code : 400,
                message : 'Unauthorized User'
            }
        }
        const newChat = {message:message};
        history.push(newChat);
        pubsub.publish('POST_CHAT',{PostChat : newChat})
        return newChat;
    },
    register : (_,{id,name})=>{
        const res = UserData[name];
        if(res){
            return {
                code : 400,
                message : 'User Already Exist'
            }
        }
        const token = jwt.sign(name,'UserKey');
        UserData[name]=token;
        return {id,name,token};
    },
    login : (_,{name},{token})=>{
        const find = UserData[name];
        if(!find){
            return {
                code : 400,
                message : 'User Dont Exist'
            }
        }
        const res = jwt.verify(token,'UserKey');
        if(res != name){
            return {code : 400, message : 'Unauthorized'}
        }
        return {id : '1',name : name, token,token}
    }
}

export default ChatMutation;