angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // // Form data for the login modal
  // $scope.loginData = {};

  // // Create the login modal that we will use later
  // $ionicModal.fromTemplateUrl('templates/login.html', {
  //   scope: $scope
  // }).then(function(modal) {
  //   $scope.modal = modal;
  // });

  // // Triggered in the login modal to close it
  // $scope.closeLogin = function() {
  //   $scope.modal.hide();
  // };

  // // Open the login modal
  // $scope.login = function() {
  //   $scope.modal.show();
  // };

  // // Perform the login action when the user submits the login form
  // $scope.doLogin = function() {
  //   console.log('Doing login', $scope.loginData);

  //   // Simulate a login delay. Remove this and replace with your login
  //   // code if using a login system
  //   $timeout(function() {
  //     $scope.closeLogin();
  //   }, 1000);
  // };


})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 },
    { title: 'Rap', id: 7 },
    { title: 'Rap', id: 8 },
    { title: 'Rap', id: 9 },
    { title: 'Rap', id: 10 }
  ];
})

.controller('NewsCtrl', function($scope) {
  $scope.alert_flag = false;
  $scope.playlists = [
    { title: 'ESPN', id: 1 },
    { title: 'CBS Sports', id: 2 },
    { title: 'Yahoo Sports', id: 3 },
    { title: 'NBC Pro Football Talk', id: 4 },
    { title: 'Bleacher Report', id: 5 },
    { title: 'Sports Illustrated', id: 6 },
    { title: 'NFL', id: 7 },
    { title: 'NFL - Twitter', id: 8 },
    { title: 'Fox Sports', id: 9 },
    { title: 'Fox Sports NFL', id: 10 }
  ];

  $scope.moreOptions = function(){
    $scope.alert_flag = true;
  }

  $scope.cancelOptions = function(){
    $scope.alert_flag = false;
  }
})

.controller('NewsSourceCtrl', function($scope, $stateParams) {
  $scope.alert_flag = false;
  $scope.test_text = $stateParams.playlistId;
  //alert($stateParams.playlistId);

  $scope.moreOptions = function(){
    $scope.alert_flag = true;
  }

  $scope.cancelOptions = function(){
    $scope.alert_flag = false;
  }

  $scope.articles = [
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL' , id: 1, source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 2 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 3 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 4 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 5 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 6 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 7 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 8 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 9 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to start in NFL', id: 10 , source_id: 1}
  ];
});


















