import {Meteor} from 'meteor/meteor';
import {carrito} from '../../../api/carrito/carrito.js';

Meteor.publish('carrito.get',function(email){
    return carrito.find({email:email});
})
