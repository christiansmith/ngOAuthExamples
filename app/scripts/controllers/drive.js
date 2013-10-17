'use strict';

angular.module('ngExamplesApp').controller('DriveCtrl',
  function ($scope, Drive) {
    //Get Google Drive file list
    $scope.list = Drive.listFiles();
  }
);
