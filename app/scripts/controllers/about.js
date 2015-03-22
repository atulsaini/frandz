'use strict';

/**
 * @ngdoc function
 * @name frandzApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frandzApp
 */
angular.module('frandzApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
