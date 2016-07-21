import {Meteor} from 'meteor/meteor';
import {carrito} from './carrito.js';


carrito.allow({
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