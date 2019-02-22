/**
 * @directive for flatpickr
 *  https: //flatpickr.js.org/
 * @author Lar May See
 * https: //github.com/LarMaySee/ng-flatpicker
 * version 1.0.0
 */

(function (root, factory) {
  'use strict';
  root['ng-flatpicker'] = factory(root.angular, root.flatpicker);
}(this, function (angular, flatpicker) {

  'use strict';
  var ngFlatpicker = angular.module('ng-flatpicker', []);
  ngFlatpicker.directive('ngFlatpicker', [function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        options: '&'
      },
      link: function (scope, element, attrs, ngModel) {
        var fpInstance = flatpicker ? flatpicker : FlatpickrInstance;

        if (!fpInstance) {
          console.warn('Unable to find any flatpicker installation');
          return;
        }

        if (scope.options) {
          flatpickr(element[0], scope.options());
        }
      }
    };
  }]);

  return ngFlatpicker;
}));
