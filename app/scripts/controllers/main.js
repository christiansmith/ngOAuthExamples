'use strict';

angular.module('ngExamplesApp')


  .controller('MainCtrl', function ($scope, $http, GAPI, Youtube) {

    $scope.authorize = function () {
      GAPI.init(); 
    }

  });
