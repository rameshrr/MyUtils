/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/5/13
 * Time: 7:52 AM
 * To change this template use File | Settings | File Templates.
 */

define(['jquery', 'underscore', 'backbone', 'text!templates/aboutus.html'],
    function($, _, Backbone, AboutusTemplate){

        var AboutUsView = Backbone.View.extend({
           template:_.template(AboutusTemplate),

            initialize: function(){
              console.log('About us initialized');
                this.render();
            },

            render: function(){
                console.log('About us rendering');
                $(this.el).html(this.template());
            }
        });

        return AboutUsView;
});