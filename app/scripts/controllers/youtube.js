'use strict';

angular.module('ngExamplesApp')


  .controller('YoutubeCtrl', function ($scope, Youtube, debounce) {

    Youtube.search = debounce(Youtube.search, 500, false);

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

    // API EXAMPLES
    Youtube.listActivities({ part:'snippet', home:true });
    Youtube.listChannels({ part:'contentDetails', mine:true });
    Youtube.listPlaylistItems({ part: 'snippet', maxResults: 50, playlistId: 'UUNQExQP5xqivA2feAq97iHQ' });
    Youtube.listPlaylists({ part:'snippet', mine:true });
    Youtube.listSubscriptions({part:'contentDetails', mine:true});


  });
