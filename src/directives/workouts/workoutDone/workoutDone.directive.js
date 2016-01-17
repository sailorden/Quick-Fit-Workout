'use strict';

angular.module('quickfit')

.directive('qfWorkoutDone', qfWorkoutDone);

qfWorkoutDone.$inject = ['$stateParams', '$state', 'User'];
function qfWorkoutDone($stateParams, $state, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope) => {
      scope.completed = () => {
        User.updateTodaysLog($stateParams.workout);
        $state.go('home');
      };
    },
    templateUrl: 'directives/workouts/workoutDone/workoutDone.template.html'
  };
}