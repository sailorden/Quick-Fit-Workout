'use strict';

angular.module('quickfit')

.directive('qfExerciseDone', qfExerciseDone);

qfExerciseDone.$inject = ['$state', '$stateParams', 'User', 'Workouts'];
function qfExerciseDone($state, $stateParams, User, Workouts) {
  return {
    restrict: 'E',
    scope: {},
    link: (scope, elem, attrs) => {
      scope.repGoal = Workouts.getReps();
      scope.difficulty = $stateParams.difficulty;
      scope.printchanged = (num) => console.log(num);
      scope.recordReps = function(repsDone) {
        // still need to save reps to log
        User.updateTodaysLog({exercise: $stateParams.exercise, rep: repsDone});
        let currentMax = User.getMax($stateParams.exercise);
        // console.log('currentMax', currentMax);
        // console.log('reps done', repsDone);
        if (currentMax < repsDone) {
          // console.log(`You beat your max!! ${currentMax} --> ${repsDone}`);
          User.updateMax($stateParams.exercise, {max: repsDone, date: moment().format('MM/DD/YYYY')});
        } else if ($stateParams.difficulty === 'max') {
          // console.log('You did not beat your max :(, better luck next time');
        }
        $state.go('home');
      };
    },
    templateUrl: 'directives/exerciseDone/exerciseDone.template.html'
  };
}