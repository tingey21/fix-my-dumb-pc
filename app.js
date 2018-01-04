var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, ) {
    
    $routeProvider
    .when('/', {
        templateUrl: 'pages/Landing.html',
        controller: 'mainController'
    })
    
    .when('/about', {
        templateUrl: 'pages/About.html',
        controller: 'secondController'
    })
    
    .when('/contact-us', {
        templateUrl: 'pages/ContactUS.html',
        controller: 'secondController'
    })
    
});




myApp.controller( "mainController", ["$scope", function($scope){

}])