'use strict';

/**
 * @ngdoc function
 * @name frandzApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frandzApp
 */
angular.module('frandzApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
