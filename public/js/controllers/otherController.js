'use strict';

angular.module('tutoryourself').controller('modalInstanceCtrl', ['$scope','$modalInstance','level', function($scope, $modalInstance, level){
	$scope.showLevel = level;
	$scope.ok = function() 
	{
		$modalInstance.close();
	}
	$scope.close = function() {
		$modalInstance.dismiss('cancel')
	}
}]);