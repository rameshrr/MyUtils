/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */

define(['backbone', 'models/todo'], function(Backbone, TodoModel){
   var TodoCollection =  Backbone.Collection.extend({

       model: TodoModel,

       url: 'json/todos.js',

       parse: function(data){
           console.dir(data);
        return data.result;
       }
   });

    return TodoCollection;
});