/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/6/13
 * Time: 12:29 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone'], function(Backbone){
    var Patient = Backbone.Model.extend({

        defaults:{
            id:10,
            firstName:'damn',
            lastName:'',
            address1:'',
            address2:''
        },

        url:'/patient',

        initialize: function(){
            console.log('Patient model initialized');
        }
    });

    return Patient;
});