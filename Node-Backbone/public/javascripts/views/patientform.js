/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/6/13
 * Time: 2:06 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'underscore', 'backbone', 'handlebars', 'text!templates/patientform.html'],
    function($, _, Backbone, Handlebars_, PatientFormTemplate){
        var PatientFormView = Backbone.View.extend({

            template:Handlebars.compile(PatientFormTemplate),

            events:{
                "click #btnSave": "savePatient",
                "click #btnCancel": "navigatePatients"
            },

            initialize: function(){
                console.log('Patient form initiaized');
                console.log(this.model.isNew());

                this.render();
            },

            navigatePatients: function(event){
                location.href = location.protocol + '//' + location.host + location.pathname + '#patient';
            },

            render: function(){
                console.log('Patient form rendering');
                console.dir(this.options.model);
                console.dir(this.model);
                $(this.el).html(this.template(this.model.toJSON()));

                this.model.fetch({
                    error: function(model, error){
                        console.log(error);
                      alert('err');
                    },
                    success: function(){
                        //alert('success');
                        console.log('Fetched');
                        //console.log(this.model.toJSON());
                    }
                });
            },

            savePatient: function(){
                this.model.save({
                    firstName:$('#txtFirstName').val(),
                    lastName:$('#txtLastName').val()
                        //firstName:'abc',
                        //lastName:'xyz'
                }, {
                    success:function(model, response){
                        alert('success');
                    },
                    error:function(model, error){
                        alert(error);
                    }
                });
            }
        });

        return PatientFormView;
    });