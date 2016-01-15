'use strict';

angular.module('quickfit')

.factory('Workouts', Workouts);

Workouts.$inject = ['User'];
function Workouts(User) {

  // let workouts = [
  //   '5 Minute Burn',
  //   'Cardio',
  //   'Full Body',
  //   'Lower Body',
  //   'Upper Body'
  // ];
  // all exercises in the app:
  //   pushups, crunches, lunges, squats, burpees, legLifts, _6Inches,
  //   supermans, plank, jumpingJacks,
  //   pullUps, bicepCurls, militaryPress, tricepExtension, shoulerRaises
  const workouts = {
    '_5MinuteBurn': ['pushups', 'legLifts', 'lunges', 'squats', 'burpees'],
    'Cardio': ['jumpingJacks', 'lunges', 'burpees', 'crunches', 'pushups'],
    'fullBody': ['pushups', 'crunches', 'lunges', 'legLifts', '_6Inches', 'burpees'],
    'legs': ['lunges', 'legLifts', 'burpees', 'squats'],
    //'upperBody': ['pushups', ''],  - for resistance+pullbar only
    'core': ['crunches', 'burpees', 'legLifts', 'supermans', '_6Inches', 'plank']
  };
  const bodyWeightIndieExercises = [
    'pushups',
    'crunches',
    'lunges',
    'burpees',
    'legLifts',//??
    'squats'
  ];
  const resistanceIndieExercises = [
    'bicepCurls',
    'shoulderRaises',
    'tricepExtension',
    'militaryPress'
  ];
  const pullupBarExercises = ['pullUps'];
  // let exercises = [
  //   'Pushups',
  //   'Crunches',
  //   'Pull Ups',
  //   'Lunges',
  //   'Jumping Jacks',
  //   'Bicep Curls',
  //   'Arms Raises',
  //   'Military Press',
  //   'Burpees',
  //   'Leg Lifts'
  // ];
  let workout = [];
  let exerciseCounter = 0;



  const service = {
    getWorkouts,
    getExercises,
    generateWorkout,
    getWorkout,
    getNextInWorkout,
    isWorkoutOver,
    resetCounter
  };
  return service;



  function getWorkouts() { return workouts; }

  function getExercises() {
    let exercises = bodyWeightIndieExercises;
    if (User.getUserSettings().weightsOrBands) exercises = exercises.concat(resistanceIndieExercises);
    if (User.getUserSettings().pullupBar) exercises = exercises.concat(pullupBarExercises);
    return exercises;
  }

  function generateWorkout() {
    workout = [
      { exercise: bodyWeightIndieExercises[0], reps: 20, time: null },
      { exercise: bodyWeightIndieExercises[1], reps: 30, time: null },
      { exercise: 'Rest', reps: null, time: 10 },
      { exercise: bodyWeightIndieExercises[5], reps: 10, time: null },
      { exercise: bodyWeightIndieExercises[4], reps: null, time: 10 },
      null
    ];
  }

  function getWorkout() { return workout; }

  function getNextInWorkout() {
    return workout[exerciseCounter++];
  }

  function isWorkoutOver() {
    return exerciseCounter === workout.length - 1;
  }

  function resetCounter() { exerciseCounter = 0; }
}