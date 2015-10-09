var app = angular.module('plunker', ['ui.router']);

app.controller('MainCtrl', function($scope, $state) {
  
  $scope.callfn = function(){
  	$state.go('about');
  }
})
.config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
      I edited locally
        

       
  });
  
  ///
  
  $scope.addInputValidation = function(e){
				var validRegex = /^[A-Za-z0-9]+$/;
				var valueInAdd = $(e.currentTarget).val();
				var enteredChar = String.fromCharCode(e.which);
				if((valueInAdd.length > 3 || e.which === 13 || e.which === 9) && !(e.which === 8)){
					e.preventDefault();
					return;
				} else if(!validRegex.test(enteredChar) && !(e.which === 8)){
					e.preventDefault();
					return;
				}
			};

bitbucket.org
https://www.atlassian.com/git/tutorials/ 
https://www.codeschool.com/courses/try-git
