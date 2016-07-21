
import { Orders } from './orders.js';
import { Meteor } from 'meteor/meteor';
//Creamos un metodo que agrega una nueva orden a una imagen dado un id
Meteor.methods({
    addOrder:function(orderId, valor, orderText, imageID){

        Orders.update({image:imageID},{
            $push:{
                orders:{
                	id: orderId, 
                	valor: valor,
                    text: orderText
                }
            }
        });
    },
});