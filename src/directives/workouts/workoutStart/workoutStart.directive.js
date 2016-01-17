'use strict';

angular.module('quickfit')

.directive('qfWorkoutStart', qfWorkoutStart);

qfWorkoutStart.$inject = ['$stateParams', '$state', 'Workouts', 'User'];
function qfWorkoutStart($stateParams, $state, Workouts, User) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      Workouts.generateWorkout($stateParams.workout);
      scope.startWorkout = () => {
        User.recordWorkoutStarted($stateParams.workout);
        $state.go('workout.exercising');
      }
    },
    templateUrl: 'directives/workouts/workoutStart/workoutStart.template.html'
  };
}