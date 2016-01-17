'use strict';

angular.module('quickfit')

.directive('qfExerciseDifficulty', qfExerciseDifficulty);

qfExerciseDifficulty.$inject = ['$stateParams', 'User'];
function qfExerciseDifficulty($stateParams, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.max = User.getMax($stateParams.exercise);
    },
    templateUrl: 'directives/exercises/exerciseDifficulty/exerciseDifficulty.template.html'
  };
}