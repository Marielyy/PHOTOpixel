//Routes
import { FlowRouter } from 'meteor/kadira:flow-router';
import {Meteor} from  'meteor/meteor';
//Importar Layouts y templates
import '../../ui/layouts/blog/blog.js';
import '../../ui/layouts/contact/contact.js';
import '../../ui/layouts/galeria/galeria.js';
import '../../ui/layouts/admin/admin.js';
import '../../ui/layouts/layout.js';
import '../../ui/layouts/layout2.js';
import '../../ui/layouts/layout3.js';
import '../../ui/home/home.js';

//importar templates de images
import '../../ui/images/dropzone.js';
import '../../ui/images/preview.js';
import '../../ui/images/previeworders.js';


//Ruta para el home
FlowRouter.route('/', {
    name: 'home',
    action() {
        //BlazeLayout.render('layout', { main: 'home' , footers:'footer'});
        BlazeLayout.render('layout', { carusel :'home', footers: 'footer'});
    }
});
//Ruta para las imagenes
FlowRouter.route('/images/', {
    name: 'images',
    action() {
        BlazeLayout.render('layout3', { drop :'dropzone' ,button :'options', preview:'preview', footers: 'footer'});
    }
});
//Ruta que recube el id de la imagen
FlowRouter.route('/images/:id',{
    name: 'images',
    action() {
        //BlazeLayout.render('layout', { main:'preview' ,section :'dropzone',subnav :'options' });
        BlazeLayout.render('layout3', { drop :'dropzone' , previo:'previo' ,button :'options', preview:'preview', footers: 'footer'});
    }
});
FlowRouter.route('/admin/', {
    name: 'admin',
    action() {
        //BlazeLayout.render('layout2', { section2:'admin' });
        BlazeLayout.render('layout2', { section2:'admin', footers: 'footer'});
    }
});
FlowRouter.route('/blog/', {
    name: 'blog',
    action() {
        //BlazeLayout.render('layout', { section :'blog'});
        BlazeLayout.render('layout', { blog :'blog', footers: 'footer'});
    }
});
FlowRouter.route('/galery/', {
    name: 'galery',
    action() {
        //BlazeLayout.render('layout', { section2 :'galery', footers:'footer'});
        BlazeLayout.render('layout', { blog:'galery', footers: 'footer'});
    }
});
FlowRouter.route('/contact/', {
    name: 'contact',
    action() {
        //BlazeLayout.render('layout2', { section2 :'contact', footers : 'footer'});
        BlazeLayout.render('layout2', { section2 :'contact', footers: 'footer'});
    }
});
FlowRouter.route('/showOrders/', {
    name: 'showOrders',
    action() {
        //BlazeLayout.render('layout2', { section2 :'showOrders'});
        BlazeLayout.render('layout2', { section2 :'showOrders', footers: 'footer'});
    }
});
FlowRouter.route('/previeworders/', {
    name: 'previeworders',
    action() {
         //BlazeLayout.render('layout2', { section2 :'previeworders'});
       BlazeLayout.render('layout2', { section2 :'previeworders', footers: 'footer'});
    }
});