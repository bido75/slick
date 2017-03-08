import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import ChannelMessages from './ChannelMessages.jsx'
import ChannelMessageForm from './ChannelMessageForm.jsx'

class Channel extends Component{
  render (){
    if (this.props.data.loading){
      return (
        <div className="Channel">
          Loading...
        </div>
      )
    }
    if (!this.props.data.channel)
    {
      <div className="Channel">
        There is no such channel
      </div>
    }

    if (this.props.data.error){
      console.log(this.props.data.error)
      return (
        <div className="Channel">
          Something went wrong!
        </div>
      )
    }

    const messages =
     this.props.data.channel.messages;

    return (
      <div className="Channel">
        <ChannelMessages messages={messages} />
        <ChannelMessageForm channelName={this.props.data.channel.name}/>
      </div>
    )
};
}

const query = gql`
  query getChannel($name: String!){
  channel(name: $name){
    name
    messages {
      _id
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
