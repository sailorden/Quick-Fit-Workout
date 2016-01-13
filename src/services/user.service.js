'use strict';

angular.module('quickfit')

.factory('User', User);

User.$inject = [];
function User() {

// fake user data
  let user = {
    maxes: [
      {
        exercise: 'Pushups',
        max: [
          {
            max: 0,
            date: null
          }
        ]
      }
    ]
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
        exercises: [
          {
            exercise: '',
            sets: ''
          }
        ],
        workouts: [
          {
            workout: '',
            timesStarted: 0,
            timesCompleted: 0
          }
        ]
      }
    ]
  };*/

  const service = {
    getUserSettings,
    updateUserSettings,
    getMax,
    updateMax
  };
  return service;


  function getUserSettings() { return user.settings; }
  function updateUserSettings(settings) { user.settings = settings; }

  // gets the latest user max number of reps
  function getMax(exercise) {
    return user.maxes.find((el) => el.exercise === exercise).max.slice(-1)[0].max;
  }

  // maxObj argument should be of the form {max=number, date='MM/DD/YYYY'}
  function updateMax(exercise, maxObj) {
    user.maxes[user.maxes.findIndex((el) =>
      el.exercise === exercise)].max.push(maxObj);
  }


}