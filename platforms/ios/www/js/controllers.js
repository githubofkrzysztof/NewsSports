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
 
})

.controller('NewsCtrl', function($scope, $ionicActionSheet, $timeout, $rootScope) {
  $scope.alert_flag = false;
  $rootScope.playlists = [
    { title: 'ESPN', id: 1 },
    { title: 'CBS Sports', id: 2 },
    { title: 'Yahoo Sports', id: 3 },
    { title: 'NBC Pro Football Talk', id: 4 },
    { title: 'Bleacher Report', id: 5 },
    { title: 'Sports Illustrated', id: 6 },
    { title: 'NFL', id: 7 },
    { title: 'Fox Sports', id: 8 },
    { title: 'NBC Sports', id: 9 },
    { title: 'SBNation', id: 10 },
    { title: 'Arizona Cardinals', id: 11 },
    { title: 'Atlanta Falcons', id: 12 },
    { title: 'Baltimore Ravens', id: 13 },
    { title: 'Buffalo Bills', id: 14 },
    { title: 'Carolina Panthers', id: 15 },
    { title: 'Chicago Bears', id: 16 },
    { title: 'Cincinnati Bengals', id: 17 },
    { title: 'Cleveland Browns', id: 18 },
    { title: 'Dallas Cowboys', id: 19 },
    { title: 'Denver Broncos', id: 20 },
    { title: 'Detroit Lions', id: 21 },
    { title: 'Green Bay Packers', id: 22 },
    { title: 'Houston Texans', id: 23 },
    { title: 'Indianapolis Colts', id: 24 },
    { title: 'Jacksonville Jaguars', id: 25 },
    { title: 'Kansas City Chiefs', id: 26 },
    { title: 'Los Angeles Rams', id: 27 },
    { title: 'Miami Dolphins', id: 28 },
    { title: 'Minnesota Vikings', id: 29 },
    { title: 'New England Patriots', id: 30 },
    { title: 'New Orleans Saints', id: 31 },
    { title: 'New York Giants', id: 32 },
    { title: 'New York Jets', id: 33 },
    { title: 'Oakland Raiders', id: 34 },
    { title: 'Philadelphia Eagles', id: 35 },
    { title: 'Pittsburgh Streelers', id: 36 },
    { title: 'San Diego Chargers', id: 37 },
    { title: 'San Francisco 49ers', id: 38 },
    { title: 'Seattle Seahawks', id: 39 },
    { title: 'Tampa Bay Buccaneers', id: 40 },
    { title: 'Tennessee Titans', id: 41 },
    { title: 'Washington Redskins', id: 42 },
    { title: 'Twitter', id: 43}
    
  ];

  $scope.moreOptions = function(){
    $scope.alert_flag = true;

    var hideSheet=$ionicActionSheet.show({
      buttons: [
        {text: '<b>Manage Feeds</b>'}
      ],
      //destructiveText: 'Delete',
      titleText: 'More Options',
      cancelText: 'Cancel',
      cancel: function(){
        hideSheet();
      },

      buttonClicked:function(index){
        window.location.href="#/app/manage-feeds";
        return true;
      }
    });

    // $timeout(function(){
    //   hideSheet();
    // }, 1000);
  };

  // $scope.cancelOptions = function(){
  //   $scope.alert_flag = false;
  // }
})

.controller('NewsSourceCtrl', function($scope, $stateParams, $ionicActionSheet, 
                  $ionicScrollDelegate, $timeout, $rootScope, $http, $cordovaInAppBrowser) {
  $scope.alert_flag = false;
  $scope.title = $rootScope.playlists[$stateParams.playlistId].title;
  
  //alert($stateParams.playlistId);
  

  $scope.getRssFeed = function (url){
    $rootScope.posts=[];
    $scope.images=[];
    



     var google_converter="http://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=100&callback=JSON_CALLBACK&q=";
     var request = $http.jsonp(google_converter + encodeURIComponent(url));

    //var request = $http.get('https://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(url));
    request.success(function(res){
      console.log(res);
      var insteadposts = res.responseData.feed.entries;
      for(var ii=0; ii<insteadposts.length; ii++){
          if (insteadposts[ii].link.includes("nfl") || insteadposts[ii].link.includes("profootballtalk")){
              $rootScope.posts.push(insteadposts[ii]);
              if ($stateParams.playlistId == 0){
                  $scope.images.push("img/sources/1.png");
              }
              else if ($stateParams.playlistId == 1){
                  $scope.images.push("img/sources/2.png");
              }
              else if($stateParams.playlistId ==2){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/3.png");
                  }
              }
              else if($stateParams.playlistId == 3){
                  $scope.images.push('img/sources/4.png');
              }
              else if ($stateParams.playlistId == 4){
                  $scope.images.push('img/sources/5.png');
              }
              else if ($stateParams.playlistId == 5){
                if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/6.png");
                  }
              }
              else if ($stateParams.playlistId == 6){
                  $scope.images.push("img/sources/7.png");
              }
              else if($stateParams.playlistId == 7){
                  $scope.images.push("img/sources/8.png");
              }
          }
      }
      //$rootScope.posts=res.responseData.feed.entries;
      console.log($rootScope.posts);
    })
  }

  var url;
  $scope.images=[];
  // $scope.titles=[];
  // $scope.pubDates=[];

  if ($stateParams.playlistId == 0 ){
    url = "http://www.espn.com/espn/rss/nfl/news";
  }
  else if ($stateParams.playlistId == 1){
    url = "http://rss.cbssports.com/rss/headlines"
  }
  else if ($stateParams.playlistId == 2){
    url = "http://sports.yahoo.com/nfl/rss.xml"
  }
  else if ($stateParams.playlistId == 3){
    url = "http://profootballtalk.nbcsports.com/category/rumor-mill/feed/atom/";
  }
  else if ($stateParams.playlistId == 4){
    url = "http://bleacherreport.com/articles/feed?tag_id=16";
  }
  else if ($stateParams.playlistId == 5){
    url = "http://www.si.com/rss/si_nfl.rss";
  }
  else if ($stateParams.playlistId == 6){
    url = "http://www.nfl.com/rss/rsslanding?searchString=home";
  }
  else if ($stateParams.playlistId == 7){
    url = "http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=nfl";
  }

  $scope.getRssFeed(url);

  $scope.openbrowser = function (index) {
    console.log($rootScope.posts[index].link);
    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'no'
   };
     $cordovaInAppBrowser.open($rootScope.posts[index].link, '_self', options)
    
      .then(function(event) {
         // success
      })
    
      .catch(function(event) {
         // error
      });
  }

  $scope.doRefresh = function(){
    $scope.getRssFeed(url);
    $scope.$broadcast('scroll.refreshComplete');
  }

  $scope.moreOptions = function(){
    $scope.alert_flag = true;

    var hideSheet=$ionicActionSheet.show({
      buttons: [
        {text: '<b>Refresh</b>'},
        {text: '<b>Mark All as Read</b>'}
      ],
      //destructiveText: 'Delete',
      titleText: 'More Options',
      cancelText: 'Cancel',
      cancel: function(){
        hideSheet();
      },

      buttonClicked:function(inded){
        return true;
      }
    });

    // $timeout(function(){
    //   hideSheet();
    // }, 1000);
  }

  $scope.cancelOptions = function(){
    $scope.alert_flag = false;
  }

  $scope.articles = [
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...' , id: 1, source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 2 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 3 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 4 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 5 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 6 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 7 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 8 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 9 , source_id: 1},
    { title: 'Jared Goff\'s high school coach says his former QB is ready to ...', id: 10 , source_id: 1}
  ];
})

.controller('ArticlePreviewCtrl', function($scope, $stateParams, $rootScope, $cordovaInAppBrowser, $sce) {
    $scope.link = $sce.trustAsResourceUrl($rootScope.posts[$stateParams.articleId].link);
    //$scope.link = $sce.trustAsResourceUrl("http://www.espn.com");
    $scope.title = $rootScope.posts[$stateParams.articleId].title;
    //alert($scope.link);

     
      // $cordovaInAppBrowser.open($scope.link, '_blank', 'toolbar=no')
    
      // .then(function(event) {
      //    // success
      // })
    
      // .catch(function(event) {
      //    // error
      // });
   
})

.controller('ArticleCtrl', function($scope, $ionicActionSheet, $timeout) {
  
  $scope.opensafari = function(url){
    //alert("ss");
    var hideSheet=$ionicActionSheet.show({
      buttons: [
        {text: '<b>Open Safari</b>'}
      ],
      //destructiveText: 'Delete',
      titleText: 'Other Options',
      cancelText: 'Cancel',
      cancel: function(){
        hideSheet();
      },

      buttonClicked:function(inded){
        alert(url);
        window.open=(url, '_system', 'location=yes');
        return true;
      }
    });

    // $timeout(function(){
    //   hideSheet();
    // }, 1000);
  };

})

.controller('LiveScoresCtrl', function($scope) {

})

.controller('ManageFeedsCtrl', function($scope, $stateParams,$ionicActionSheet, $timeout) {

    $scope.newslists = [
      { title: 'ESPN', id: 1 },
      { title: 'CBS Sports', id: 2 },
      { title: 'Yahoo Sports', id: 3 },
      { title: 'NBC Pro Football Talk', id: 4 },
      { title: 'Bleacher Report', id: 5 },
      { title: 'Sports Illustrated', id: 6 },
      { title: 'NFL', id: 7 },
      { title: 'Fox Sports', id: 8 },

      { title: 'NBC Sports', id: 9 },
      { title: 'SBNation', id: 10 },
      { title: 'Arizona Cardinals', id: 11 },
      { title: 'Atlanta Falcons', id: 12 },
      { title: 'Baltimore Ravens', id: 13 },
      { title: 'Buffalo Bills', id: 14 },
      { title: 'Carolina Panthers', id: 15 },
      { title: 'Chicago Bears', id: 16 },
      { title: 'Cincinnati Bengals', id: 17 },
      { title: 'Cleveland Browns', id: 18 },
      { title: 'Dallas Cowboys', id: 19 },
      { title: 'Denver Broncos', id: 20 },
      { title: 'Detroit Lions', id: 21 },
      { title: 'Green Bay Packers', id: 22 },
      { title: 'Houston Texans', id: 23 },
      { title: 'Indianapolis Colts', id: 24 },
      { title: 'Jacksonville Jaguars', id: 25 },
      { title: 'Kansas City Chiefs', id: 26 },
      { title: 'Los Angeles Rams', id: 27 },
      { title: 'Miami Dolphins', id: 28 },
      { title: 'Minnesota Vikings', id: 29 },
      { title: 'New England Patriots', id: 30 },
      { title: 'New Orleans Saints', id: 31 },
      { title: 'New York Giants', id: 32 },
      { title: 'New York Jets', id: 33 },
      { title: 'Oakland Raiders', id: 34 },
      { title: 'Philadelphia Eagles', id: 35 },
      { title: 'Pittsburgh Streelers', id: 36 },
      { title: 'San Diego Chargers', id: 37 },
      { title: 'San Francisco 49ers', id: 38 },
      { title: 'Seattle Seahawks', id: 39 },
      { title: 'Tampa Bay Buccaneers', id: 40 },
      { title: 'Tennessee Titans', id: 41 },
      { title: 'Washington Redskins', id: 42 },
      { title: 'Twitter', id: 43}
    
  ];

  $scope.selectAll = function(){
    $scope.alert_flag = true;

    var hideSheet=$ionicActionSheet.show({
      buttons: [
        {text: '<b>Select All</b>'}
      ],
      //destructiveText: 'Delete',
      titleText: 'More Options',
      cancelText: 'Cancel',
      cancel: function(){
        hideSheet();
      },

      buttonClicked:function(index){
        return true;
      }
    });

    // $timeout(function(){
    //   hideSheet();
    // }, 1000);
  };
});


















