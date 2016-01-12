'use strict';

angular.module('quickfit')

.factory('Workouts', Workouts);

Workouts.$inject = [];
function Workouts() {

  let workouts = [
    '5 Minute Burn',
    'Cardio',
    'Full Body',
    'Lower Body',
    'Upper Body'
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
  let workout = [];
  let exerciseCounter = 0;

  const service = {
    getWorkouts,
    getExercises,
    generateWorkout,
    getWorkout,
    getNextInWorkout,
    resetCounter
  };
  return service;



  function getWorkouts() { return workouts; }

  function getExercises() { return exercises; }

  function generateWorkout() {
    workout = [
      { exercise: exercises[0], reps: 20, time: null },
      { exercise: exercises[1], reps: 30, time: null },
      { exercise: 'Rest', reps: null, time: 10 },
      { exercise: exercises[8], reps: 10, time: null },
      { exercise: exercises[4], reps: null, time: 10 },
      null
    ];
  }

  function getWorkout() { return workout; }

  function getNextInWorkout() {
    return workout[exerciseCounter++];
  }

  function resetCounter() { exerciseCounter = 0; }
}