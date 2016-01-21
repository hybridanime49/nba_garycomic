app.factory('playersFactory', ['$http', function($http){

	return {
		getPlayer: function(){
			return $http({ 
				url: '/load',
				method : 'GET'
			});
		}
	}

}]);