'use strict';

angular.module('quickfit')

.directive('qfExerciselistItem', qfExerciselistItem);

qfExerciselistItem.$inject = ['$ionicModal'];
function qfExerciselistItem($ionicModal) {
  return {
    restrict: 'E',
    scope: {
      exercise: '=',
      exerciseColor: '=',
      goColor: '=',
      harderOptions: '='
    },
    link: (scope, elem, attrs) => {
      if (scope.harderOptions.hasOwnProperty(scope.exercise))
        scope.hardVersion = scope.harderOptions[scope.exercise];

      $ionicModal.fromTemplateUrl('directives/exercises/exerciselistItem/exerciseDescriptionModal.html', {
        scope,
        animation: 'slide-in-up'
      }).then((modal) => {
        scope.imagePath = `img/exercises/${scope.exercise}.png`;
        scope.modal = modal;
      });
      scope.openModal = () => scope.modal.show();
      scope.closeModal = () => scope.modal.hide();
      scope.$on('$destroy', () => scope.modal.remove());
    },
    templateUrl: 'directives/exercises/exerciselistItem/exerciselistItem.template.html'
  };
}