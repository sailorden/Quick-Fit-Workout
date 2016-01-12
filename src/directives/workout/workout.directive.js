'use strict';

angular.module('quickfit')

.directive('qfWorkout', qfWorkout);

qfWorkout.$inject = ['$stateParams', '$state'];
function qfWorkout($stateParams, $state) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.workout = $stateParams.workout;
      scope.$on('$ionicView.enter', (e) =>
        scope.back = $state.current.name === 'workout.start');
    },
    templateUrl: 'directives/workout/workout.template.html'
  };
}