<!-- Headings-->

# ng-flatpickr

Angularjs directive for [flatpickr](https://flatpickr.js.org/).Pleas do the following to use ng-flatpickr.

- just add `ng-flatpickr` to your input.Default dateformat is `Y-m-d`.
- You can specify alot of options. To do that just add `options` attribute object in your element.

## Prerequires

Before installation you must to include [flatpickr](https://flatpickr.js.org/) to your project.

## Installation

**Install with npm**

```bash
  npm i ng-flatpickr
```

After run the above command

- Include `ng-flatpickr.min.js` to your project.
- And then add `ng-flatpickr` modules to your angularjs application.

Example

```javascript
var myapp = angular.module("myapp", ["ng-flatpickr"]);
```

## Usage

To use `ng-flatpickr` you just need add `ng-flatpickr` attribute and `options` to your element.

```html
<input
  type="text"
  ng-flatpickr
  options="{dateFormat:'Y-m-d'}"
  placeholder="Select a date"
  ng-model="demoDate"
/>
```

#### Example with angularjs

Define options to your controller.

```javascript
var myapp = angular.module("myapp", ["ng-flatpickr"]);

angular.module("myapp").controller("demoCtrl", function($scope) {
  $scope.options = {
    dateFormat: "Y-m-d",
    enabledTime: true
  };
});
```

and then to your view file

```html
<input
  type="text"
  ng-flatpickr
  options="options"
  placeholder="Select a date"
  ng-model="demoDate"
/>
```

_Note: Need to deine `ng-model` in your element._

## License

ng-flatpickr module is under MIT license see project root
