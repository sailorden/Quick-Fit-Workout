'use strict';

angular.module('quickfit')

.directive('qfWorkoutList', qfWorkoutList);

function qfWorkoutList() {
  return {
    restrict: 'E',
    scope: {},
    bindToController: {},
    controller: WorkoutListCtrl,
    controllerAs: 'vmWorkoutList',
    templateUrl: 'directives/workoutList/workoutList.template.html'
  };
}

WorkoutListCtrl.$inject = [];
function WorkoutListCtrl() {
  let vmWorkoutList = this;

  vmWorkoutList.list = [
    'Cardio',
    'Full Body',
    'Lower Body',
    'Upper Body',
    'Get Exhausted'
  ];
}