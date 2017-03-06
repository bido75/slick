import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Channel from './component/Channel.jsx';
import ChannelDetail from './component/ChannelDetail.jsx';

Meteor.startup(()=>{
  render(
    <div>
      <Channel/>

      Hello, world!
    </div>,
    document.getElementById('root')
  );
});
