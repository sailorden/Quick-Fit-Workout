'use strict';

angular.module('quickfit')

.factory('Util', Util);

Util.$inject = [];
function Util() {

  let reps = null;

  const service = {
    getReps,
    setReps,
    convertColors
  };
  return service;


  function getReps() {
    return reps;
  }

  function setReps(difficulty) {
    reps = 25;
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
}