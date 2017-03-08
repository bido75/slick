import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import  Routes from './component/Routes.jsx';
const apolloClient = new ApolloClient();

Meteor.startup(()=>{
  // console.log(apolloClient);
  render(
    <ApolloProvider client={apolloClient}>
    <div>
      {Routes}
    </div>
  </ApolloProvider>,
    document.getElementById('root'),
  );
});
