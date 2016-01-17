'use strict';

angular.module('quickfit')

.factory('_', Lodash);

Lodash.$inject = ['$window'];
function Lodash($window) {

  const _ = $window._;
  delete($window._);

  return _;
}