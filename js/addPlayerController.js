app.controller('addPlayerController',['$scope', '$http', function( $scope, $http){

	//create object to handle form data
	$scope.newPlayer = {};
	$scope.message = "";

	//calling submit function from addplayer.html
	$scope.submitPlayer = function(){
		//POST with newPlayer object to send
		$http.post('/player', $scope.newPlayer)					
			.success( function(data){	
				$scope.message = data.player;
				//clear form so user can add new player
				$scope.newPlayer = {};
				console.log(data, $scope.message);	
			})
			.error(function(data){
				$scope.message = data.player;
				console.log(data, $scope.message);
			});

	}


}]);