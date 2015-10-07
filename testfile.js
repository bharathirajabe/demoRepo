var app = angular.module('plunker', ['ui.router']);

app.controller('MainCtrl', function($scope, $state) {
  
  $scope.callfn = function(){
  	$state.go('about');
  }
})
.config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
      hellow added me 
        

       
  });
