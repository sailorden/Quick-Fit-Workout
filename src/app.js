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
    template: '<qf-home></qf-home>'
  })

  .state('exercise', {
    url: '/exercise/:exercise',
    abstract: true,
    template: '<qf-exercise></qf-exercise>'
  })

  .state('exercise.difficulty', {
    url: '/difficulty',
    views: {
      'exercise': {
        template: '<qf-exercise-difficulty></qf-exercise-difficulty>'
      }
    }
  })

  .state('workout', {
    url: '/workout/:workout',
    abstract: true,
    template: '<qf-workout></qf-workout>'
  })


  $urlRouterProvider.otherwise('/');
}