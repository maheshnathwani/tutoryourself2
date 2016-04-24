'use strict';

angular.module('tutoryourself')
  .config(
    ['$stateProvider', '$urlRouterProvider','snSkrollrProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, snSkrollrProvider, $locationProvider) {

        var pages = ['home', 'login', 'about', 'contact'];
        $urlRouterProvider
          .otherwise('/home'); 

        $stateProvider
          .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl',
            param: {
              order: 0,
              next: pages[1],
            }

          })
          .state('register', {
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'registerCtrl',
            param: {
              order: 1,
              next: pages[2],
              prev: pages[0],
            }
          })
          .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginCtrl',
            param: {
              order: 1,
              next: pages[2],
              prev: pages[0],
            }
          })
          .state('about', {
            url: '/about',
            templateUrl: 'templates/about.html',
            controller:  function($scope) {
              $scope.class = "three";
            },
            param: {
              order: 2,
              next: pages[3],
              prev: pages[1],
            }
          })
          .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html',
            controller:  function($scope) {
              $scope.class = "four";
            },
            param: {
              order: 3,
              prev: pages[2],
            }
          })
            .state('welcome', {
              url: '/intro',
              templateUrl: 'templates/welcome.html'

            })
            .state('level', {
                  url: '/:user/level/:id',
                  templateUrl:function($stateParams) {
                    return 'templates/'+$stateParams.id+'/level.html'
                    
                  }

                });

          snSkrollrProvider.config = {
              smoothScrolling : true
          }
      $locationProvider.html5Mode(true);

      }]);
