/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 12:16 PM
 * To change this template use File | Settings | File Templates.
 */

//alert('Main loaded');

//require(['module1'], function(Module1){
//   console.log('Main.js loaded, Module1 name is ' + Module1.name);
//});

require.config({
   paths:{
       jquery:'libs/jquery/jquery-min',
       underscore:'libs/underscore/underscore-min',
       backbone:'libs/backbone/backbone-optamd3-min',
       text:'libs/require/text'
   }
});

//require(['models/todo'], function(TodoModel){
//    var todoModel = new TodoModel();
//    console.log('Model data(default) ' + todoModel.get('content'));
//
//    todoModel.set({content: 'New data'});
//    console.log('Model data(new) ' + todoModel.get('content'));
//});

require(['views/app'], function(AppView){
    var appView = new AppView();

    console.log('View loaded');
});