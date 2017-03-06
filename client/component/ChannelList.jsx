import React, {Component} from 'react';

export default class ChannelList extends Component{
  render (){

    const channels = [{ name: 'general' }, { name: 'foobar' }];

    const myChannelList = channels.map(data =>
      <li key={data.name}>{data.name}</li>
    );
    return <ul className="channelList">{myChannelList}</ul>;
  }
}
