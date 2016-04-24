'use strict';

angular.module('tutoryourself').controller('HomeCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',function($scope, $http, Flash, $sessionStorage, $state,$rootScope) {
    $scope.url = "qxpntiE6k8E";
    $scope.class = 'one';
    $scope.logout = function() {
      console.log('got')
      $scope.showEditor = false;
      if ($rootScope.loggedIn) {
        $http({
          method: 'POST',
          url: '/logout'
        }).then(function successCallback(response) {
          console.log(response)
          if (response.data.success)
          {
            $sessionStorage.loggedIn = false;
            $sessionStorage.user = {};
            $rootScope.loggedIn = false;
            $rootScope.currentUser = {};
            $state.go('login', {}, {reload: true}); //second parameter is for $stateParams
          }
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
      }
    };

  }
]);

