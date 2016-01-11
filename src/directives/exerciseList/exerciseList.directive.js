'use strict';

angular.module('quickfit')

.directive('qfExerciseList', qfExerciseList);

qfExerciseList.$inject = ['Workouts'];
function qfExerciseList(Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => scope.list = Workouts.getExercises(),
    templateUrl: 'directives/exerciseList/exerciseList.template.html'
  };
}