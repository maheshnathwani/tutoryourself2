'use strict';

angular.module('tutoryourself').controller('levelTwoCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',  '$modal', '$timeout',function($scope, $http, Flash, $sessionStorage, $state,$rootScope, $modal, $timeout) {
    $rootScope.level = 2;
    $scope.nextLevel = true;
    $scope.showEditor = false;
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
    
    $scope.code="var walk = 0\n";
    $scope.read="var walk = 4 //some number below 6\n";
    $scope.run = function() {
      var syntax = "var walk"
      var code = $scope.code.trim().split('=');
      if (code.length == 1) {
        Flash.create('danger',"Invalid syntax!")
      }
      //code = code.trim();
      else
      {
        if (code[1].trim().length === 1 && parseInt(code[1].trim()) <= 6) {
            console.log(code[1].trim())
            var num = parseInt(code[1].trim());
            console.log(num)
          var pikachu = angular.element(document.getElementsByClassName('pikachu')[0]);
          pikachu[0].classList.add('walk');
           pikachu[0].style.transform = "translateX("+(num*85)+"px) scale(1.5)";
          pikachu[0].style.transitionDuration = (num*2)+"s";
          console.log(pikachu[0])
          pikachu[0].style.transitionTimingFunction = "linear";
          $timeout(function() {
                pikachu[0].classList.remove('walk')
          }, ((num*3)*1000));
          $scope.nextLevel = false;
        }
        else{
          Flash.create('danger', 'Invalid syntax')
        }
      }
    }
  }
]);

