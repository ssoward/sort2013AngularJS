'use strict';

/* Directives */

angular.module('myApp.directives', []).
 directive('myDirective', function () {
     console.log('creating');
     return {
         //Attribues:
         restrict: 'EACM', //element, attribute, class, comments

         replace: true, //true: the template will replace the current element.
         //false: the template will replace the contents of the current element

         transclude: false, // taking a portion of a html and embedding it inside a directive

         //WHICH SCOPE TO USE
         //scope:false,                   // DEFAULT: does not inherit prototypically
         //scope:true,                    // inherits prototypically
         //scope:'isolate',               // inherits prototypically
         //scope:{ title: '=myTitle' },   // set up two-way binding (using '=')

         //update index with {{title}}
         //scope:{ title: '@myTitle' }, // one-way binding (using '@')
         //scope:{ title: '&myTitle' },   // execute an expression in the context of the parent scope

         template:'<div class="directive">' +
                 '<input ng-model="title"/><span>{{title}}</span>' +
                 '</div>',

         // the linking function adds behavior to the template
         link:function (scope, element, attrs) {
             console.log('hello world in directive: ' + attrs);

             // back button
             //var back = angular.element(element.children()[0]);
             //back.bind('click', function() {
             //    window.back();
             //});
         }
     }
 });
