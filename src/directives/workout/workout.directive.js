'use strict';

angular.module('quickfit')

.directive('qfWorkout', qfWorkout);

function qfWorkout() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/workout/workout.template.html'
  };
}