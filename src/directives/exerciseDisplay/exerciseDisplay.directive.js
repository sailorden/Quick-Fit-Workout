'use strict';

angular.module('quickfit')

.directive('qfExerciseDisplay', qfExerciseDisplay);

qfExerciseDisplay.$inject = ['Workouts', '$stateParams', 'User'];
function qfExerciseDisplay(Workouts, $stateParams, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.difficulty = $stateParams.difficulty;
      scope.currentMax = User.getMax($stateParams.exercise);
      if (scope.difficulty !== 'max') scope.repGoal = Workouts.getReps();
    },
    templateUrl: 'directives/exerciseDisplay/exerciseDisplay.template.html'
  };
}