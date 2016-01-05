app.config(['$routeProvider',function($routeProvider){

	$routeProvider
		//route for home page
		.when('/',{
			templateUrl: 'view/main.html',
			controller: 'showPlayersController'
		})

		//route for adding player
		.when('/addplayer',{
			templateUrl: 'view/addplayer.html',
			controller: 'addPlayerController'
		})
		//otherwise show main
		.otherwise({
			redirectTo: '/'
		});


}]);