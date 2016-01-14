'use strict';

angular.module('quickfit')

.filter('workoutName', workoutName);

// format for workout and exercise names is camelcased and if they start
// with a number then a underscore precedes it.
// i.e. 'cardio', 'legLifts', '_5MinuteBurn'
// This filter would turn those examples into:
// 'Cardio', 'Leg Lifts', '5 Minute Burn'
function workoutName() {
  return (input) => input[0].replace(input[0], input[0].toUpperCase())
                            .concat(input.slice(1))
                            .split(/^_/)
                            .slice(-1)[0]
                            .match(/\d|^[a-z][a-z]+|[A-Z][a-z]+/g)
                            .join(' ');
}