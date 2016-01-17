'use strict';

angular.module('quickfit')

.directive('qfBackButton', qfBackButton);

qfBackButton.$inject = ['$ionicHistory'];
function qfBackButton($ionicHistory) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      elem.bind('click', () => $ionicHistory.goBack());
    },
    templateUrl: 'directives/shared/backButton/backButton.template.html'
  };
}