angular.module('app').controller('fulllInteriorsController',fulllInteriorsController)
function fulllInteriorsController($scope,$state,dataService){
    $scope.toRegister=function(){
        if($scope.isEntertainment){
            dataService.user.products.push('Entertainment Unit')
        }
        if($scope.isStudy){
            dataService.user.products.push('Study Unit')
        }
        if($scope.isCrockery){
            dataService.user.products.push('Crockery Unit')
        }
        console.log(dataService.user.products)
        $state.go('register')
    }
}
fulllInteriorsController.$inject=['$scope','$state','dataService']