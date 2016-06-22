angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats, $ionicPopup) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $ionicPopup.alert({
      title: 'Chats',
      template: window.analytics.trackView('Chats')
    });

  window.analytics.trackView('Chats');


  $ionicPopup.alert({
    title: 'Chats2',
    template: 'Chats2'
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  window.analytics.trackView('Chat details');

  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  window.analytics.trackView('Account detail');

  $scope.settings = {
    enableFriends: true
  };
});
