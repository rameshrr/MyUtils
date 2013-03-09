/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/7/13
 * Time: 8:13 AM
 * To change this template use File | Settings | File Templates.
 */


define(['jquery', 'backbone', 'models/patient', 'views/patientlist', 'views/patientform'],
    function($, Backbone, PatientModel, PatientListView, PatientFormView){
   var AppRouter =  Backbone.Router.extend({
       routes:{
           "":"listPatients",
           "patient":"listPatients",
           "patient/new":"showNewPatient",
           "patient/:id":"viewPatient"
       },

       initialize:function(){
           console.log('Route Initializing');
       },

       listPatients: function(){

           console.log('Listing Patients');
           this.patientList = new PatientListView();
           $('#patient').html(this.patientList.el);
       },

       showNewPatient: function(){
           this.patient = new PatientModel();
           this.patient.id = null;
           this.patientForm = new PatientFormView({model: this.patient});
           $('#patient').html(this.patientForm.el);
       },

       viewPatient: function(id){
           this.patient = new PatientModel();
           this.patient.id = id;
           this.patientForm = new PatientFormView({model: this.patient});
           $('#patient').html(this.patientForm.el);
       }
   });

    return AppRouter;
});