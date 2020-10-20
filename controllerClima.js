
angular.module("clima", [])
.controller("wh", function($scope,$http){


	$scope.paco = [];

	$http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Mexico,mx',
      headers: {
   		'x-api-key': 'aab2fc3a49abf0cacfa4910ae1643cf8',
   		'Content-type': 'application/x-www-form-urlencoded',
   		'Access-Control-Allow-Origin': '*',
   		'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
   		'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With' 		}
   }).then(function (data){
   		console.log(data)
   		
   },function (error){
   		console.log(error)
   });

});