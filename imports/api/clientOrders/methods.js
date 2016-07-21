import {Meteor} from 'meteor/meteor';
import {ClientOrders} from './clientOrders.js';
//import {Orders} from './products';

ClientOrders.allow({
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

