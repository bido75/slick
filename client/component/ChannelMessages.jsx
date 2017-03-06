import React from 'react';
import ChannelMessage from './ChannelMessage.jsx'

const ChannelMessages = (props)=> {
  const myChannelMessages =props.messages.map(
    message => <li key={message.id}><ChannelMessage {...message}/></li>);
  return <ul>{myChannelMessages}</ul>;
}

export default ChannelMessages;
