'use strict';

angular.module('quickfit')

.directive('qfExerciseList', qfExerciseList);

qfExerciseList.$inject = ['Workouts', 'Util'];
function qfExerciseList(Workouts, Util) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.exercises = Workouts.getExercises();
      scope.harderOptions = Workouts.getHarderExerciseOptions();
      scope.headerColor = 'rgb(62,62,255)';
      scope.exerciseColors = Util.convertColors('blue', scope.headerColor, scope.exercises.length);
      scope.goColors = Util.convertColors("green", "rgb(255,165,0)", scope.exercises.length);
    },
    templateUrl: 'directives/exerciseList/exerciseList.template.html'
  };
}