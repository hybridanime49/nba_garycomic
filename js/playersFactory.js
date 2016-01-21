app.factory('playersFactory', ['$http', function($http){

	return {
		getPlayer: function(){
			return $http.get('/load').then(function(result){
					return result.data.player;
				});
		}
	}

}]);