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
      console.log(scope.max);
      scope.bob = () => console.log('click worked');
    },
    templateUrl: 'directives/exerciseDifficulty/exerciseDifficulty.template.html'
  };
}