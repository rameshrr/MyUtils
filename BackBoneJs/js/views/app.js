/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 2:04 PM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'underscore', 'backbone', 'views/todo', 'models/todo', 'collections/todo', 'views/aboutus', 'text!templates/app.html'],
    function($, _, Backbone, TodoView, TodoModel, TodoCollection, AboutusView, AppTemplate){
    var App = Backbone.View.extend({
        el:$('#placeholder'),
        template:_.template(AppTemplate),

        events:{
            "click .tab":"navigateTab"
        },

        initialize: function(){
            console.log('App view initializing');

            this.el.html(this.template());

            var AppRouter = Backbone.Router.extend({
                routes:{
                  "app-nav": "loadApp",
                    "aboutus-nav":"loadAboutUs"
                },

                loadApp: function(){
                    console.log('Loading App..');

                    $('#app').show();
                    $('#aboutus').hide();
                },

                loadAboutUs: function(){
                    console.log('Loading About us..');

                    $('#app').hide();
                    $('#aboutus').show();
                }
            });

            var router = new AppRouter();
            Backbone.history.start();

            $('#app').show();
            $('#aboutus').hide();

            var aboutUsView = new AboutusView();
            this.el.find('#aboutus').html(aboutUsView.el);


            this.todos = new TodoCollection();
            this.todos.bind('all', this.render, this);
            this.todos.fetch();
        },

        navigateTab: function(event){
            console.log('Tab Clicked ' + event.target.id);
            location.href = location.protocol + '//' + location.host + location.pathname + '#' + event.target.id;
        },

        render: function(){
            console.log('App view is rendering');
//
//            var todoModel = new TodoModel();
//            var todoView = new TodoView({model: todoModel});
//
//            $(this.el).html(todoView.el);

            container = $(this.el);
            var element = this.el.find('#app');
            element.html('');

            this.todos.each(function(model){
                console.log('Data from Collection: ' + model.get('content'));

                var todoView = new TodoView({model:model});
                element.append(todoView.el);
            })
        }
    });

    return App;
});