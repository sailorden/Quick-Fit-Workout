'use strict';

angular.module('quickfit')

.directive('qfHome', qfHome);

function qfHome(User) {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/home/home.template.html'
  };
}