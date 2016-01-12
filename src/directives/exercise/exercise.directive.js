'use strict';

angular.module('quickfit')

.directive('qfExercise', qfExercise);

qfExercise.$inject = ['$stateParams', '$state'];
function qfExercise($stateParams, $state) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.exercise = $stateParams.exercise;
      scope.$on('$ionicView.enter', (e) =>
        scope.back = $state.current.name === 'exercise.difficulty');
    },
    templateUrl: 'directives/exercise/exercise.template.html'
  };
}