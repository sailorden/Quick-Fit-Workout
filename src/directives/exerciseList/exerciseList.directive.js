'use strict';

angular.module('quickfit')

.directive('qfExerciseList', qfExerciseList);

function qfExerciseList() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {},
    controller: ExerciseListCtrl,
    controllerAs: 'vmExerciseList',
    templateUrl: 'directives/exerciseList/exerciseList.template.html'
  };
}

ExerciseListCtrl.$inject = [];
function ExerciseListCtrl() {
  let vmExerciseList = this;

  vmExerciseList.list = [
    'Pushups',
    'Crunches',
    'Pull Ups',
    'Lunges',
    'Jumping Jacks',
    'Bicep Curls',
    'Arms Raises',
    'Military Press',
    'Burpees',
    'Leg Lifts'
  ];
}