/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 2:16 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'underscore', 'backbone', 'text!templates/todo.html'],
    function($, _, Backbone, TodoTemplate){
    var TodoView = Backbone.View.extend({

        template:_.template(TodoTemplate),
        initialize: function(){
            console.log('Todo View initialized');
            this.render();
        },
        render: function(){
            console.log('Todo View rendering');
            console.dir(this.options);

            //$(this.el).html(this.options.model.get('content'));
            $(this.el).html(this.template({model: this.options.model}));
        }
    });

    return TodoView;
});