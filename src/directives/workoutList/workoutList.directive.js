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

WorkoutListCtrl.$inject = ['Workouts'];
function WorkoutListCtrl(Workouts) {
  let vmWorkoutList = this;

  vmWorkoutList.list = Workouts.getWorkouts();
}