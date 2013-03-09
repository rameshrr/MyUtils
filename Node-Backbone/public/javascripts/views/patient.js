/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/6/13
 * Time: 12:55 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'backbone', 'models/patient', 'views/patientform', 'views/patientlist'],
    function($, Backbone, PatientModel, PatientFormView, PatientListView){
    var PatientView = Backbone.View.extend({

        el: $('#patient'),
        viewMode:'G',

        initialize: function(){
            console.log('Patient view initialized');
            this.render();
        },

        render: function(){
            //$(this.el).html('<b>Patient data</b>');
            console.log('Patient view rendering');

            if(this.viewMode == 'F'){
                this.patient = new PatientModel();
                this.patientForm = new PatientFormView({model: this.patient});
                $(this.el).html(this.patientForm.el);
            }
            else{
                this.patientList = new PatientListView();
                console.log(this.patientList.el);
                $(this.el).html(this.patientList.el);
            }
        }
    });

    return PatientView;
});