/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/6/13
 * Time: 2:21 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'models/patient'], function(Backbone, PatientModel){
    var PatientList = Backbone.Collection.extend({

        model: PatientModel,

        url:'/patients',

        initialize: function(){
            console.log('Patient Collection initialized');
        },

        parse: function(data){
            console.dir(data);
            return data.patients;
        }
    });

    return PatientList;
});