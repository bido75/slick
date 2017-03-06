import React, {Component} from 'react';
import ChannelList from './ChannelList.jsx';
import ChannelDetail from './ChannelDetail.jsx';

// console.log(Channel);
// console.log(ChannelDetail);
export default class Root extends Component{

  render (){

    return <div className="Root">
      <ChannelList/>
      <ChannelDetail/>
    </div>
  }
}
