angular.module('app').controller('homeController',homeController)
function homeController($scope,$state,$stateParams){
    $scope.toProducts=function(){
        $state.go('products')
    }
}
homeController.$inject=['$scope','$state','$stateParams']