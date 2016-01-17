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
      if (scope.setting === 'weightsOrBands') scope.settingDisplay = 'I have weights/resistance-bands';
      else if (scope.setting === 'pullupBar') scope.settingDisplay = 'I have a pullup bar available';
      scope.updateSettings = (setting, settingValue) => {
        User.updateOneUserSetting(setting, settingValue);
      };
    },
    templateUrl: 'directives/settings/settingslistItem/settingslistItem.template.html'
  };
}