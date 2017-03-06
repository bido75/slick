import React, {Component} from 'react';
import ChannelMessages from './ChannelMessages.jsx'
import NewMessageForm from './NewMessageForm.jsx'

export default class ChannelDetail extends Component{
  render (){
        const myMessages = [{id: 1, handle: 'rainede' , message: 'does it work like this' },{ id: 2, handle: 'jaapm' , message: 'consistently erroring' },{ id:3, handle: 'maciej' , message: 'am going to hold another one of these classes' }];
    return <div>
    <ChannelMessages messages={myMessages} />
    <NewMessageForm/>
  </div>
};
}

//
// render (){
//
//   const channels = [{ name: 'general' }, { name: 'foobar' }];
//
//   const myChannelList = channels.map(data =>
//     <li key={data.name}>{data.name}</li>
//   );
//   return <ul>{myChannelList}</ul>;
// }
