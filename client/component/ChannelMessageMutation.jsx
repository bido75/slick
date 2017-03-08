import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const mutation = gql`
  mutation createMessageMutation($channelName: String!,$messageUser:String!,  $messageBody: String!){
    createMessage(channelName: $channelName, messageUser:$messageUser,  messageBody: $messageBody){
      _id handle text
    }
  }
`;

export default graphql(mutation, {alias: 'ChannelMessageMutation'});
