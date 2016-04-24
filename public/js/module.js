'use strict';

angular.module('tutoryourself', [
  'ngAnimate',
  'ui.router',
  'ngSanitize',
    'angularYouTube',
    'angular-scroll-animate',
    'sn.skrollr',
    'ng-mfb',
    'angularRipple',
    'animatedLabel',
    'ngFlash',
    'ngStorage',
    'angular-desk-menu',
    'ui.ace',
    'ui.bootstrap'
]);
angular
    .module('tutoryourself')
    .directive("mnScroll", ['$window',function ($window) {
      return function(scope, element, attrs) {

        angular.element($window).bind("scroll", function() {
          console.log(this.pageYOffset);

          scope.$apply();
        });
      };
    }])
    .run(['snSkrollr','$rootScope', '$state', '$stateParams', '$sessionStorage', function(snSkrollr, $rootScope, $state, $stateParams, $sessionStorage)
    {


      snSkrollr.init();
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, $window) {
      if (!( typeof fromState.param === 'undefined') && !( typeof toState.param === 'undefined')) {
        $rootScope.direction = (fromState.param.order > toState.param.order) ? 'down' : 'up';
      }
    });

        if($sessionStorage.hasOwnProperty('loggedIn'))
        {
            if ($sessionStorage.loggedIn)
            {
                $rootScope.loggedIn = $sessionStorage.loggedIn;
                $rootScope.currentUser = $sessionStorage.user;

            }
        }
    }])
    .directive('keypress', function($window, $state) {
        return {
          restrict: 'A',
          link: function(scope, el, attr) {
            $window.addEventListener('keydown', function(event) {
              if (event.which === 40 && !(typeof $state.current.param.next === 'undefined')) {
                $state.go($state.current.param.next);
              }
              if (event.which === 38 && !(typeof $state.current.param.prev === 'undefined')) {
                $state.go($state.current.param.prev);
              }
            });
          }
        }
      });

