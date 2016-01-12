'use strict';

angular.module('quickfit')

.directive('qfWorkoutStart', qfWorkoutStart);

qfWorkoutStart.$inject = ['$stateParams', 'Workouts'];
function qfWorkoutStart($stateParams, Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: () => Workouts.generateWorkout($stateParams.workout),
    templateUrl: 'directives/workoutStart/workoutStart.template.html'
  };
}