import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Root from './Root.jsx';
import Home from './Home.jsx';
import ChannelWithData from './Channel.jsx'
// import CreateChannel from

//define which URL map to which component and what structure
export default (
  <Router history={browserHistory}>
    <Route component={Root}>
      <Route path="/" component={Home}></Route>
      <Route path="/channel/:channelName" component={ChannelWithData} ></Route>
    </Route>
  </Router>
)
