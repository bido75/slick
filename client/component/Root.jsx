import React, {Component} from 'react';
import Channel from './Channel.jsx';
import ChannelDetail from './ChannelDetail.jsx';

// console.log(Channel);
// console.log(ChannelDetail);
export default class Root extends Component{
  render (){
    return <div>
      <p>Root</p>
      <Channel/>
      <ChannelDetail/>
    </div>
  }
}
