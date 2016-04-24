angular.module('tutoryourself').controller('registerCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',function($scope, $http, Flash, $sessionStorage, $state,$rootScope) {
      $scope.user = {};
      $scope.message = "";
  $scope.class = 'two'
  $scope.submitForm = function (valid) {
      if (valid) {
          $http({
              method: 'POST',
              url: '/register',
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
              transformRequest: function (obj) {
                  var str = [];
                  for (var p in obj)
                      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                  return str.join("&");
              },
              data: {
                  username: $scope.user.username,
                  password: $scope.user.password,
                  name: $scope.user.name,
                  email: $scope.user.email,
                  level: 0
              }
          }).success(function (response) {
              if (response.success) {
                  $scope.user = {};
                  $scope.message = response.msg;
                  $scope.res = response.success;
                  Flash.create('success', $scope.message);
                  $sessionStorage.loggedIn = true;
                  $sessionStorage.user = response.user;
                  $rootScope.loggedIn = true;
                  $rootScope.currentUser = $sessionStorage.user;
                  $state.go('welcome', {}, {reload: false}); //second parameter is for $stateParams
              }
              else {
                  $scope.message = response.msg;
                  $scope.res = response.success;
                  Flash.create('danger', $scope.message);

              }

          }).error(function (error) {
              console.log('error');
          });


      }
  }


}]);