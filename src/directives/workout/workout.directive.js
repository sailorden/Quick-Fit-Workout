'use strict';

angular.module('quickfit')

.directive('qfWorkout', qfWorkout);

qfWorkout.$inject = ['$stateParams'];
function qfWorkout($stateParams) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.workout = $stateParams.workout;
    },
    templateUrl: 'directives/workout/workout.template.html'
  };
}