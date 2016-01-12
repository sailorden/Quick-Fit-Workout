'use strict';

angular.module('quickfit')

.directive('qfWorkoutExercising', qfWorkoutExercising);

function qfWorkoutExercising() {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.exercise = 'Pushups';
      scope.rep = 20;
      scope.time = null;
    },
    templateUrl: 'directives/workoutExercising/workoutExercising.template.html'
  };
}