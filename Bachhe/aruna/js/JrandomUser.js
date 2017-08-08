var app = angular.module("rModule",[]);
app.controller("rController",function($scope,$http)
{
		$http.get("https://randomuser.me/api").then(
		function successCallBack(response)
		{
			$scope.address = response.data.results;
		},
		function errorCallBack(response)
		{
			console.log(response);
		}
		)
		
		function showStuff(id, text, btn) {
			if(id=="")
			document.getElementById(id).style.display = 'block';
			// hide the lorem ipsum text
			document.getElementById(text).style.display = 'none';
			// hide the link
			
		}
	
})
/*
{"results":[
{"gender":"male",
"name":{"title":"mr","first":"henry","last":"hansen"},
"location":{"street":"2226 church street","city":"glasgow","state":"somerset","postcode":"U5B 6QH"},
"email":"henry.hansen@example.com",
"login":{"username":"beautifulrabbit191","password":"hurrican","salt":"rUpFQa1E","md5":"46498c0a954549d1e838be039a96d3b6","sha1":"d57a8300896bf8839b65727ba071c470bf6a978e","sha256":"41e401d1e19ba3cb123bc3eae400be92da0ac6a47b65ebaa362d32ce93c8206f"},"dob":"1983-03-22 01:38:16","registered":"2014-01-14 15:44:25","phone":"017683 88487","cell":"0727-245-562","id":{"name":"NINO","value":"ZC 17 39 47 Z"},"picture":{"large":"https://randomuser.me/api/portraits/men/66.jpg","medium":"https://randomuser.me/api/portraits/med/men/66.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/66.jpg"},"nat":"GB"}],"info":{"seed":"9c8289fb992b8229","results":1,"page":1,"version":"1.1"}}
*/