app.controller('showPlayersController', ['$scope','playersFactory', function($scope, playersFactory){
	
	//load_pictures();
	// $interval(function(){
	// 	load_pictures();
	// },300);


	//get list of players from Factory
	playersFactory.getPlayer().then(function(result){
		  $scope.player_profiles =  result;
		  console.log('$SCOEEEE', $scope.player_profiles);
	});

	$scope.yoyo = playersFactory.returnSomething();
	console.log('!!!!!!', $scope.yoyo);

	$scope.showModal = false;

	$scope.toggleModal = function(){
		$scope.showModal = !$scope.showModal;
	};
	

}]);