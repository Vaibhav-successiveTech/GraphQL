import ChatMutation from './mutation.js'
import { fetchHistoryResolver } from './query.js'
const ChatModule = {
    Query:fetchHistoryResolver,
    Mutation : ChatMutation
}

export default ChatModule