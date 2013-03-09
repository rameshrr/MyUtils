/**
* Created with JetBrains WebStorm.
* User: Ramesh
* Date: 3/6/13
* Time: 2:21 PM
* To change this template use File | Settings | File Templates.
*/

define(['jquery', 'underscore', 'backbone', 'handlebars', 'collections/patientlist', 'text!templates/patientlist.html'],
    function($, _, Backbone, Handlebars_, PatientListCollection, PatientListTemplate){
        var PatientFormView = Backbone.View.extend({

            //template:Handlebars.compile(PatientListTemplate),
            template:_.template(PatientListTemplate),

            events:{
                "click #btnAdd":"navigateNewPatient"
            },

            initialize: function(){
                console.log('Patient form initiaized');
                this.render();

                this.patients = new PatientListCollection();

                //this.patients.fetch();
                //this.patients.bind('all', this.renderRow, this);

                self = this;
                this.patients.fetch({
                   success:function(response){
                       console.dir(response.toJSON());
                       var grid = $(self.el).find('#GridPatient');

                       var pats = response.toJSON();
                       for(var i=0; i<pats.length; i++){
                           grid.append(pats[i].firstName + '<br />');
                       }
                   }
                });
            },

            render: function(){
                $(this.el).html(this.template());
            },


            navigateNewPatient: function(event){
                location.href = location.protocol + '//' + location.host + location.pathname + '#patient/new';
            },

            renderRow: function(){

                var grid = $(this.el).find('#GridPatient');
                this.patients.each(function(model){
                    var patient = model.toJSON();
                    grid.append(patient.firstName + '<br />');
                });
            }
        });

        return PatientFormView;
    });