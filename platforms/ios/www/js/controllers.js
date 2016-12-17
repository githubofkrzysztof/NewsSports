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

.controller('NewsCtrl', function($scope, $ionicActionSheet, $timeout, $rootScope, TwitterREST) {

  $scope.alert_flag = false;
  $rootScope.playlists = [
    { title: 'ESPN', id: 1 },
    { title: 'ESPN - Twitter', id: 2},

    { title: 'CBS Sports', id: 3 },

    { title: 'Yahoo Sports', id: 4 },
    
    { title: 'NBC Pro Football Talk', id: 5 },
    
    { title: 'Bleacher Report', id: 6 },
    
    { title: 'Sports Illustrated', id: 7 },
    
    { title: 'NFL', id: 8 },
    { title: 'NFL - Twitter', id: 9 },
    
    { title: 'Fox Sports', id: 10 },
    { title: 'Fox Sports NFL - Twitter', id: 11 },
    
    { title: 'NBC Sports', id: 12 },
    
    { title: 'SBNation', id: 13 },
    
    { title: 'Arizona Cardinals', id: 14 },
    { title: 'Arizona Cardinals - Twitter', id: 15 },
    
    { title: 'Atlanta Falcons', id: 16 },
    { title: 'Atlanta Falcons - Twitter', id: 17 },
    
    { title: 'Baltimore Ravens', id: 18 },
    { title: 'Baltimore Ravens - Twitter', id: 19 },
    
    { title: 'Buffalo Bills', id: 20 },
    { title: 'Buffalo Bills - Twitter', id: 21 },
    
    { title: 'Carolina Panthers', id: 22 },
    { title: 'Carolina Panthers - Twitter', id: 23 },
    
    { title: 'Chicago Bears', id: 24 },
    { title: 'Chicago Bears - Twitter', id: 25 },
    
    { title: 'Cincinnati Bengals', id: 26 },
    { title: 'Cincinnati Bengals - Twitter', id: 27 },
    
    { title: 'Cleveland Browns', id: 28 },
    { title: 'Cleveland Browns - Twitter', id: 29 },
    
    { title: 'Dallas Cowboys', id: 30 },
    { title: 'Dallas Cowboys - Twitter', id: 31 },

    { title: 'Denver Broncos', id: 32 },
    { title: 'Denver Broncos - Twitter', id: 33 },

    { title: 'Detroit Lions', id: 34 },
    { title: 'Detroit Lions - Twitter', id: 35},

    { title: 'Green Bay Packers', id: 36 },
    { title: 'Green Bay Packers - Twitter', id: 37 },

    { title: 'Houston Texans', id: 38 },
    { title: 'Houston Texans - Twitter', id: 39 },
    
    { title: 'Indianapolis Colts', id: 40 },
    { title: 'Indianapolis Colts - Twitter', id: 41 },

    { title: 'Jacksonville Jaguars', id: 42 },
    { title: 'Jacksonville Jaguars - Twitter', id: 43 },

    { title: 'Kansas City Chiefs', id: 44 },
    { title: 'Kansas City Chiefs - Twitter', id: 45 },
    
    { title: 'Los Angeles Rams', id: 46 },
    { title: 'Los Angeles Rams - Twitter', id: 47 },

    { title: 'Miami Dolphins', id: 48 },
    { title: 'Miami Dolphins - Twitter', id: 49 },
    
    { title: 'Minnesota Vikings', id: 50 },
    { title: 'Minnesota Vikings - Twitter', id: 51 },

    { title: 'New England Patriots', id: 52 },
    { title: 'New England Patriots - Twitter', id: 53 },

    { title: 'New Orleans Saints', id: 54 },
    { title: 'New Orleans Saints - Twitter', id: 55 },

    { title: 'New York Giants', id: 56 },
    { title: 'New York Giants - Twitter', id: 57 },

    { title: 'New York Jets', id: 58 },
    { title: 'New York Jets - Twitter', id: 59 },

    { title: 'Oakland Raiders', id: 60 },
    { title: 'Oakland Raiders - Twitter', id: 61 },
    
    { title: 'Philadelphia Eagles', id: 62 },
    { title: 'Philadelphia Eagles - Twitter', id: 63 },
    
    { title: 'Pittsburgh Streelers', id: 64 },
    { title: 'Pittsburgh Streelers - Twitter', id: 65 },

    { title: 'San Diego Chargers', id: 66 },
    { title: 'San Diego Chargers - Twitter', id: 67 },

    { title: 'San Francisco 49ers', id: 68 },
    { title: 'San Francisco 49ers - Twitter', id: 69 },

    { title: 'Seattle Seahawks', id: 70 },
    { title: 'Seattle Seahawks - Twitter', id: 71 },

    { title: 'Tampa Bay Buccaneers', id: 72 },
    { title: 'Tampa Bay Buccaneers - Twitter', id: 73 },

    { title: 'Tennessee Titans', id: 74 },
    { title: 'Tennessee Titans - Twitter', id: 75 },

    { title: 'Washington Redskins', id: 76 },
    { title: 'Washington Redskins - Twitter', id: 77 },
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
                  $ionicScrollDelegate, $timeout, $rootScope, $http, $cordovaInAppBrowser, TwitterREST) {


  $scope.alert_flag = false;
  $scope.title = $rootScope.playlists[$stateParams.playlistId].title;
  $scope.feed_type = true;
  //alert($stateParams.playlistId);
  
  $scope.getTwitterFeed = function (url){

    $rootScope.posts=[];
    $scope.images=[];

    TwitterREST.sync(url).then(function(tweets){
          console.log(tweets);
          $scope.tweets = tweets.statuses;
          $scope.feed_type = false;
          $rootScope.posts = $scope.tweets;

          for (var j=0;j<$rootScope.posts.length;j++){
            if ($stateParams.playlistId == 1){
              $scope.images.push("img/sources/2.png");
            }
            else if ($stateParams.playlistId == 8){
              $scope.images.push("img/sources/9.png");
            }
            else if ($stateParams.playlistId == 10){
              $scope.images.push("img/sources/11.png");
            }
            else if ($stateParams.playlistId == 14){
                $scope.images.push("img/sources/15.png");
            }
            else if ($stateParams.playlistId == 16){
                $scope.images.push("img/sources/17.png");
            }
            else if ($stateParams.playlistId == 18){
                $scope.images.push("img/sources/19.png");
            }
            else if ($stateParams.playlistId == 20){
                $scope.images.push("img/sources/21.png");
            }
            else if ($stateParams.playlistId == 22){
                $scope.images.push("img/sources/23.png");
            }
            else if ($stateParams.playlistId == 24){
                $scope.images.push("img/sources/25.png");
            }
            else if ($stateParams.playlistId == 26){
                $scope.images.push("img/sources/27.png");
            }
            else if ($stateParams.playlistId == 28){
                $scope.images.push("img/sources/29.png");
            }
            else if ($stateParams.playlistId == 30){
                $scope.images.push("img/sources/31.png");
            }
            else if ($stateParams.playlistId == 32){
                $scope.images.push("img/sources/33.png");
            }
            else if ($stateParams.playlistId == 34){
                $scope.images.push("img/sources/35.png");
            }
            else if ($stateParams.playlistId == 36){
                $scope.images.push("img/sources/37.png");
            }
            else if ($stateParams.playlistId == 38){
                $scope.images.push("img/sources/39.png");
            }
            else if ($stateParams.playlistId == 40){
                $scope.images.push("img/sources/41.png");
            }
            else if ($stateParams.playlistId == 42){
                $scope.images.push("img/sources/43.png");
            }
            else if ($stateParams.playlistId == 44){
                $scope.images.push("img/sources/45.png");
            }
            else if ($stateParams.playlistId == 46){
                $scope.images.push("img/sources/47.png");
            }
            else if ($stateParams.playlistId == 48){
                $scope.images.push("img/sources/49.png");
            }
            else if ($stateParams.playlistId == 50){
                $scope.images.push("img/sources/51.png");
            }
            else if ($stateParams.playlistId == 52){
                $scope.images.push("img/sources/53.png");
            }
            else if ($stateParams.playlistId == 54){
                $scope.images.push("img/sources/55.png");
            }
            else if ($stateParams.playlistId == 56){
                $scope.images.push("img/sources/57.png");
            }
            else if ($stateParams.playlistId == 58){
                $scope.images.push("img/sources/59.png");
            }
            else if ($stateParams.playlistId == 60){
                $scope.images.push("img/sources/61.png");
            }
          }


          for (var i = 0; i<$rootScope.posts.length; i++){
          
              var d1=new Date();
              var d2=new Date($rootScope.posts[i].created_at);
              var diff = new Date(d1.getTime() - d2.getTime());
              var days = diff.getUTCDate()-1;
              var hours = diff.getUTCHours();
              var mins = diff.getUTCMinutes();

              if (days > 0){
                  $rootScope.posts[i].created_at = days + "d ago";
              }
              else if (hours > 0){
                  $rootScope.posts[i].created_at = hours + "h ago";
              }
              else if (mins > 0){
                  $rootScope.posts[i].created_at = mins + "m ago";
              }
              else {
                  $rootScope.posts[i].created_at = "Just posted";
              }
          }
      });
  }


  $scope.getRssFeed = function (url){

    $scope.feed_type = true;
    $rootScope.posts=[];
    $scope.images=[];
    
     var google_converter="http://ajax.googleapis.com/ajax/services/feed/load?v=2.0&num=50&callback=JSON_CALLBACK&q=";
     var request = $http.jsonp(google_converter + encodeURIComponent(url));
    //var request = $http.get('https://query.yahooapis.com/v1/public/yql?q='+encodeURIComponent(url));
    request.success(function(res){
      var insteadposts = res.responseData.feed.entries;
      for(var ii=0; ii<insteadposts.length; ii++){
          if (insteadposts[ii].content.includes("nfl") || insteadposts[ii].link.includes("nfl") || insteadposts[ii].title.includes("nfl") 
              || $stateParams.playlistId>=10 || $stateParams.playlistId==3 || $stateParams.playlistId==8){
              $rootScope.posts.push(insteadposts[ii]);
              if ($stateParams.playlistId == 0){
                  $scope.images.push("img/sources/1.png");
              }
              else if ($stateParams.playlistId == 2){
                  $scope.images.push("img/sources/3.png");
              }
              else if($stateParams.playlistId ==3){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/4.png");
                  }
              }
              else if($stateParams.playlistId == 4){
                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/5.png");
                  }
              }
              else if ($stateParams.playlistId == 5){
                  $scope.images.push('img/sources/6.png');
              }
              else if ($stateParams.playlistId == 6){
                if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/7.png");
                  }
              }
              else if ($stateParams.playlistId == 7){
                  $scope.images.push("img/sources/8.png");
              }
              else if($stateParams.playlistId == 9){
                  $scope.images.push("img/sources/10.png");
              }
              else if ($stateParams.playlistId == 11){
                  $scope.images.push("img/sources/12.png");
              }
              else if ($stateParams.playlistId == 12){
                  
                  var end_position = insteadposts[ii].content.indexOf(">");
                  var image_str = insteadposts[ii].content.substring(17, end_position-1);
                  if (image_str != null){
                    //alert(image_str);
                    $scope.images.push(image_str);
                  }
                  else{
                    $scope.images.push("/img/sources/13.png");
                  }
              }
              else if ($stateParams.playlistId == 13){
                  $scope.images.push("img/sources/14.png");
              }
              else if ($stateParams.playlistId == 15){
                  $scope.images.push("img/sources/16.png");
              }
              else if ($stateParams.playlistId == 17){
                  $scope.images.push("img/sources/18.png");
              }
              else if ($stateParams.playlistId == 19){
                  $scope.images.push("img/sources/20.png");
              }
              else if ($stateParams.playlistId == 21){
                  $scope.images.push("img/sources/22.png");
              }
              else if ($stateParams.playlistId == 23){
                  $scope.images.push("img/sources/24.png");
              }
              else if ($stateParams.playlistId == 25){
                  $scope.images.push("img/sources/26.png");
              }
              else if ($stateParams.playlistId == 27){
                  $scope.images.push("img/sources/28.png");
              }
              else if($stateParams.playlistId == 29){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/30.png");
                  }
              }
              else if($stateParams.playlistId == 31){
                  $scope.images.push("img/sources/32.png");
              }
              else if ($stateParams.playlistId == 33){
                  $scope.images.push("img/sources/34.png");
              }
              else if ($stateParams.playlistId == 35){
                  $scope.images.push("img/sources/36.png");
              }
              else if ($stateParams.playlistId == 37){
                  $scope.images.push("img/sources/38.png");
              }
              else if ($stateParams.playlistId == 39){
                  $scope.images.push("img/sources/40.png");
              }
              else if ($stateParams.playlistId == 41){
                  $scope.images.push("img/sources/42.png");
              }
              else if ($stateParams.playlistId == 43){
                  $scope.images.push("img/sources/44.png");
              }
              else if ($stateParams.playlistId == 45){
                  $scope.images.push("img/sources/46.png");
              }
              else if ($stateParams.playlistId == 47){
                  $scope.images.push("img/sources/48.png");
              }
              else if ($stateParams.playlistId == 49){
                  $scope.images.push("img/sources/50.png");
              }
              else if ($stateParams.playlistId == 51){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/52.png");
                  }
              }
              else if ($stateParams.playlistId == 53){
                  $scope.images.push("img/sources/54.png");
              }
              else if ($stateParams.playlistId == 55){
                  $scope.images.push("img/sources/56.png");
              }
              else if ($stateParams.playlistId == 57){
                  $scope.images.push("img/sources/58.png");
              }
              else if ($stateParams.playlistId == 59){
                  $scope.images.push("img/sources/60.png");
              }
              else if ($stateParams.playlistId == 61){
                  $scope.images.push("img/sources/62.png");
              }
              else if ($stateParams.playlistId == 63){
                  $scope.images.push("img/sources/64.png");
              }
              else if ($stateParams.playlistId == 65){
                  $scope.images.push("img/sources/66.png");
              }
              else if ($stateParams.playlistId == 67){
                  $scope.images.push("img/sources/68.png");
              }
              else if ($stateParams.playlistId == 69){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/70.png");
                  }
              }
              else if ($stateParams.playlistId == 71){
                  $scope.images.push("img/sources/72.png");
              }
              else if ($stateParams.playlistId == 73){
                  $scope.images.push("img/sources/74.png");
              }
              else if ($stateParams.playlistId == 75){
                  $scope.images.push("img/sources/76.png");
              }
          }
      }
      //$rootScope.posts=res.responseData.feed.entries;
      console.log($rootScope.posts);

      for (var i = 0; i<$rootScope.posts.length; i++){
          for (var j = i+1; j<$rootScope.posts.length; j++){
              var d1=Date.parse($rootScope.posts[i].publishedDate);
              var d2=Date.parse($rootScope.posts[j].publishedDate);
              var temp;
              if (d1<d2){
                  temp = $rootScope.posts[i];
                  $rootScope.posts[i]=$rootScope.posts[j];
                  $rootScope.posts[j]=temp;
              }
          }
      }

      for (var i = 0; i<$rootScope.posts.length; i++){
          
          var d1=new Date();
          var d2=new Date($rootScope.posts[i].publishedDate);
          var diff = new Date(d1.getTime() - d2.getTime());
          var days = diff.getUTCDate()-1;
          var hours = diff.getUTCHours();
          var mins = diff.getUTCMinutes();

          if (days > 0){
              $rootScope.posts[i].publishedDate = days + "d ago";
          }
          else if (hours > 0){
              $rootScope.posts[i].publishedDate = hours + "h ago";
          }
          else if (mins > 0){
              $rootScope.posts[i].publishedDate = mins + "m ago";
          }
          else {
              $rootScope.posts[i].publishedDate = "Just posted";
          }
      }

    })
  }

  var url;
  $scope.images=[];
  // $scope.titles=[];
  // $scope.pubDates=[];

  if ($stateParams.playlistId == 0 ){
    url = "http://www.espn.com/espn/rss/nfl/news";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 1 ){
    url = "ESPNNFL";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 2){
    url = "http://rss.cbssports.com/rss/headlines"
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 3){
    url = "http://sports.yahoo.com/nfl/rss.xml"
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 4){
    url = "http://feeds.feedburner.com/pftalk/rumor-mill";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 5){
    url = "http://bleacherreport.com/articles/feed?tag_id=16";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 6){
    url = "http://www.si.com/rss/si_nfl.rss";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 7){
    url = "http://www.nfl.com/rss/rsslanding?searchString=home";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 8 ){
    url = "NFL";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 9){
    url = "http://api.foxsports.com/v1/rss?partnerKey=zBaFxRyGKCfxBagJG9b8pqLyndmvo7UU&tag=nfl";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 10){
    url = "NFLonFOX";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 11){
    url = "http://profootballtalk.nbcsports.com/feed/atom/";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 12){
    url = "http://www.sbnation.com/rss/current";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 13){
    url = "http://www.azcardinals.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 14){
    url = "AZCardinals";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 15){
    url = "http://www.atlantafalcons.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 16){
    url = "AtlantaFalcons";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 17){
    url = "http://www.baltimoreravens.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 18){
    url = "Ravens";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 19){
    url = "http://www.buffalobills.com/cda-web/rss-module.htm?tagName=LatestHeadlines";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 20){
    url ="buffalobills";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 21){
    url = "http://www.panthers.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 22){
    url = "Panthers";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 23){
    url = "http://feeds.feedburner.com/chicagobears/news";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 24){
    url = "ChicagoBears";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 25){
    url = "http://www.bengals.com/cda-web/rss-module.htm?tagName=News%20Stories";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 26){
    url = "Bengals";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 27){
    url = "http://www.clevelandbrowns.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 28){
    url = "Browns";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 29){
    url = "http://www.dallascowboys.com/rss/article";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 30){
    url = "dallascowboys";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 31){
    url = "http://www.denverbroncos.com/cda-web/rss-module.htm?tagName=News&view=mobile";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 32){
    url = "Broncos";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 33){
    url = "http://www.detroitlions.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 34){
    url = "Lions";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 35){
    url = "http://www.packers.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 36){
    url = "packers";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 37){
    url = "http://www.houstontexans.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 38){
    url = "HoustonTexans";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 39){
    url = "http://www.colts.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 40){
    url = "Colts";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 41){
    url = "http://prod.www.jaguars.clubs.nfl.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 42){
    url = "Jaguars";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 43){
    url = "http://www.chiefs.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 44){
    url = "Chiefs";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 45){
    url = "http://www.therams.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 46){
    url = "RamsNFL";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 47){
    url = "http://www.miamidolphins.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 48){
    url = "miamidolphins";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 49){
    url = "http://www.vikings.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 50){
    url = "Vikings";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 51){
    url = "http://www.patriots.com/rss/article/mobile/all/News%20-%20Mobile";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 52){
    url = "Patriots";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 53){
    url = "http://www.neworleanssaints.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 54){
    url = "Saints";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 55){
    url = "http://www.giants.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 56){
    url = "Giants";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 57){
    url = "http://www.newyorkjets.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 58){
    url = "nyjets";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 59){
    url = "http://www.raiders.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 60){
    url = "RAIDERS";
    $scope.getTwitterFeed(url);
  }
  else if ($stateParams.playlistId == 61){
    url = "http://www.philadelphiaeagles.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 63){
    url = "http://www.steelers.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 65){
    url = "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&C=154786";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 67){
    url = "http://www.49ers.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 69){
    url = "http://www.seahawks.com/rss/article";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 71){
    url = "http://www.buccaneers.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 73){
    url = "http://www.titansonline.com/cda-web/rss-module.htm?tagName=TeamNews";
    $scope.getRssFeed(url);
  }
  else if ($stateParams.playlistId == 75){
    url = "http://www.redskins.com/cda-web/rss-module.htm?tagName=News";
    $scope.getRssFeed(url);
  }

  $scope.openbrowser = function (index) {
    

    var link;
    if ($scope.feed_type == true){
      link = $rootScope.posts[index].link
    }
    else {
      var position = $rootScope.posts[index].text.search("https://");
      link = $rootScope.posts[index].text.substring(position, position+23);
    }
    console.log(link);
    var options = {
      location: 'no',
      clearcache: 'yes',
      toolbar: 'no'
   };
     $cordovaInAppBrowser.open(link, '_self', options)
    
      .then(function(event) {
         // success
      })
    
      .catch(function(event) {
         // error
      });
  }

  $scope.doRefresh = function(){
    if ($scope.feed_type == true){
      $scope.getRssFeed(url);
    }
    else{
      $scope.getTwitterFeed(url);
    }
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


















