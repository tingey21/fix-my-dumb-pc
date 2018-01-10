var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, ) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/Landing.html',
        controller: 'mainController'
    })
    
    .when('/about', {
        templateUrl: 'pages/About.html',
        controller: 'mainController'
    })
    
    .when('/contact-us', {
        templateUrl: 'pages/ContactUS.html',
        controller: 'mainController'
    })
    .when("/repair", {
        templateUrl: 'pages/repair.html',
        controller: 'mainController'
    })
    
});




myApp.controller( "mainController", ["$scope", function($scope){
    console.log($scope)
    $scope.user = {
        name: "", 
        last: "Tingey"
    }

    $scope.go = function(){
        $scope.user = {
            name: "It",
            last: "worked"
        }
    }


}])