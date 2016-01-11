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

ExerciseListCtrl.$inject = ['Workouts'];
function ExerciseListCtrl(Workouts) {
  let vmExerciseList = this;

  vmExerciseList.list = Workouts.getExercises();
}