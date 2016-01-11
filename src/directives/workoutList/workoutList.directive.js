'use strict';

angular.module('quickfit')

.directive('qfWorkoutList', qfWorkoutList);

qfWorkoutList.$inject = ['Workouts'];
function qfWorkoutList(Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => scope.list = Workouts.getWorkouts(),
    templateUrl: 'directives/workoutList/workoutList.template.html'
  };
}