'use strict';

angular.module('quickfit')

.directive('qfExerciseList', qfExerciseList);

qfExerciseList.$inject = ['Workouts'];
function qfExerciseList(Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.list = Workouts.getExercises();
      scope.headerColor = 'rgb(62,62,255)'
    },
    templateUrl: 'directives/exerciseList/exerciseList.template.html'
  };
}