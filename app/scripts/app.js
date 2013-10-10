'use strict';

angular.module('ngExamplesApp', ['gapi'])

  .value('GoogleApp', {
    apiKey: 'AIzaSyCCDMOrj_WURNcInIneJuy0oTI_pqtoNhE',
    clientId: '541781515171.apps.googleusercontent.com',
    scopes: [
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
        controller: 'MainCtrl'
      })
      .when('/youtube', {
        templateUrl: 'views/youtube.html',
        controller: 'YoutubeCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
