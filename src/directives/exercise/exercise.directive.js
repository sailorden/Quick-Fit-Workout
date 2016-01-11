'use strict';

angular.module('quickfit')

.directive('qfExercise', qfExercise);

qfExercise.$inject = ['$stateParams'];
function qfExercise($stateParams) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.exercise = $stateParams.exercise;
    },
    templateUrl: 'directives/exercise/exercise.template.html'
  };
}