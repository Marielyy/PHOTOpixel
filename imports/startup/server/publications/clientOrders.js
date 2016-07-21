import {Meteor} from 'meteor/meteor';
import {ClientOrders} from '../../../api/clientOrders/clientOrders.js';

Meteor.publish('clientOrders.get',function(){
    return ClientOrders.find();
})
