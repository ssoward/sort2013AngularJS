'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('myDirective', function () {
        console.log('creating');
        return {
            restrict: 'EACM', //element, attribute, class, comments

            replace: false, //true: the template will replace the current element.
                           //false: the template will replace the contents of the current element

            transclude: false,


            //scope:false,                 // DEFAULT: does not inherit prototypically 
            //scope:true,                  // inherits prototypically 
            //scope:'isolate',             // does not inherit prototypically 
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
