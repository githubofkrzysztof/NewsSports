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
                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/4.png");
                  }
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
              else if ($stateParams.playlistId == 8){
                  $scope.images.push("img/sources/9.png");
              }
              else if ($stateParams.playlistId == 9){
                  
                  var end_position = insteadposts[ii].content.indexOf(">");
                  var image_str = insteadposts[ii].content.substring(17, end_position-1);
                  if (image_str != null){
                    //alert(image_str);
                    $scope.images.push(image_str);
                  }
                  else{
                    $scope.images.push("/img/sources/10.png");
                  }
              }
              else if ($stateParams.playlistId == 10){
                  $scope.images.push("img/sources/11.png");
              }
              else if ($stateParams.playlistId == 11){
                  $scope.images.push("img/sources/12.png");
              }
              else if ($stateParams.playlistId == 12){
                  $scope.images.push("img/sources/13.png");
              }
              else if ($stateParams.playlistId == 13){
                  $scope.images.push("img/sources/14.png");
              }
              else if ($stateParams.playlistId == 14){
                  $scope.images.push("img/sources/15.png");
              }
              else if ($stateParams.playlistId == 15){
                  $scope.images.push("img/sources/16.png");
              }
              else if ($stateParams.playlistId == 16){
                  $scope.images.push("img/sources/17.png");
              }
              else if ($stateParams.playlistId == 17){
                  $scope.images.push("img/sources/18.png");
              }
              else if($stateParams.playlistId ==18){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/19.png");
                  }
              }
              else if($stateParams.playlistId ==19){
                  $scope.images.push("img/sources/20.png");
              }
              else if ($stateParams.playlistId == 20){
                  $scope.images.push("img/sources/21.png");
              }
              else if ($stateParams.playlistId == 21){
                  $scope.images.push("img/sources/22.png");
              }
              else if ($stateParams.playlistId == 22){
                  $scope.images.push("img/sources/23.png");
              }
              else if ($stateParams.playlistId == 23){
                  $scope.images.push("img/sources/24.png");
              }
              else if ($stateParams.playlistId == 24){
                  $scope.images.push("img/sources/25.png");
              }
              else if ($stateParams.playlistId == 25){
                  $scope.images.push("img/sources/26.png");
              }
              else if ($stateParams.playlistId == 26){
                  $scope.images.push("img/sources/27.png");
              }
              else if ($stateParams.playlistId == 27){
                  $scope.images.push("img/sources/28.png");
              }
              else if ($stateParams.playlistId == 28){
                  $scope.images.push("img/sources/29.png");
              }
              else if ($stateParams.playlistId ==29){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/30.png");
                  }
              }
              else if ($stateParams.playlistId == 30){
                  $scope.images.push("img/sources/31.png");
              }
              else if ($stateParams.playlistId == 31){
                  $scope.images.push("img/sources/32.png");
              }
              else if ($stateParams.playlistId == 32){
                  $scope.images.push("img/sources/33.png");
              }
              else if ($stateParams.playlistId == 33){
                  $scope.images.push("img/sources/34.png");
              }
              else if ($stateParams.playlistId == 34){
                  $scope.images.push("img/sources/35.png");
              }
              else if ($stateParams.playlistId == 35){
                  $scope.images.push("img/sources/36.png");
              }
              else if ($stateParams.playlistId == 36){
                  $scope.images.push("img/sources/37.png");
              }
              else if ($stateParams.playlistId == 37){
                  $scope.images.push("img/sources/38.png");
              }
              else if ($stateParams.playlistId ==38){

                  if (insteadposts[ii].mediaGroups != null){
                    console.log(insteadposts[ii].mediaGroups[0].contents[0].url);
                    $scope.images.push(insteadposts[ii].mediaGroups[0].contents[0].url);
                  }
                  else{
                    $scope.images.push("img/sources/39.png");
                  }
              }
              else if ($stateParams.playlistId == 39){
                  $scope.images.push("img/sources/40.png");
              }
              else if ($stateParams.playlistId == 40){
                  $scope.images.push("img/sources/41.png");
              }
              else if ($stateParams.playlistId == 41){
                  $scope.images.push("img/sources/42.png");
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
  }
  else if ($stateParams.playlistId == 1){
    url = "http://rss.cbssports.com/rss/headlines"
  }
  else if ($stateParams.playlistId == 2){
    url = "http://sports.yahoo.com/nfl/rss.xml"
  }
  else if ($stateParams.playlistId == 3){
    url = "http://feeds.feedburner.com/pftalk/rumor-mill";
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
  else if ($stateParams.playlistId == 8){
    url = "http://profootballtalk.nbcsports.com/feed/atom/";
  }
  else if ($stateParams.playlistId == 9){
    url = "http://www.sbnation.com/rss/current";
  }
  else if ($stateParams.playlistId == 10){
    url = "http://www.azcardinals.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 11){
    url = "http://www.atlantafalcons.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 12){
    url = "http://www.baltimoreravens.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 13){
    url = "http://www.buffalobills.com/cda-web/rss-module.htm?tagName=LatestHeadlines";
  }
  else if ($stateParams.playlistId == 14){
    url = "http://www.panthers.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 15){
    url = "http://feeds.feedburner.com/chicagobears/news";
  }
  else if ($stateParams.playlistId == 16){
    url = "http://www.bengals.com/cda-web/rss-module.htm?tagName=News%20Stories";
  }
  else if ($stateParams.playlistId == 17){
    url = "http://www.clevelandbrowns.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 18){
    url = "http://www.dallascowboys.com/rss/article";
  }
  else if ($stateParams.playlistId == 19){
    url = "http://www.denverbroncos.com/cda-web/rss-module.htm?tagName=News&view=mobile";
  }
  else if ($stateParams.playlistId == 20){
    url = "http://www.detroitlions.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 21){
    url = "http://www.packers.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 22){
    url = "http://www.houstontexans.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 23){
    url = "http://www.colts.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 24){
    url = "http://prod.www.jaguars.clubs.nfl.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 25){
    url = "http://www.chiefs.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 26){
    url = "http://www.therams.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 27){
    url = "http://www.miamidolphins.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 28){
    url = "http://www.vikings.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 29){
    url = "http://www.patriots.com/rss/article/mobile/all/News%20-%20Mobile";
  }
  else if ($stateParams.playlistId == 30){
    url = "http://www.neworleanssaints.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 31){
    url = "http://www.giants.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 32){
    url = "http://www.newyorkjets.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 33){
    url = "http://www.raiders.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 34){
    url = "http://www.philadelphiaeagles.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 35){
    url = "http://www.steelers.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 36){
    url = "http://www.cbs8.com/Global/category.asp?clienttype=rss_img&C=154786";
  }
  else if ($stateParams.playlistId == 37){
    url = "http://www.49ers.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 38){
    url = "http://www.seahawks.com/rss/article";
  }
  else if ($stateParams.playlistId == 39){
    url = "http://www.buccaneers.com/cda-web/rss-module.htm?tagName=News";
  }
  else if ($stateParams.playlistId == 40){
    url = "http://www.titansonline.com/cda-web/rss-module.htm?tagName=TeamNews";
  }
  else if ($stateParams.playlistId == 41){
    url = "http://www.redskins.com/cda-web/rss-module.htm?tagName=News";
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


















