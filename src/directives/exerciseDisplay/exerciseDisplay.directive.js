'use strict';

angular.module('quickfit')

.directive('qfExerciseDisplay', qfExerciseDisplay);

qfExerciseDisplay.$inject = ['Util', '$stateParams', 'User'];
function qfExerciseDisplay(Util, $stateParams, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.difficulty = $stateParams.difficulty;
      scope.currentMax = User.getMax($stateParams.exercise);
      scope.repGoal = Util.getReps();
    },
    templateUrl: 'directives/exerciseDisplay/exerciseDisplay.template.html'
  };
}