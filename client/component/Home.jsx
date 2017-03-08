import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class Home extends React.Component{
  componentDidUpdate(prevProps){
    if (prevProps.data.loading !== this.props.data.loading){
        if(!this.props.data.loading){
          if (!this.props.data.channels.length){
          const firstChannel = this.props.data.channels[0];
          this.props.router.push(`/channels/${firstChannel.name}`);}
        }
    }
  }
  render(){
    return (
      <div className="Home">You don't have any messages yet!</div>
    )
  }
}

const query = gql`
  query getHome {
    channels{
      name
    }
  }
`
export default graphql(query)(Home);
