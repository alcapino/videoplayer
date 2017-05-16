angular.module('starter.controllers', [])

.controller('Landing', ['$scope','$state', '$ionicHistory', function($scope,$state,$ionicHistory){
  //console.log('haha');
  $scope.signup = function(){
    //alert('sent: sign up');
    $state.go("signup");
  };
  $scope.login = function(){
    //alert('sent: login');
  };
  $scope.skip = function(param){
    //alert('sent: '+param);
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    $state.go('tab.dash');
  };

}])

.controller('DashCtrl', function($scope,$state,Videos) {
  $scope.featured = Videos.all();
  $scope.locals = Videos.all();
  $scope.gotoVideo = function(param){
    alert(param);
    $state.go('videopage',{"vid":param});
  };
})

.controller('VideoCtrl', function($scope,$stateParams,Videos){
  console.log(Videos.all());
  $scope.movies = Videos.all();
  $scope.vid = Videos.get($stateParams.vid);
  console.log("v: "+Videos.get($stateParams.vid).url);
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
