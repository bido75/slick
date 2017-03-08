import React, {Component} from 'react';
import  ChannelMessageMutation from './ChannelMessageMutation';
import update from 'immutatbility-helper';

class ChannelMessageForm extends Component{
  render (){
    return <form className="NewClassForm" onSubmit={e => this.handleSubmit(e)} >
      <input ref="messageInput"></input>
      <button type="submit"></button>
    </form>
  }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.props);
    const message = this.refs.messageInput.value;
    this.props.mutate({
      variables: {
        channelName: this.props.channelName,
        messageUser:"Jaap",
        messageBody: message
      },
      updateQueries:{
        getChannel: (previousResult, obj) =>{
          return update(previousResult, {
            channel: {
              messages: {
                $push: [obj.mutationResult.data.CreateMessage],
              },
            },
        })
      }
    }
  });
}
}
export default ChannelMessageMutation(ChannelMessageForm);
