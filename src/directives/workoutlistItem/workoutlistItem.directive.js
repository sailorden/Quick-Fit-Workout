'use strict';

angular.module('quickfit')

.directive('qfWorkoutlistItem', qfWorkoutlistItem);

function qfWorkoutlistItem() {
  return {
    restrict: 'E',
    scope: {
      workouts: '=list',
      color: '=',
      colorString: '@'
    },
    link: (scope, elem, attrs) => {
      scope.convertColors = convertColors;
      scope.colors = convertColors(scope.colorString, scope.color, scope.workouts.length);
    },
    templateUrl: 'directives/workoutlistItem/workoutlistItem.template.html'
  };
}

function convertColors(colorString, baseColor, length) {
  let rgbIndex, baseColorArr, rgbArr, newColor, colorsArr = [];
  if (colorString === 'green') rgbIndex = 1;
  else if (colorString === 'blue') rgbIndex = 2;
  for (let i=0; i<length; i++) {
    baseColorArr = baseColor.split(/[()]/);
    console.log(baseColorArr);
    rgbArr = baseColorArr[1].split(',');
    rgbArr[rgbIndex] -= 15 * (i+1);
    colorsArr.push(`rgb(${rgbArr.join(',')})`);
  }
  return colorsArr;
}