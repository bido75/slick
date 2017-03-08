const resolvers = {
  Query:{
    channels(obj, arg, context){
      return context.Channels.getChannels();
    },
    channel(obj, arg, context){
      console.log("before return",obj,  arg.name);
      return context.Channels.getChannel(arg.name);
    },
  },
  Mutation:{
    createChannel(obj, arg, context){
      return context.Channels.createChannel(arg.name)
    },
    createMessage(obj, arg, context){
      return  context.Channels.createMessage(arg.channelName,arg.messageUser, arg.messageBody)
      // if(context.user){

    // }
    }
  },
};

export default resolvers;
