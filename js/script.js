  var app=angular.module("app",['ui.router'])
             app.controller("ctrl",function($scope){
                 $scope.var1='abcd'
             })
             app.config(function($stateProvider,$urlRouterProvider){
                 $stateProvider
                 .state("one",{
                     url:"/one",
                     templateUrl:"page1.html"
                 })
             })