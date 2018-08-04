var app = angular.module('myApp',[]);

app.controller('HomeController', function($scope, $http) {

$scope.data = {};
$scope.errorMessage = "";
$scope.message = "";
	$scope.sendMail = function(){
		 $http({
        method : "POST",
        url : "https://8l47mk9ct3.execute-api.us-east-1.amazonaws.com/prod/mail",
        data: $scope.data
    }).then(function mySuccess(response) {
    	$scope.data = {};
    	$scope.message = "Message sent. Thank you!"
    }, function myError(response) {
    	$scope.errorMessage = "Message sending failed. Please send the message through my mail id."
    });
	}

});
