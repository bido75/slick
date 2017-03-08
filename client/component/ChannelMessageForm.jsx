import React, {Component} from 'react';

export default class ChannelMessageForm extends Component{
  render (){
    return <form className="NewClassForm" onSubmit={e => this.handleSubmit(e)} >
      <input ref="messageInput"></input>
      <button type="submit"></button>
    </form>
  }
  handleSubmit(e){
   e.preventDefault();
   console.log(this.refs.messageInput.value);
 }

}
