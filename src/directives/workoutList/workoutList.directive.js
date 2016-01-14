'use strict';

angular.module('quickfit')

.directive('qfWorkoutList', qfWorkoutList);

qfWorkoutList.$inject = ['Workouts'];
function qfWorkoutList(Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.list = Object.keys(Workouts.getWorkouts());
      scope.headerColor = 'rgb(38,202,38)';
    },
    templateUrl: 'directives/workoutList/workoutList.template.html'
  };
}