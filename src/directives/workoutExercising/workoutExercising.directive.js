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
      scope.getNext = () => scope.workout = Workouts.getNextInWorkout() || (Workouts.resetCounter(), $state.go('home'));
    },
    templateUrl: 'directives/workoutExercising/workoutExercising.template.html'
  };
}