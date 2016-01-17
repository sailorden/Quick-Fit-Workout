'use strict';

angular.module('quickfit')

.directive('qfWorkoutlistItem', qfWorkoutlistItem);

qfWorkoutlistItem.$inject = ['Util'];
function qfWorkoutlistItem(Util) {
  return {
    restrict: 'E',
    scope: {
      workouts: '=list',
      color: '=',
      colorString: '@',
    },
    link: (scope, elem, attrs) => {
      scope.convertColors = Util.convertColors;
      scope.colors = Util.convertColors(scope.colorString, scope.color, scope.workouts.length);
    },
    templateUrl: 'directives/workouts/workoutlistItem/workoutlistItem.template.html'
  };
}