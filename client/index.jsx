import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Root, Foo } from './component/Root.jsx';


Meteor.startup(()=>{
  render(
    <div>
      <Root/>
    </div>,
    document.getElementById('root')
  );
});
