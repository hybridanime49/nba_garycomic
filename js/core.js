app.controller('show_players', ['$scope', '$http', function($scope,$http){
	
	load_pictures();
	// $interval(function(){
	// 	load_pictures();
	// },300);

	function load_pictures(){
		$http.get('/load').success(function(data){
			$scope.player_profiles=data;
		});
	};

}]);