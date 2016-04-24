'use strict';

angular.module('tutoryourself').controller('HomeCtrl', ['$scope' ,
  function($scope) {
    $scope.url = "qxpntiE6k8E";
    $scope.class = 'one';
  }
]);

angular.module('tutoryourself').controller('registerCtrl', ['$scope' , '$http',  function($scope, $http) {
	$scope.class = 'two'
  $scope.send = function () {
		// body...
	console.log('sending');
	
	$http.post('/signup',{username: $scope.username, password: $scope.password, firstname: $scope.firstname, lastname: $scope.lastname})
	.then(function(response){
		console.log(response.success);
		console.log(response.msg);
	});

}
}]);