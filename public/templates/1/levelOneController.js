'use strict';

angular.module('tutoryourself').controller('levelOneCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',  '$modal',function($scope, $http, Flash, $sessionStorage, $state,$rootScope, $modal) {
    $rootScope.level = 1;
    $scope.showEditor = false;
    $scope.nextLevel = true;
     $scope.show = function() {
      $scope.showEditor = !$scope.showEditor
    }
    
    if ($rootScope.currentUser.level < $rootScope.level) 
      {
        $rootScope.currentUser.level = $rootScope.level;
        $http({
                method: 'POST',
                url: '/update',
                headers: {'Content-Type': 'application/json'},
                data: {
                    currentUser: $rootScope.currentUser
                 }
            }).success(function (response) {
                if (response.success) {
                      console.log('sexy')
                }

            }).error(function (error) {
                $scope.message = "Invalid Password";
                Flash.create('danger', $scope.message);
            });

          //modal
          var modalInstance = $modal.open({
            animation:true,
            templateUrl: 'templates/modal.html',
            controller: 'modalInstanceCtrl',
            resolve: {
              level: function() {
                return $rootScope.level;
              }
            }
          });


      }
    
    $scope.code="var red;\nvar blue;\nvar indigo = blue + red;\n";
    $scope.run = function() {
      var blue = angular.element(document.getElementsByClassName('blue')[0]);
      blue[0].classList.add('move');
      var red = angular.element(document.getElementsByClassName('redJar')[0]);
      red[0].classList.add('move');
      var indigo = angular.element(document.getElementsByClassName('indigo')[0]);
      indigo[0].classList.remove('hide');
      indigo[0].classList.add('mix');
      console.log($rootScope.currentUser.level)
      $scope.nextLevel = false;
    }
  }
]);

