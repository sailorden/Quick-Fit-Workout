'use strict';

angular.module('quickfit')

.directive('qfExerciseDisplay', qfExerciseDisplay);

qfExerciseDisplay.$inject = ['Workouts', '$stateParams', 'User'];
function qfExerciseDisplay(Workouts, $stateParams, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      console.log('in the display')
      scope.difficulty = $stateParams.difficulty;
      scope.currentMax = User.getMax($stateParams.exercise);
      scope.repGoal = Workouts.setReps();
    },
    templateUrl: 'directives/exerciseDisplay/exerciseDisplay.template.html'
  };
}