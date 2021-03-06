'use strict';

angular.module('quickfit', ['ionic'])

.run(run)
.config(config);

run.$inject = ['$ionicPlatform'];
function run($ionicPlatform) {
  $ionicPlatform.ready(() => {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {

  $stateProvider

  .state('home', {
    url: '/',
    template: '<qf-home></qf-home>',
    cache: false
  })

  .state('settings', {
    url: '/settings',
    template: '<qf-settings></qf-settings>'
  })

  .state('exercise', {
    url: '/exercise/:exercise',
    abstract: true,
    cache: false,
    template: '<qf-exercise></qf-exercise>'
  })

  .state('exercise.difficulty', {
    url: '/difficulty',
    views: {
      'exercise': {
        template: '<qf-exercise-difficulty></qf-exercise-difficulty>'
      }
    },
    cache: false,
  })

  .state('exercise.display', {
    url: '/display/:difficulty',
    views: {
      'exercise': {
        template: '<qf-exercise-display></qf-exercise-display>'
      }
    },
    resolve: {
      dummy: ($stateParams, Workouts) => {
        if ($stateParams.difficulty !== 'max')
          return Workouts.setReps($stateParams.exercise, $stateParams.difficulty);
      }
    },
    cache: false,
  })

  .state('exercise.done', {
    url: '/done/:difficulty',
    views: {
      'exercise': {
        template: '<qf-exercise-done></qf-exercise-done>'
      }
    }
  })

  .state('workout', {
    url: '/workout/:workout',
    abstract: true,
    cache: false,
    template: '<qf-workout></qf-workout>'
  })

  .state('workout.start', {
    url: '/start',
    views: {
      'workout': {
        template: '<qf-workout-start></qf-workout-start>'
      }
    }
  })

  .state('workout.exercising', {
    url: '/exercising',
    views: {
      'workout': {
        template: '<qf-workout-exercising></qf-workout-exercising>'
      }
    }
  })

  .state('workout.done', {
    url: '/done',
    views: {
      'workout': {
        template: '<qf-workout-done></qf-workout-done>'
      }
    }
  })


  $urlRouterProvider.otherwise('/');
}