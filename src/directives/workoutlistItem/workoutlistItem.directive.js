'use strict';

angular.module('quickfit')

.directive('qfWorkoutlistItem', qfWorkoutlistItem);

function qfWorkoutlistItem() {
  return {
    restrict: 'E',
    scope: {
      workouts: '=list'
    },
    templateUrl: 'directives/workoutlistItem/workoutlistItem.template.html'
  };
}