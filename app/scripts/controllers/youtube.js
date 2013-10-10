'use strict';

angular.module('ngExamplesApp')


  .controller('YoutubeCtrl', function ($scope, Youtube) {


    Youtube.listChannels({ 
      part: 'contentDetails', 
      mine: true 
    }).then(function (channels) {
      $scope.playlists = channels.items[0].contentDetails.relatedPlaylists;
      $scope.playlist = $scope.playlists.uploads;        
    });    


    $scope.$watch('playlist', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.videos = Youtube.listPlaylistItems({ 
          part: 'snippet',
          maxResults: 50,
          playlistId: newVal
        });
      }
    });


    $scope.$watch('query', function (newVal, oldVal) {
      if (newVal !== oldVal) {
        $scope.videos = Youtube.search($scope.query); 
      }
    });

    

  });
