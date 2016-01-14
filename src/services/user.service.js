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
        //exercises: [
        //  {
        //    exercise: '',   // one object per day for each exercise
        //    sets: ''        // comma-delimited string of rep values
        //  }
        //],  // alt exercise: [date:'', exercises:{ exerciseName: 'set1,set2,etc'}]
        workouts: [
          {
            workout: '',      // one object per day for each workout
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
    getTodaysLog,
    updateTodaysLog
  };
  return service;


  function getUserSettings() { return user.settings; }
  function updateOneUserSetting(settingKey, settingValue) { user.settings[settingKey] = settingValue; }

  // gets the latest user max number of reps
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

  function getTodaysLog() {
    let todaysIndex = user.log.findIndex((entry) => {
      return entry.date === moment().format('MM/DD/YYYY');
    });
    return (todaysIndex === -1) ? false : user.log[todaysIndex];
  }

  // updateObj takes the form { exercise: 'exerciseName', rep: repValueNum }
  // for workout --> { }??
  function updateTodaysLog(updateObj) {
    let todaysIndex = user.log.findIndex((entry) => {
      return entry.date === moment().format('MM/DD/YYYY');
    });
    // if today doesn't exist in log, create it
    if (todaysIndex === -1) {
      user.log.push({date: moment().format('MM/DD/YYYY'), exercises: {}, workouts: []});
      todaysIndex = user.log.length-1;
    }
    if (updateObj.hasOwnProperty('exercise')) {
      // if todays log doesn't have that exercise yet, add it.
      if (!user.log[todaysIndex].exercises.hasOwnProperty(updateObj.exercise))
        user.log[todaysIndex].exercises[updateObj.exercise] = '';
      user.log[todaysIndex].exercises[updateObj.exercise] += `${updateObj.rep} `;
    } else if (updateObj.hasOwnProperty('workout')) {
      ;
    }
    console.log('user object', user);
  }


}