/**
 * @directive for flatpickr
 *  https: //flatpickr.js.org/
 * @author Lar May See
 * https: //github.com/LarMaySee/ng-flatpickr
 * version 1.0.0
 */

(function (root, factory) {
  'use strict';
  root['ng-flatpickr'] = factory(root.angular, root.flatpickr);
}(this, function (angular, flatpickr) {

  'use strict';
  var ngFlatpickr = angular.module('ng-flatpickr', []);
  ngFlatpickr.directive('ngFlatpickr', [function () {
    return {
      require: 'ngModel',
      restrict: 'A',
      scope: {
        options: '&'
      },
      link: function (scope, element, attrs, ngModel) {
        var fpInstance = flatpickr ? flatpickr : FlatpickrInstance;

        if (!fpInstance) {
          console.warn('Unable to find any flatpickr installation');
          return;
        }

        if (scope.options) {
          flatpickr(element[0], scope.options());
        }
      }
    };
  }]);

  return ngFlatpickr;
}));
