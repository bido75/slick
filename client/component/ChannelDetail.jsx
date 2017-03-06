import React, {Component} from 'react';
import ChannelHistory from './ChannelHistory.jsx'
import NewMessageForm from './NewMessageForm.jsx'

export default class ChannelDetail extends Component{
  render (){
    const messages = [{id: 1, handle: 'rainede' , message: 'does it work like this' },{ id: 2, handle: 'jaapm' , message: 'consistently erroring' },{ id:3, handle: 'maciej' , message: 'am going to hold another one of these classes' }];

    const myChannelHistory = messages.map( data =>
      <li key ={data.id}> {data.handle}<br/>{data.message}</li>);
    return <ul>{myChannelHistory}</ul>;
  }
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
