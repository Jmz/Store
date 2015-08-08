'use strict';

angular.module('store.controllers', [])

	.controller('HomePageController', ['$scope', 'products', function($scope, products) {
    $scope.products = products;
    console.log(products);
	}]);