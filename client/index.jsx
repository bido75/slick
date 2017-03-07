import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import  Root from './component/Root.jsx';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

const apolloClient = new ApolloClient();

Meteor.startup(()=>{
  console.log(apolloClient);
  render(
    <ApolloProvider client={apolloClient}>
    <div>
      <Root/>
    </div>
  </ApolloProvider>,
    document.getElementById('root'),
  );
});
