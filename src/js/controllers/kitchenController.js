angular.module('app').controller('kitchenController',kitchenController)
function kitchenController($scope,$state,dataService,$window){
    // console.log(dataService.user.products.indexOf('wardrobe'))
    console.log()
    $scope.heading='What is the size of your kitchen?'
    $scope.Math = $window.Math;
    var amount=0
    $scope.wallA=0
    $scope.wallB=0
    $scope.wallC=0
    $scope.goNext=true;
    $scope.warning=false;
    function calculate(){
        var wallA=Math.floor($scope.wallA/12)
        var wallB=Math.floor($scope.wallB/12)
        var wallC=Math.floor($scope.wallC/12)
        if(wallA+wallB+wallC <= 5 && wallA+wallB+wallC > 0){
            amount+=(wallA+wallB+wallC)*100
            $scope.goNext=true
        }else if(wallA+wallB+wallC > 5){
            amount+=500+((wallA+wallB+wallC-5)*200)
            $scope.goNext=true
        }
        if($state.current.name == 'LShape' || $state.current.name == 'parallelShape'){
            if(wallA == 0 || wallB ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'UShape'){
            if(wallA == 0 || wallB ==0 ||wallC ==0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }else if($state.current.name == 'straightShape'){
            if(wallA == 0){
                $scope.goNext=false;
                $scope.warning=true;
            }
        }
        dataService.user.amount=amount
    }
    $scope.toRegister=function(){
        calculate()
        if($scope.goNext){
            if(dataService.user.products.indexOf('wardrobe') == 1){
                $state.go('wordrobes')
            }else if(dataService.user.products.indexOf('fulllInteriors') == 1){
                $state.go('fulllInteriors')
            }else{
                $state.go('register')
            }

        }        
    }
} 
 
kitchenController.$inject=['$scope','$state','dataService','$window']