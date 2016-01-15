'use strict';

angular.module('quickfit')

.factory('User', User);

User.$inject = [];
function User() {

// fake user data
  let user = {
    settings: {
      weightsOrBands: true,
      pullupBar: true
      // dailyNotificationTime: null
    },
    maxes: [
      // {
        // exercise: 'Pushups',
        // max: [
          // {
          //   max: 0,
          //   date: null
          // }
        // ]
      // }
    ],
    log: []
  };

  /*model of user object
  {
    payment: null,  // future: { data... }
    settings: {
      weightsOrBands: false,
      pullupBar: false,
      dailyNotificationTime: null,
    },
    maxes: [
      {
        exercise: '',
        max: [
          {
            max: null,
            date: null
          }
        ]
      }
    ],
    log: [
      {
        date: '',
        exercises: {
          exerciseName: '' // space-delimited string of rep values
        },
        workouts: [
          {
            workout: '',      // one object per day for each workout type
            timesStarted: 0,
            timesCompleted: 0
          }
        ]
      }
    ]
  };*/

  const service = {
    getUserSettings,
    updateOneUserSetting,
    getMax,
    updateMax,
    recordWorkoutStarted,
    getTodaysLog,
    updateTodaysLog
  };
  return service;


  function getUserSettings() { return user.settings; }
  function updateOneUserSetting(settingKey, settingValue) { user.settings[settingKey] = settingValue; }

  // gets the latest max number of reps for an exercise
  function getMax(exercise) {
    let maxIndex = user.maxes.findIndex((el) => el.exercise === exercise);
    if (maxIndex === -1) user.maxes.push({exercise: exercise, max: []});
    let maxArray = user.maxes.find((el) => el.exercise === exercise).max;
    return (maxArray[0]) ? maxArray.slice(-1)[0].max : 0;
  }

  // maxObj argument should be of the form {max=number, date='MM/DD/YYYY'}
  function updateMax(exercise, maxObj) {
    user.maxes[user.maxes.findIndex((el) =>
      el.exercise === exercise)].max.push(maxObj);
  }

  function recordWorkoutStarted(workoutName) {
    let todaysLog = findTodaysLog();
    let thisWorkoutsLogIndex = findThisWorkoutsLogIndex(todaysLog, workoutName);
    if (thisWorkoutsLogIndex === -1) {
      todaysLog.workouts.push({
        workout: workoutName,
        timesStarted: 1,
        timesCompleted: 0
      });
    } else todaysLog.workouts[thisWorkoutsLogIndex].timesStarted++;
  }

  function getTodaysLog() {
    let todaysIndex = findTodaysLogEntryIndex();
    return (todaysIndex === -1) ? false : user.log[todaysIndex];
  }

  // updateObj takes the form { exercise: 'exerciseName', rep: repValueNum }
  // for workout --> 'workoutName'
  function updateTodaysLog(updateData) {
    let todaysLog = findTodaysLog();
    // update exercise log
    if (typeof updateData !== 'string') {
      // if todays log doesn't have that exercise yet, add it.
      if (!todaysLog.exercises.hasOwnProperty(updateData.exercise))
        todaysLog.exercises[updateData.exercise] = '';
      todaysLog.exercises[updateData.exercise] += `${updateData.rep} `;
    } else {    // update workout log
      let workoutIndexForToday = findThisWorkoutsLogIndex(todaysLog, updateData);
      todaysLog.workouts[workoutIndexForToday].timesCompleted++;
    }
    console.log('user object', user);
  }


/* PRIVATE FACTORY METHODS */

  function createLogEntryForToday() {
    user.log.push({date: moment().format('MM/DD/YYYY'), exercises: {}, workouts: []});
  }

  function findTodaysLogEntryIndex() {
    return user.log.findIndex((entry) => entry.date === moment().format('MM/DD/YYYY'));
  }

  function findTodaysLog() {
    let todaysIndex = findTodaysLogEntryIndex();
    if (todaysIndex === -1) {
      createLogEntryForToday();
      todaysIndex = user.log.length - 1;
    }
    return user.log[todaysIndex];
  }

  function findThisWorkoutsLogIndex(todaysLog, workoutName) {
    return todaysLog.workouts.findIndex((entry) => entry.workout === workoutName);
  }

}