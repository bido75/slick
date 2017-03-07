import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ChannelList extends Component {
  render (){
    if (this.props.data.loading){
      return <div>Loading...</div>
    }
    const channels = this.props.data.channels;
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

const query = gql`
  query ChannelList {
    channels{
      name
    }
  }
`;

// export default ChannelList;
export default graphql( query, {
    options: {
      pollInterval: 10000
    },
  })(ChannelList);
