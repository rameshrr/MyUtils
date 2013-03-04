/**
 * Created with JetBrains WebStorm.
 * User: Ramesh
 * Date: 3/4/13
 * Time: 12:22 PM
 * To change this template use File | Settings | File Templates.
 */

define(['module2'], function(Module2){

    console.log('Module 1 is initialized');
    console.log('Module 1 name is ' + Module2.name);

   var Module1 = {
     name: 'Module1'
   };

    return Module1;
});