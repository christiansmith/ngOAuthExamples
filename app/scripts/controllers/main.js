'use strict';

angular.module('ngExamplesApp')


  .controller('MainCtrl', function ($scope, $http, GAPI, Youtube) {

    $scope.authorize = function () {
      GAPI.init(); 
    }

    $scope.disableHref = function($event){
      $event.preventDefault();
    }

  });
