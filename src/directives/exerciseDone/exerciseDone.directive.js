'use strict';

angular.module('quickfit')

.directive('qfExerciseDone', qfExerciseDone);

qfExerciseDone.$inject = ['Util'];
function qfExerciseDone(Util) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.repGoal = Util.getReps();
      scope.printchanged = (num) => console.log(num);
    },
    templateUrl: 'directives/exerciseDone/exerciseDone.template.html'
  };
}