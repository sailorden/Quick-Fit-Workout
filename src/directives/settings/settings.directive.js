'use strict';

angular.module('quickfit')

.directive('qfSettings', qfSettings);

qfSettings.$inject = ['User'];
function qfSettings(User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope) => scope.settings = User.getUserSettings(),
    templateUrl: 'directives/settings/settings.template.html'
  };
}