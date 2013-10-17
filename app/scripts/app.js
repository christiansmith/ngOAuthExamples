'use strict';

angular.module('ngExamplesApp', ['gapi'])

  .value('GoogleApp', {
    apiKey: 'AIzaSyCCDMOrj_WURNcInIneJuy0oTI_pqtoNhE',
    clientId: '541781515171.apps.googleusercontent.com',
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/youtube',
      'https://www.googleapis.com/auth/userinfo.profile'
    ]  
  })

  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix = '!';
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: function(){}
      })
      .when('/youtube', {
        templateUrl: 'views/youtube.html',
        controller: 'YoutubeCtrl'
      })
      .when('/drive', {
        templateUrl: 'views/drive.html',
        controller: 'DriveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  // http://stackoverflow.com/questions/13320015/how-to-write-a-debounce-service-in-angularjs
  // http://plnkr.co/edit/fJwRER?p=preview
  .factory('debounce', function($timeout, $q) {
    return function(func, wait, immediate) {
      var timeout;
      var deferred = $q.defer();
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if(!immediate) {
            deferred.resolve(func.apply(context, args));
            deferred = $q.defer();
          }
        };
        var callNow = immediate && !timeout;
        if ( timeout ) {
          $timeout.cancel(timeout);
        }
        timeout = $timeout(later, wait);
        if (callNow) {
          deferred.resolve(func.apply(context,args));
          deferred = $q.defer();
        }
        return deferred.promise;
      };
    };
  })
