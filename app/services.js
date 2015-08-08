'use strict';

angular.module('store.services', [])

	.factory('auth', function($q) {
		var deferred = $q.defer();
		var moltin = new Moltin({publicId: 'blGyfNGUQZkMqktoOGOPXypYnV0Hu8f6cuDjRAfx'});
		moltin.Authenticate(function() {
			deferred.resolve(moltin);
		});
		return deferred.promise;
	});