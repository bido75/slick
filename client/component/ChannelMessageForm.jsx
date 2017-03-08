import React, {Component} from 'react';
import  ChannelMessageMutation from './ChannelMessageMutation';

class ChannelMessageForm extends Component{
  render (){
    return <form className="NewClassForm" onSubmit={e => this.handleSubmit(e)} >
      <input ref="messageInput"></input>
      <button type="submit"></button>
    </form>
  }
  handleSubmit(e){
   e.preventDefault();
   const message = this.refs.messageInput.value;
 }

}
export default ChannelMessageMutation(ChannelMessageForm);
