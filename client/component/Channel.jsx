import React, {Component} from 'react';
import ChannelMessages from './ChannelMessages.jsx'
import NewMessageForm from './NewMessageForm.jsx'

class Channel extends Component{
  render (){
        const myMessages = [{id: 1, handle: 'rainede' , message: 'does it work like this' },{ id: 2, handle: 'jaapm' , message: 'consistently erroring' },{ id:3, handle: 'maciej' , message: 'am going to hold another one of these classes' }];
    return <div className="Channel">
    <ChannelMessages messages={myMessages} />
    <NewMessageForm/>
  </div>
};
}


export default Channel;
