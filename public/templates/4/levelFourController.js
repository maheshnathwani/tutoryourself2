'use strict';

angular.module('tutoryourself').controller('levelFourCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',  '$modal', '$timeout',function($scope, $http, Flash, $sessionStorage, $state,$rootScope, $modal, $timeout) {
    $rootScope.level = 2;
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
    
    $scope.code="start specialAttack\npikachu.quickAttack()\npikachu.tackle()\nend";
    $scope.read="start specialAttack\npikachu.quickAttack()\npikachu.tackle()\nend";
    $scope.run = function() {
      var text = $scope.code;
      var count = 0;
      var pikachu4 = angular.element(document.getElementsByClassName('pikachu4')[0]);
      var splitted = text.split("\n");
      var index = splitted.length

      while (index--) {
           // statement
             if (splitted[index] == "") {
           splitted.splice(index, 1);

        }
      
         }   
      
      var line = splitted.length-1;
      $scope.nextLevel = false;
      //syntax check
      var firstLine = splitted[0].trim().split(' ');
      if (firstLine[0] === "start" && splitted[line].trim() === "end" && splitted.length === 4) 
      {
        console.log('working')
      }
      else {
        Flash.create('danger','Invalid function syntax');
      }
      console.log(firstLine)

    }
  }
]);

