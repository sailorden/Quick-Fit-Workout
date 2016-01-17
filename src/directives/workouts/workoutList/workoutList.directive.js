'use strict';

angular.module('quickfit')

.directive('qfWorkoutList', qfWorkoutList);

qfWorkoutList.$inject = ['Workouts', 'Util'];
function qfWorkoutList(Workouts, Util) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.workouts = Object.keys(Workouts.getWorkouts());
      scope.headerColor = 'rgb(38,202,38)';
      scope.workoutColors = Util.convertColors('green', scope.headerColor, scope.workouts.length);
      scope.goColors = Util.convertColors('green', 'rgb(255,165,0)', scope.workouts.length);
    },
    templateUrl: 'directives/workouts/workoutList/workoutList.template.html'
  };
}