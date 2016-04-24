'use strict';

angular.module('tutoryourself', [
  'ngAnimate',
  'ui.router',
  'ngSanitize',
    'angularYouTube',
    'angular-scroll-animate',
    'sn.skrollr'
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
    .run(['snSkrollr','$rootScope', '$state', '$stateParams' , function(snSkrollr, $rootScope, $state, $stateParams)
    {
      snSkrollr.init();
      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      if (!_.isUndefined(fromState.param) && !_.isUndefined(toState.param)) {
        $rootScope.direction = (fromState.param.order > toState.param.order) ? 'down' : 'up';
      }
    });
    }])
    .directive('keypress', function($document, $state) {
        return {
          restrict: 'A',
          link: function(scope, el, attr) {
            $document.bind('keydown', function(event) {
              if (event.which === 40 && !_.isUndefined($state.current.param.next)) {
                $state.go($state.current.param.next);
              }
              if (event.which === 38 && !_.isUndefined($state.current.param.prev)) {
                $state.go($state.current.param.prev);
              }
            });
          }
        }
      });

