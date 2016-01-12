'use strict';

angular.module('quickfit')

.directive('qfExerciselistItem', qfExerciselistItem);

qfExerciselistItem.$inject = ['Util'];
function qfExerciselistItem(Util) {
  return {
    restrict: 'E',
    scope: {
      exercises: '=list',
      color: '=',
      colorString: '@'
    },
    link: (scope, elem, attrs) => {
      scope.convertColors = Util.convertColors;
      scope.colors = Util.convertColors(scope.colorString, scope.color, scope.exercises.length);
    },
    templateUrl: 'directives/exerciselistItem/exerciselistItem.template.html'
  };
}