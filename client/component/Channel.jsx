import React, {Component} from 'react';
import ChannelMessages from './ChannelMessages.jsx'
import NewMessageForm from './NewMessageForm.jsx'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Channel extends Component{
  render (){
    if (this.props.data.loading){
      return <div>Loading...</div>
    }
    const messages = this.props.data.channel.messages;
    console.log("channel messages", messages);
        // const myMessages = [{id: 1, handle: 'rainede' , message: 'does it work like this' },{ id: 2, handle: 'jaapm' , message: 'consistently erroring' },{ id:3, handle: 'maciej' , message: 'am going to hold another one of these classes' }];
    return <div className="Channel">
    <ChannelMessages messages={messages} />
    <NewMessageForm/>
  </div>
};
}

const query = gql`
  query getChannels($name: String!){
  channel(name: $name){
    name
    messages {
      id
      handle
      text
    }
  }
}`;

// export default Channel;
export default graphql( query, {
    options: {
      pollInterval: 10000,
      variables: {
        name: "General"
      }
    },
  })(Channel);
