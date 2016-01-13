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

  // model of user object
  // {
  //   payment: null,  // future: { data... }
  //   settings: {
  //     weightsOrBands: false,
  //     pullupBar: false,
  //     dailyNotificationTime: null,
  //   },
  //   maxes: [
  //     {
  //       exercise: '',
  //       max: [
  //         {
  //           max: null,
  //           date: null
  //         }
  //       ]
  //     }
  //   ],
  //   log: [
  //     {
  //       date: '',
  //       exercises: [
  //         {
  //           exercise: '',
  //           sets: ''
  //         }
  //       ],
  //       workouts: [
  //         {
  //           workout: '',
  //           timesStarted: 0,
  //           timesCompleted: 0
  //         }
  //       ]
  //     }
  //   ]
  // };

  const service = {
    getUserSettings,
    updateUserSettings,
    getMax,
    updateMax
  };
  return service;


  function getUserSettings() { return user.settings; }
  function updateUserSettings(settings) { user.settings = settings; }

  function getMax(exercise) {
    return user.maxes.find((el) => el.exercise === exercise).max.slice(-1).max;
  }

  function updateMax(maxObj) {
    user.maxes[user.maxes.findIndex((el) =>
      el.exercise === maxObj.exercise)].max = maxObj.max;
  }


}