// const channels = [
//   {
//     name: 'foo',
//     messages: [
//       {id:1 ,handle: 'jasper', text: 'Are you ready for lunch?'},
//       {id:3 ,handle: 'rainey', text: 'Just after this please'}
//     ]
//   },
//   {
//     name: 'bar',
//     messages:[
//       {id:2 ,handle: 'rainey', text: 'Just after this please'}
//     ]
//   }
// ];

const resolvers = {
  Query:{
    channels(obj, arg, context){
      return context.Channels.getChannels();
    },
    channel(obj, arg, context){
      console.log("before return",obj,  arg.name);
      return context.Channels.getChannel(arg.name);
      console.log("after return", arg.name);
    },
  },
  Mutation:{
    createChannel(obj, arg, context){
      return context.Channels.createChannel(arg.name)
    },
    createMessage(obj, arg, context){
      return context.Channels.createMessage(arg.channelName,arg.userHandle, arg.messageBody)
    }
  },
};

export default resolvers;
