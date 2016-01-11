'use strict';

angular.module('quickfit')

.directive('qfWorkoutlistItem', qfWorkoutlistItem);

function qfWorkoutlistItem() {
  return {
    restrict: 'E',
    scope: {
      workouts: '=list'
    },
    link: link,
    templateUrl: 'directives/workoutlistItem/workoutlistItem.template.html'
  };
}

function link(scope, elem, attrs) {
}