'use strict';

angular.module('quickfit')

.directive('qfExerciseDifficulty', qfExerciseDifficulty);

function qfExerciseDifficulty() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/exerciseDifficulty/exerciseDifficulty.template.html'
  };
}