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
      goColor: '='
    },
    link: (scope, elem, attrs) => {
      $ionicModal.fromTemplateUrl('directives/exerciselistItem/exerciseDescriptionModal.html', {
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
    templateUrl: 'directives/exerciselistItem/exerciselistItem.template.html'
  };
}