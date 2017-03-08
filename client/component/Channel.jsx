import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelMessages from './ChannelMessages.jsx'
import NewMessageForm from './NewMessageForm.jsx'

class Channel extends Component{
  render (){
    if (this.props.data.loading){
      return (
        <div className="Channel">
          Loading...
        </div>
      )
    }
    if (this.props.data.error){
      return (
        <div className="Channel">
          Something went wrong!
        </div>
      )
    }

    const messages = this.props.data.channel.messages;

    return <div className="Channel">
    <ChannelMessages messages={messages} />
    <NewMessageForm/>
  </div>
};
}

const query = gql`
  query getChannels($name: String!){
  channel(name: $name){
    _id
    name
    messages {
      id
      handle
      text
    }
  }
}`;

// export default Channel;
const ChannelWithData = graphql( query, {
    options: ownProps =>({
      variables: {
        name: ownProps.params.channelName
      }
    })
  })(Channel);

  export default ChannelWithData;
