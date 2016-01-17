'use strict';

angular.module('quickfit')

.directive('qfSettingslistItem', qfSettingslistItem);

qfSettingslistItem.$inject = ['User'];
function qfSettingslistItem(User) {
  return {
    restrict: 'E',
    scope: {
      setting: '=',
      settingValue: '='
    },
    link: (scope, elem, attrs) => {
      scope.updateSettings = (setting, settingValue) => {
        User.updateOneUserSetting(setting, settingValue);
      };
    },
    templateUrl: 'directives/settings/settingslistItem/settingslistItem.template.html'
  };
}