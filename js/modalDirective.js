app.directive('modal', ['playersFactory', function(playersFactory){
	return {
		template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }} wHATISISISI {{factData}}</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
        restrict: 'E',
        transclude: true,
        replace: true,
        // scope:{
        // 	player : '='
        // },
        // controller: ['$scope',  'playersFactory', function($scope, playersFactory){
        // 	//console.log('Controller scope',  $scope.player);
        	
        // }],
        link: function postLink(scope, element, attrs) {
	        
	        scope.title = attrs.title;

	        scope.factData = playersFactory.realData;

	        console.log('THIS IS SCOPE!!1', scope.factData);

	        scope.$watch(attrs.visible, function(value){
	          if(value == true)
	            $(element).modal('show');
	          else
	            $(element).modal('hide');
	        });

	        $(element).on('shown.bs.modal', function(){
	          scope.$apply(function(){
	            scope.$parent[attrs.visible] = true;
	          });
	        });

	        $(element).on('hidden.bs.modal', function(){
	          scope.$apply(function(){
	            scope.$parent[attrs.visible] = false;
	          });
	        });
      	}
	};
}]);
