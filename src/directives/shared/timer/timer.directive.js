'use strict';

angular.module('quickfit')

.directive('qfTimer', qfTimer);

qfTimer.$inject = ['$interval', '$timeout'];
function qfTimer($interval, $timeout) {
  return {
    restrict: 'E',
    scope: true,
    link: (scope, elem, attrs) => {
      scope.tick = scope.workout.time;
      let intervalTimer;
      const startSound = 5;
      let beep = new Audio('../../../audio/beep.wav');
      beep.loop = false;
      let endBeep = new Audio('../../../audio/timesUp.wav');
      endBeep.loop = false;
      let soundSecond = startSound;
      startCountdown();

      function startCountdown() {
        let start = new Date().getTime();
        let elapsedSecs = 0, elapsedMillis = 0;
        intervalTimer = $interval(() => {
          if (scope.tick <= startSound && scope.tick !== 0 && soundSecond === scope.tick) {
            beep.play();
            soundSecond--;
          } else if(scope.tick === 0 && soundSecond === scope.tick) {
            endBeep.play();
            soundSecond--;
          }
          if (scope.tick === 0) timeUp();
          else {
            elapsedMillis = new Date().getTime() - start;
            elapsedSecs = Math.floor(elapsedMillis/1000);
            scope.tick = scope.workout.time - elapsedSecs;
          }
        });
      }

      function timeUp() {
        $interval.cancel(intervalTimer);
        $timeout(() => scope.getNext(), 1000);
      }
    },
    templateUrl: 'directives/shared/timer/timer.template.html'
  };
}

