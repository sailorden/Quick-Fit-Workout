'use strict';

angular.module('quickfit')

.directive('qfExerciseDifficulty', qfExerciseDifficulty);

function qfExerciseDifficulty() {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.max = 25;
    },
    templateUrl: 'directives/exerciseDifficulty/exerciseDifficulty.template.html'
  };
}