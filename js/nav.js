angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  
  	 .state('landing', {
  	 	 url: "/landing",
  	 	 templateUrl: "landing.html"
  	 })
  
    .state('main', {
      url: "/main",
      abstract: true,
      templateUrl: "menu.html"
    })
  
    .state('main.tabs', {
      url: "/tab",
      abstract: true,
      views: {
        'menu-content': {
          templateUrl: "tabs.html",
        }
      }
    })
    .state('main.tabs.online', {
      url: "/online",
      views: {
        'online-tab': {
          templateUrl: "online.html",
          controller: 'OnlineTabCtrl'
        }
      }
    })

    .state('main.tabs.friend_requests', {
      url: "/friend_requests",
      views: {
        'friend_requests-tab': {
          templateUrl: "friend_requests.html"
        }
      }
    })

  
    .state('main.tabs.add_friend', {
      url: "/add_friend",
      views: {
        'add_friend-tab': {
          templateUrl: "add_friend.html"
        }
      }
    })


   $urlRouterProvider.otherwise("/main/tab/landing");

})

.controller('OnlineTabCtrl', function($scope) {
  console.log('OnlineTabCtrl');
})

.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
  
  $scope.mainCtrl = {};
  $scope.leftButtons = [{
    type: 'button-icon button-clear ion-navicon',
    tap: function(e) {
      $ionicSideMenuDelegate.toggleLeft($scope.$$childHead);
    }
  }];
  
  $scope.mainCtrl.showFeature = false;
  
});