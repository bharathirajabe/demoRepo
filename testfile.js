var app = angular.module('plunker', ['ui.router']);

app.controller('MainCtrl', function($scope, $state) {
  
  $scope.callfn = function(){
  	$state.go('about');
  }
})
.config(function ($stateProvider, $urlRouterProvider) {
     $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        
        .state('down', {
            url: '/home',
            views:{
              "viewOne":{
                template: '<div>hai</div>'
              },
              "viewTwo":{
                template: '<div>how</div>'
              }
            }
            
        })
        
        .state('contact', {
            url: '/about',
            views:{
              "viewOne":{
                template: '<div>2</div>'
              },
              "viewTwo":{
                template: '<div>1</div>'
              }
            }
            
        })
       
  });