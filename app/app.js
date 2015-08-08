'use strict';

angular.module('store', [
	'ngRoute',
	'store.controllers',
	'store.services'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/product-list.html',
		controller: 'HomePageController'
	});
}]);
