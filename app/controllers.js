'use strict';

angular.module('store.controllers', [])

	.controller('NavController', ['$scope', 'categoryService', function($scope, categoryService) {
		categoryService.getTree().then(function(categories) {
			$scope.categories = categories;
		});
	}])

	.controller('HomePageController', ['$scope', 'products', function($scope, products) {
    	$scope.products = products;
	}]);