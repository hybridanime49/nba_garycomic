app.factory('playersFactory', ['$http', function($http){

	return {
		realData: '',
		getPlayer: function(){
			return $http({ 
				url: '/load',
				method : 'GET'
			}).then(function(data){		
				return this.realData = data.data.player;
			});
		},
		returnSomething: function(){
			return this.realData = this.getPlayer();
		}
	}

}]);