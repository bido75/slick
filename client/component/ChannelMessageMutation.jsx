import { graphql } from 'react-apollo';
import gql from 'graphql-tag';


const mutation = gql`
  mutation post($channelName: String!, $message: String!){
    post(channelName: $channelName, message: $message){
      id handle message
    }
  }
`;

export default graphql(mutation);
