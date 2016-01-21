app.controller('showPlayersController', ['$scope','playersFactory', function($scope, playersFactory){
	
	//load_pictures();
	// $interval(function(){
	// 	load_pictures();
	// },300);


	//get list of players from Factory
	playersFactory.getPlayer().then(function(result){
		$scope.player_profiles = result.data.player;
	});


	$scope.showInfo = function(playername){
		alert("LET MEEEEEE" + playername);
		
	};

	$scope.showModal = false;
	$scope.toggleModal = function(){
		$scope.showModal = !$scope.showModal;
	};
	

}]);