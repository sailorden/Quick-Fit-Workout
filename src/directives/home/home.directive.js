'use strict';

angular.module('quickfit')

.directive('qfHome', qfHome);

function qfHome(User) {
  return {
    restrict: 'E',
    scope: {},
    link: () => console.log(User.getTodaysLog()),
    templateUrl: 'directives/home/home.template.html'
  };
}