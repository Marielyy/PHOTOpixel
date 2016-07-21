
import {ReactiveVar} from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Template} from 'meteor/templating';
import {Meteor} from 'meteor/meteor';
import {$} from 'meteor/jquery';
//Importar images de la api
import {Images} from '../../api/images/images.js';
import {Orders} from '../../api/orders/orders.js';
import {ClientOrders} from '../../api/clientOrders/clientOrders.js';
//Importar templates
import './dropzone.html';
import './preview.html';
import './previeworders.html';
var ruta = new ReactiveVar("");
var opciones = new ReactiveVar("");
var total = new ReactiveVar(0);
aux = new ReactiveVar([]);
idOrden = new Array();
//var id2 = new ReactiveVar("");

function getPrecioTotal(){
    var aux = opciones.get();
    var a=0;
    for (i=0; i<aux.length;i++){
        a=a+aux[i].valor;
    }
    return a;
}

function isRegisterOption(id){
    var aux= opciones.get();
    var ct=0;
    for (var i = 0; i<aux.length;i++) {
        if( aux[i].id == id){
            ct++;
            break;
        }   
    }
    if(ct == 0){
        return false;
    }
    else{
        return true;
    }
}

Template.preview.onCreated(function (){
    this.autorun(()=>{

        if(FlowRouter.getParam('id')){
            ruta.set('/cfs/files/images/'+FlowRouter.getParam('id'));
        }
        else{
            ruta.set('/preview.png');
        }
       
    });

});

Template.options.onCreated(function (){
    this.autorun(()=>{
        //Recuperamos el id de la ruta
        var id = FlowRouter.getParam('id');
        this.subscribe('Orders.get',id);
    });
});

Template.preview.helpers({
    getRutaImg:function (){
      return ruta.get();
    },
    getItems:function (){
        if(FlowRouter.getParam('id')){
            var id = FlowRouter.getParam('id');
            var item = Orders.findOne({image:id});
            if(item){
                //console.log(item); 
                opciones.set(item.orders);
                //console.log(opciones);
                return item;
            }
            return [];
        }
        else{
            return [];
        }
    },
    PrecioTotal:function(){
        return getPrecioTotal();
    },
});

Template.options.events({
    'click .btn':function (event){
        event.preventDefault();
        var id = $(event.currentTarget).attr('id');
        var valor = parseInt($(event.currentTarget).attr('valor'));
        var value = event.target.value;
        var text = $(event.target).text();
        var idImage = FlowRouter.getParam('id');
        if(!isRegisterOption(id)){
             Meteor.call('addOrder',id,valor,text,idImage,);
        }
    }
});

var itemCarrito=[];
Template.preview.events({
    'click .tag':function (event){
        event.preventDefault();
        var id = $(event.currentTarget).attr('id');
        var idOrder = $(event.currentTarget).attr('idOrder');
        //console.log("click para eliminr")
        Orders.update({'_id':idOrder}, 
            {'$pull':{'orders':{'id':id}}}
        )
    }
    
});
Template.previo.events({
    'click #btn':function(event){
        event.preventDefault();
        var email = Meteor.user().emails[0].address;
        var imageId = FlowRouter.getParam('id');
        var total = getPrecioTotal();
        var orders = opciones.curValue;
        var temp =  {
            imageId: imageId,
            orders: orders,
            precioTotal: total,         
        };

        itemCarrito.push(temp);

        aux.set(itemCarrito);

        /*var id=carrito.insert({
            email: email,
            pedidos: aux.get(),
        });*/
        console.log("se inserto con exito");
        console.log(aux);

    },
    'click #pre':function(){
        console.log(aux);
        FlowRouter.go("/previeworders/");
    }
});

Template.previeworders.helpers({
    Aux(){
        //return carrito.find().fetch();
        return aux.get();
    },
});

