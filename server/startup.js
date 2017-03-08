import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser((options, user) => {
if (user.services && user.services.facebook){

}
});
