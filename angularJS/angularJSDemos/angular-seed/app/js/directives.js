'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('myDirective', function () {
        console.log('creating');
        return {
            restrict: 'EACM', //element, attribute, class, comments

            replace: true,

            transclude: false,

            scope:'isolate',
            //scope:{ title: '@myTitle' },

            template:'<div class="directive">' +
                '<input ng-model="title"/>{{title}}' +
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
