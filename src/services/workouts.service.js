'use strict';

angular.module('quickfit')

.factory('Workouts', Workouts);

Workouts.$inject = ['User'];
function Workouts(User) {

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
    'armRaises',
    'tricepExtension',
    'militaryPress'
  ];
  const pullupBarExercises = ['pullUps'];
  const harderExerciseOptions = {
    pushups: 'Put your feet up on a chair<br>Slow them down',
    lunges: 'Do jumping lunges',
    burpees: 'Do a jump when coming back up<br>Do a pushup when going down',
    squats: 'Do jumping squats',
    pullUps: 'Spread your hands to a wide grip'
  };

  let workout = [];
  let exerciseCounter = 0;
  let reps = null;



  const service = {
    getReps,
    setReps,
    getWorkouts,
    getExercises,
    generateWorkout,
    getWorkout,
    getNextInWorkout,
    isWorkoutOver,
    resetCounter,
    getHarderExerciseOptions
  };
  return service;


  // returns last assigned number of reps
  function getReps() { return reps; }

  // assigns new number of reps for medium and hard difficulties, returns it
  function setReps(exercise, difficulty) {
    let low, high;
    if (difficulty === 'medium') {
      low = 0.4;
      high = 0.65;
    } else if (difficulty === 'hard') {
      low = 0.7;
      high = 0.91;
    }
    let max = User.getMax(exercise);
    reps = Math.floor( (low*max) + (Math.random() * (high*max - low*max)) );
    return reps;
  }

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

  function getHarderExerciseOptions() { return harderExerciseOptions; }

}