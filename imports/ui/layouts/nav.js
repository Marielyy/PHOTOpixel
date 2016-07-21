import {Template} from 'meteor/templating';
import './nav.html'
import { FlowRouter } from 'meteor/kadira:flow-router';
//accountsUIBootstrap3.setLanguaje('es');
Accounts.ui.config({
    requestPermissions: {},
    passwordSignupFields: 'EMAIL_ONLY' //  One of 'USERNAME_AND_EMAIL', 'USERNAME_AND_OPTIONAL_EMAIL', 'USERNAME_ONLY', or 'EMAIL_ONLY' (default).
	,
	extraSignupFields: [{
		fieldName: 'first-name',
        fieldLabel: 'Name',
        inputType: 'text',
        visible: true,
        validate: function(value, errorFunction) {
        	if (!value) {
        		errorFunction("Porfavor Escriba su nombre")
        		return false;
        	} else {
        		return true;
        	}
        }
	}, {
		fieldName: 'Last-name',
		fieldLabel: 'Last name',
		inputType: 'text',
		visible: true,
		validate: function(value, errorfunction) {
			if (!value) {
				errorfunction("Porfavor escriba sus apellidos")
				return false;
			} else {
				return true;
			}	
		}

	}]
});

Accounts.onLogin( function(){
	FlowRouter.go("/");
});

Template.nav.events({
	"click #login-buttons-logout": function(){
		FlowRouter.go("/");
	},
});




/*var TEMPLATE= new ReactiveVar("layout");
menu=[{name: "Principal", template:"layout"},
{name: "References", template:"references"},
{name: "Blog", template:"blog"},
{name: "Gallery", template:"galery"}]
Template.nav.helpers({
	menu:function(){
		return menu;
	}
	
});

Template.nav.events({
	"click a": function(e){
		e.preventDefault();
		TEMPLATE.set(this.template);
		console.log(this);
	}
});*/