'use strict';

angular.module('quickfit')

.directive('qfWorkoutlistItem', qfWorkoutlistItem);

qfWorkoutlistItem.$inject = ['Util'];
function qfWorkoutlistItem(Util) {
  return {
    restrict: 'E',
    scope: {
      workout: '=',
      workoutColor: '=',
      goColor: '='
    },
    templateUrl: 'directives/workouts/workoutlistItem/workoutlistItem.template.html'
  };
}