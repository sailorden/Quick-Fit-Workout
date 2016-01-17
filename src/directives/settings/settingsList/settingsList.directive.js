'use strict';

angular.module('quickfit')

.directive('qfSettingsList', qfSettingsList);

function qfSettingsList() {
  return {
    restrict: 'E',
    scope: {
      settings: '=list'
    },
    templateUrl: 'directives/settings/settingsList/settingsList.template.html'
  };
}