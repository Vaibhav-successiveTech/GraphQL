import { messages } from "./dataSource.js";

export const messageMutationResolvers = {
  postMessage: (_, { content, author,title }, {pubsub}) => {
    const newMessage = {
      id: String(messages.length + 1),
      content,
      author,
      createdAt: new Date().toISOString(),
      title
    };
    messages.push(newMessage);
    pubsub.publish('MESSAGE_ADDED', { MessageAdded : newMessage });
    return newMessage;
  }, 
};