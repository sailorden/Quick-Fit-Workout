'use strict';

angular.module('quickfit')

.directive('qfWorkoutStart', qfWorkoutStart);

function qfWorkoutStart() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/workoutStart/workoutStart.template.html'
  };
}