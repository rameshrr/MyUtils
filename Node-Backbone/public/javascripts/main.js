/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/6/13
 * Time: 11:44 AM
 * To change this template use File | Settings | File Templates.
 */

//alert('Test');

require.config({
    //baseUrl: "libs",
   paths:{
       jquery:'libs/jquery/jquery-min',
       underscore:'libs/underscore/underscore-min',
       handlebars:'libs/handlebars/handlebars',
       backbone:'libs/backbone/backbone-optamd3-min',
       text:'libs/require/text'
   }
});

//require(['models/patient', 'views/patient'], function(PatientModel, PatientView){
//    var patientModel = new PatientModel();
//    console.log('Data from patient=> LN: ' + patientModel.get('firstName'));
//
//    var patientView = new PatientView({model:patientModel});
//})

require(['backbone', 'routes/routes'], function(Backbone, Router){
    var router = new Router();

    Backbone.history.start();
})