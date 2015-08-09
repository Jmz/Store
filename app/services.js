'use strict';

angular.module('store.services', [])

	.factory('auth', ['$q', function($q) {
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'blGyfNGUQZkMqktoOGOPXypYnV0Hu8f6cuDjRAfx'});
		moltin.Authenticate(function() {
			deferred.resolve(moltin);
		});
		return deferred.promise;
	}])

	.factory('categoryService', ['$q', 'auth', function($q, auth) {
		var categoryServiceObject = {};

		categoryServiceObject.getTree = function() {
	        var deferred = $q.defer();
	        auth.then(function(moltin) {
	          moltin.Category.Tree(null, function(categories) {
	            deferred.resolve(categories);
	          });
	        });
	        return deferred.promise;
		}

		return categoryServiceObject;
	}])

;