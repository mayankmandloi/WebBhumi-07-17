var app = angular.module("BookModule",[]);
app.controller("showBooksController",function ($scope,$http) {
	$scope.loadBooks = function()
	{
	  $http.get("http://it-ebooks-api.info/v1/search/"+$scope.query).then(
		function sucessCallbacl(response) {
		  $scope.Books=response.data.Books;
		},function errorCallback(response) {
		  console.log(response);
		}
	  )
	   
	}
})
//https://maps.googleapis.com/maps/api/geocode/json?address=