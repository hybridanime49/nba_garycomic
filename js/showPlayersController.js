app.controller('showPlayersController', ['$scope', '$http', function($scope,$http){
	
	//load_pictures();
	// $interval(function(){
	// 	load_pictures();
	// },300);
	$scope.loadImages = function(){
		$http.get('/load').success(function(data){
			$scope.player_profiles=data;
			console.log($scope.player_profiles);
		});
	}
	$scope.loadImages();

	$scope.showInfo = function(playername){
		alert("LET MEEEEEE" + playername);
		return $scope.consoleStuff()
	}

	$scope.consoleStuff = function(){
		console.log( 'should show sutffff');
	}

	

}]);