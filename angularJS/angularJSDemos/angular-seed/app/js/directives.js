'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('myDirective', function () {
        console.log('creating');
        return {
            restrict: 'EACM', //element, attribute, class, comments

            replace: true,

            transclude: false,


            //scope:true,                  // inherits prototypically 
            //scope:false,                 // DEFAULT: does not inherit prototypically 
            //scope:'isolate',
            //scope:{ title: '=myTitle' }, // set up two-way binding (using '=') 
            //scope:{ title: '@myTitle' }, // one-way binding (using '@')  
            //skip: scope:{ title: '&myTitle' }, // bind to parent scope expressions
                                           
                                          

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
