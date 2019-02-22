<!-- Headings-->

# ng-flatpicker

Angularjs directive for [flatpickr](https://flatpickr.js.org/).Pleas do the following to use `ng-flatpicker`.

- just add `ng-flatpicker` to your input.Default dateformat is `Y-m-d`.
- You can specify alot of options. To do that just add `options` attribute object in your element.

## Prerequires

Before installation you must to include [flatpickr](https://flatpickr.js.org/) to your project.

## Installation

**Install with npm**

```bash
  npm i ng-flatpicker
```

After run the above command

- Include `ng-flatpicker.min.js` to your project.
- And then add `ng-flatpicker` modules to your angularjs application.

Example

```javascript
var myapp = angular.module("myapp", ["ng-flatpicker"]);
```

## Usage

To use `ng-flatpicker` you just need add `ng-flatpicker` attribute and `options` to your element.

```html
<input
  type="text"
  ng-flatpicker
  options="{dateFormat:'Y-m-d'}"
  placeholder="Select a date"
  ng-model="demoDate"
/>
```

#### Example with angularjs

Define options to your controller.

```javascript
var myapp = angular.module("myapp", ["ng-flatpicker"]);

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
  ng-flatpicker
  options="options"
  placeholder="Select a date"
  ng-model="demoDate"
/>
```

_Note: Need to deine `ng-model` in your element._

## License

`ng-flatpicker` module is under MIT license see project root
