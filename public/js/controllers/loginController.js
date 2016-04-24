angular.module('tutoryourself').controller('loginCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',function($scope, $http, Flash, $sessionStorage, $state,$rootScope) {
   $scope.user={};
    $scope.submitForm = function (valid) {
        if (valid) {
            $http({
                method: 'POST',
                url: '/login',
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
                }
            }).success(function (response) {
                if (response.success) {
                    $scope.user = {};
                    $scope.message = "Hi, "+response.user.name;
                    $scope.res = response.success;
                    Flash.create('success', $scope.message);
                    $sessionStorage.loggedIn = true;
                    $sessionStorage.user = response.user;
                    $rootScope.loggedIn = true;
                    $rootScope.currentUser = $sessionStorage.user;

                    $state.go('welcome', {}, {reload: false}); //second parameter is for $stateParams
                }
                else {

                }

            }).error(function (error) {
                $scope.message = "Invalid Password";
                Flash.create('danger', $scope.message);
            });


        }
    }
}]);