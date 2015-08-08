'use strict';

angular.module('store', [
	'ngRoute',
	'store.controllers',
	'store.services'
])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'views/product-list.html',
		controller: 'HomePageController',
    resolve: {
      products: function($q, auth) {
        var deferred = $q.defer();
        auth.then(function(moltin) {
          moltin.Product.List(null, function(products) {
            deferred.resolve(products);
          });
        });
        return deferred.promise;
      }
    }
	});
}]);
