import {Template} from 'meteor/templating';
import {ClientOrders} from '../../../api/clientOrders/clientOrders.js';
import {Images} from '../../../api/images/images.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Meteor} from 'meteor/meteor';
import './admin.html';

var pedido= new ReactiveVar("");

Template.admin.onCreated(function(){
	this.autorun(()=>{
		this.subscribe('clientOrders.get');
		
	});
});

Template.admin.events({
	'click #btn':function(){
		pedido.set(ClientOrders.find().fetch());
		FlowRouter.go("/showOrders");
	}
});

var total = 0;
Template.showOrders.helpers({
	foo(){
		return pedido.get();
	},
	getTotal:function(valor){
		total = total + valor;
		return total;
	}
});