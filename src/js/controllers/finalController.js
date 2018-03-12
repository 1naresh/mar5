angular.module('app').controller('finalController',finalController)
function finalController($scope,$state,dataService){
    dataService.getData().then(function(res){
        $scope.result=res.data
    })
    $scope.toHome=function(){
        dataService.user={}
        $state.go('home')
    }
}
finalController.$inject=['$scope','$state','dataService']