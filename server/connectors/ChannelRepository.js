// Responsible for talking to MongoDB
// Does the plumbing
import Channels from '../collections';

class ChannelRepository{
  getChannels(){
    return Channels.find().fetch();
  };
  getChannel(name){
    return Channels.findOne({name});
  };
  createMessage(channelName,userHandle, messageBody){
    const myMessage = {
      id : 1,
      handle: userHandle,
      text: messageBody
    }
    const updated = Channels.update({name: channelName},{
      $addToSet:{
        messages: [myMessage]
      }
    });
    if (updated){
      return myMessage
    }
    else{
      console.log("Update failed");
    }
  };
  createChannel(name){

   Channels.insert({name, messages: []});
   return this.getChannel(name);
  }
};

export default ChannelRepository;
