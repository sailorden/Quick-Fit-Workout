'use strict';

angular.module('quickfit')

.directive('qfExerciseDisplay', qfExerciseDisplay);

qfExerciseDisplay.$inject = ['Util'];
function qfExerciseDisplay(Util) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.repGoal = Util.getReps();
    },
    templateUrl: 'directives/exerciseDisplay/exerciseDisplay.template.html'
  };
}