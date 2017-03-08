import React from 'react';
import ChannelMessage from './ChannelMessage.jsx'

const ChannelMessages = (props)=> {
  const myChannelMessages =props.messages.map(
    message => <li key={message._id}><ChannelMessage {...message}/></li>);
  return <ul className="ChannelMessages">{myChannelMessages}</ul>;
}

export default ChannelMessages;
