import React, {Component} from 'react';

export default class ChannelList extends Component{
  render (){

    const channels = [{ name: 'general' }, { name: 'foobar' }];

    return (
      <div className='ChannelList'>
        <h3>{`CHANNELS (${channels.length})`}</h3>
        <ul>
          {channels.map(data =>
            <li key={data.name}>{`#${data.name}`}</li>
          )}
        </ul>
      </div>
    )
  }
}
