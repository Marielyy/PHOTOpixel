import {Meteor} from 'meteor/meteor';
import {Chat} from './chat.js';

Chat.allow({
	insert: function(){
		return true;
	},
	update: function(){
		return true;
	},
	remove: function(){
		return true;
	},
});
