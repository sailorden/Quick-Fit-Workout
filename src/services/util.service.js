'use strict';

angular.module('quickfit')

.factory('Util', Util);

Util.$inject = [];
function Util() {

  let reps = null;

  const service = {
    getReps,
    setReps
  };
  return service;


  function getReps() {
    return reps;
  }

  function setReps(difficulty) {
    reps = 25;
  }
}