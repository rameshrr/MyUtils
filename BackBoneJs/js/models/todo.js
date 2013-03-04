/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 12:32 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone'], function(Backbone){
    var TodoModel = Backbone.Model.extend({
       defaults:{
           content: 'Empty todo'
       },

        initialize: function(){
            console.log('Todo Model initialized');
        }
    });

    return TodoModel;
})