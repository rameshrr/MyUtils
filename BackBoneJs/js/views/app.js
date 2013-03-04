/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 2:04 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'backbone', 'views/todo', 'models/todo', 'collections/todo'],
    function($, Backbone, TodoView, TodoModel, TodoCollection){
    var App = Backbone.View.extend({
        el:$('#placeholder'),

        initialize: function(){
            console.log('App view initializing');
//            this.render();
            this.todos = new TodoCollection();
            this.todos.bind('all', this.render, this);
            this.todos.fetch();
        },

        render: function(){
            console.log('App view is rendering');
//
//            var todoModel = new TodoModel();
//            var todoView = new TodoView({model: todoModel});
//
//            $(this.el).html(todoView.el);

            container = $(this.el);
            this.todos.each(function(model){
                console.log('Data from Collection: ' + model.get('content'));

                var todoView = new TodoView({model:model});
                container.append(todoView.el);
            })
        }
    });

    return App;
});