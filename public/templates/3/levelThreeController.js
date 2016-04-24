'use strict';

angular.module('tutoryourself').controller('levelThreeCtrl', ['$scope' , '$http', 'Flash', '$sessionStorage', '$state', '$rootScope',  '$modal', '$timeout',function($scope, $http, Flash, $sessionStorage, $state,$rootScope, $modal, $timeout) {
    $rootScope.level = 3;
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
    
    $scope.read="pikachu.moveRight()\npikachu.moveDown()\npikachu.moveRight()\npikachu.moveUp()\npikachu.moveRight()\npikachu.moveUp()\n";
    $scope.code="pikachu.moveRight()\npikachu.moveDown()\npikachu.moveRight()\npikachu.moveUp()\npikachu.moveRight()\npikachu.moveUp()\n";
    $scope.run = function() {
      var syntaxCheck = false;
      var text = $scope.code;
      var count = 0;
      var pikachu3 = angular.element(document.getElementsByClassName('pikachu3')[0]);
      pikachu3[0].style.top = '160px';
      pikachu3[0].style.left = '85px';
      pikachu3[0].style.transform = 'translate(0px,0px)';
      pikachu3[0].style.transitionDuration = "0.25s";
      pikachu3[0].classList.remove("moveRight");
      pikachu3[0].classList.remove("moveLeft");
      pikachu3[0].classList.remove("moveDown");
      pikachu3[0].classList.remove("moveUp");
      var splitted = text.split("\n");
      var line = splitted.length-1;
      $scope.nextLevel = false;
      /*if (count === 0 && line === 6)
        pikachu3[0].classList.add("move");*/
      console.log(splitted);
      console.log(pikachu3)
      splitted.pop("");
      console.log(splitted)
      for(var s in splitted)
      {
        switch (s) {
                  case "0" :
              if(splitted[s].trim() === "pikachu.moveRight()")
              {
                
                count++;
              }
              else
                alert("Error in line 1. Please enter pikachu.moveRight()");
              break;
          case "1" :
              if(splitted[s].trim() === "pikachu.moveDown()")
              {
                
                count++;
              }
              else
              alert("Error in line 2. Please enter pikachu.moveDown()");
              break;
          case "2" :
            if(splitted[s].trim() === "pikachu.moveRight()")
            {
              count++;
            }
            else
              alert("Error in line 3. Please enter pikachu.moveRight()");
            break;
          case "3" :
            if(splitted[s].trim() === "pikachu.moveUp()")
            {
              count++;
            }
            else
              alert("Error in line 4. Please enter pikachu.moveUp()");
            break;
          case "4" :
            if(splitted[s].trim() === "pikachu.moveRight()")
            {
              count++;
            }
            else
              alert("Error in line 5. Please enter pikachu.moveRight()");
            break;
          case "5" :
            if(splitted[s].trim() === "pikachu.moveUp()")
            {
              syntaxCheck = true;
              count++;
            }
            else
              alert("Error in line 6. Please enter pikachu.moveUp()");
            break;
          default: console.log("let's see if you are working!");

                }        
      }

      
      if (syntaxCheck) {
        for(var s in splitted)
      {
        switch (s) 
        {
          case "0" :
              if(splitted[s].trim() === "pikachu.moveRight()")
              {
                pikachu3[0].classList.add('walk');
                pikachu3[0].style.transform = 'translate(65px,0px)';
                pikachu3[0].style.transitionDuration = "2s";
                pikachu3[0].style.transitionTimingFunction = 'linear';
                $timeout(function() {
                  pikachu3[0].classList.remove('walk');
                pikachu3[0].style.transitionDuration = "0s";
                pikachu3[0].style.height = '36px';
                pikachu3[0].style.width = '25px';

                },2000)
                count++;
              }
              else
                alert("Error in line 1. Please enter pikachu.moveRight()");
              break;
          case "1" :
              if(splitted[s].trim() === "pikachu.moveDown()")
              {
                $timeout(function() {
                  pikachu3[0].classList.add('moveDown');
                  $timeout(function() {
                    pikachu3[0].classList.add('walkDown');
                    pikachu3[0].style.transform = 'translate(65px,90px)';
                    pikachu3[0].style.transitionDuration = "3s";
                    pikachu3[0].style.transitionTimingFunction = 'linear';
                  },100);
                  $timeout(function() {
                  pikachu3[0].style.transitionDuration = "0s";

                    pikachu3[0].classList.remove('walkDown');
                    pikachu3[0].classList.remove('moveDown')
                    pikachu3[0].style.height = '50px';
                pikachu3[0].style.width = '34px';
                  },3100)
                },2100);
                count++;
              }
              else
              alert("Error in line 2. Please enter pikachu.moveDown()");
              break;
          case "2" :
            if(splitted[s].trim() === "pikachu.moveRight()")
            {
              $timeout(function() {
                pikachu3[0].classList.add('walk');
                pikachu3[0].style.transform = 'translate(200px,90px)';
                pikachu3[0].style.transitionDuration = "4s";
                pikachu3[0].style.transitionTimingFunction = 'linear';
                $timeout(function() {
                  pikachu3[0].classList.remove('walk');
                pikachu3[0].style.transitionDuration = "0s";
                pikachu3[0].style.height = '37px';
                pikachu3[0].style.width = '29px';

                },4100)
              },5300)
              count++;
            }
            else
              alert("Error in line 3. Please enter pikachu.moveRight()");
            break;
          case "3" :
            if(splitted[s].trim() === "pikachu.moveUp()")
            {
              $timeout(function() {
                  pikachu3[0].classList.add('moveUp');
                  $timeout(function() {
                    pikachu3[0].classList.add('walkUp');
                    pikachu3[0].style.transform = 'translate(200px,-73px)';
                    pikachu3[0].style.transitionDuration = "5s";
                    pikachu3[0].style.transitionTimingFunction = 'linear';
                  },100);
                  $timeout(function() {
                  pikachu3[0].style.transitionDuration = "0s";

                    pikachu3[0].classList.remove('walkUp');
                    pikachu3[0].classList.remove('moveUp')
                    pikachu3[0].style.height = '50px';
                pikachu3[0].style.width = '34px';
                  },5100)
                },9500);
              count++;
            }
            else
              alert("Error in line 4. Please enter pikachu.moveUp()");
            break;
          case "4" :
            if(splitted[s].trim() === "pikachu.moveRight()")
            {
              $timeout(function() {
                pikachu3[0].classList.add('walk');
                pikachu3[0].style.transform = 'translate(300px,-73px)';
                pikachu3[0].style.transitionDuration = "2.5s";
                pikachu3[0].style.transitionTimingFunction = 'linear';
                $timeout(function() {
                  pikachu3[0].classList.remove('walk');
                pikachu3[0].style.transitionDuration = "0s";
                pikachu3[0].style.height = '37px';
                pikachu3[0].style.width = '29px';

                },2100)
              },14600)
              count++;
            }
            else
              alert("Error in line 3. Please enter pikachu.moveRight()");
            break;
          case "5" :
            if(splitted[s].trim() === "pikachu.moveUp()")
            {
              $timeout(function() {
                  pikachu3[0].classList.add('moveUp');
                  $timeout(function() {
                    pikachu3[0].classList.add('walkUp');
                    pikachu3[0].style.transform = 'translate(290px,-138px)';
                    pikachu3[0].style.transitionDuration = "1.5s";
                    pikachu3[0].style.transitionTimingFunction = 'linear';
                  },100);
                  $timeout(function() {
                  pikachu3[0].style.transitionDuration = "0s";

                    pikachu3[0].classList.remove('walkUp');
                    pikachu3[0].classList.remove('moveUp')
                    pikachu3[0].style.height = '50px';
                pikachu3[0].style.width = '34px';
                  },1600)
                },16800);
              count++;
            }
            else
              alert("Error in line 4. Please enter pikachu.moveUp()");
            break;
          default: console.log("let's see if you are working!");

        }
}
      }
    }
  }
]);
