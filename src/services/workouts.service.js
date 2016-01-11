'use strict';

angular.module('quickfit')

.factory('Workouts', Workouts);

Workouts.$inject = [];
function Workouts() {

  let workouts = [
    'Cardio',
    'Full Body',
    'Lower Body',
    'Upper Body',
    'Get Exhausted'
  ];
  let exercises = [
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

  const service = {
    getWorkouts,
    getExercises
  };
  return service;



  function getWorkouts() {
    return workouts;
  }

  function getExercises() {
    return exercises;
  }
}