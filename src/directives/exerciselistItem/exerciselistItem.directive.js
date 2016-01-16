'use strict';

angular.module('quickfit')

.directive('qfExerciselistItem', qfExerciselistItem);

qfExerciselistItem.$inject = [];
function qfExerciselistItem() {
  return {
    restrict: 'E',
    scope: {
      exercise: '=',
      exerciseColor: '=',
      goColor: '='
    },
    link: (scope, elem, attrs) => {
      ;
    },
    templateUrl: 'directives/exerciselistItem/exerciselistItem.template.html'
  };
}