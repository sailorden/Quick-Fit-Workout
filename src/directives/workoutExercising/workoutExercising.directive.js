'use strict';

angular.module('quickfit')

.directive('qfWorkoutExercising', qfWorkoutExercising);

qfWorkoutExercising.$inject =['$state', 'Workouts'];
function qfWorkoutExercising($state, Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.workout = Workouts.getNextInWorkout();
      scope.getNext = () => {
        if (Workouts.isWorkoutOver()) {
          Workouts.resetCounter();
          $state.go('workout.done');
        } else scope.workout = Workouts.getNextInWorkout();
      };
    },
    templateUrl: 'directives/workoutExercising/workoutExercising.template.html'
  };
}