import {Template} from 'meteor/templating';
import {ClientOrders} from '../../api/clientOrders/clientOrders.js';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {ReactiveVar} from 'meteor/reactive-var';
import {Meteor} from 'meteor/meteor';
import {Images} from '../../api/images/images.js';
import './previeworders.html';

var total = new ReactiveVar("");
Template.previeworders.onCreated(function(){
	this.autorun(()=>{
		this.subscribe('carrito.get');
		
	});
});

Template.previeworders.events({
	'click #tp':function(e){
		e.preventDefault();
		console.log("click");
		if(Meteor.userId()){

			var numerotarjeta = $("#numero").val();
	        var nombre = $("#nombre").val();
	        var numeroseguridad = $("#numeroseguridad").val();
	        var fecha = $("#fecha").val();
	        if(numerotarjeta.length == 0 || nombre.length == 0 || numeroseguridad.length == 0 || fecha.length == 0){
	            alert("Empty !!!");
	            return;
	        }
			var datostarjeta = {
	            numero: numerotarjeta,
	            nombre: nombre,
	            numerodeseguridad: numeroseguridad,
	            fecha: fecha
        	}	
			var email = Meteor.user().emails[0].address;
			var pedido = aux.get();
			console.log(pedido);
			ClientOrders.insert({
				usuario: email,
				fecha: new Date(),
				pedido: pedido,
				state: false,
				datos_de_tarjeta: datostarjeta,
				
					
			});
			console.log(ClientOrders.find().fetch());
			for(i=0;i<pedido.length;i++){
				console.log(pedido[i].imageId);
				Images.update({_id:pedido[i].imageId},{$set: {state: true}});
			}
			aux.set([]);
		}

	},
	'click #rm':function(e){
		var email = Meteor.user().emails[0].address;
		e.preventDefault();
		//console.log(this._id);
		carrito.remove({'email':email});
	}
});

