
//Importar metodos del server
import './methods.js';

import './publications/images.js';
import './publications/orders.js';
import './publications/clientOrders.js';
import './publications/carrito.js';
import {Meteor} from 'meteor/meteor';

Meteor.startup(function(){
	Accounts.onCreateUser(function(opciones, user){
		if(!user.profile){
			user.profile = {};
		}
		user.profile.state = true;
		return user;
	});
	Accounts.onLogin(function(){
		//console.log(Meteor.userId());
		var id = Meteor.userId();
        var email = Meteor.user().emails[0].address;
         if(email === 'Admin@gmail.com'){
            console.log("Admin");
            Roles.addUsersToRoles(id, ['Admin']);
        }
        else{
            //console.log("Client");
            Roles.addUsersToRoles(id, ['Client']);
        }
	});
});
