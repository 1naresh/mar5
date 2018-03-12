angular.module('app').controller('shapeController',shapeController)
function shapeController($scope,$state,dataService){
    $scope.isLShape=true
    $scope.continue=function(toState){
        $state.go(toState)
    }
    $scope.over=function(shape){
        if(shape == 'UShape'){
            $scope.isLShape=false
            $scope.isUShape=true
        }else if(shape == 'parallelShape'){
            $scope.isLShape=false
            $scope.isparallelShape=true
        }
        else if(shape == 'straightShape'){
            $scope.isLShape=false;
            $scope.isstraightShape=true
        }
    }
    $scope.leave=function(shape){
        if(shape == 'UShape'){
            $scope.isLShape=true
            $scope.isUShape=false  
        }else if(shape == 'parallelShape'){
            $scope.isLShape=true
            $scope.isparallelShape=false
        }
        else if(shape == 'straightShape'){
            $scope.isLShape=true;
            $scope.isstraightShape=false
        }
    }
} 
shapeController.$inject=['$scope','$state','dataService']