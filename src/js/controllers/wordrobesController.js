angular.module('app').controller('wordrobesController',wordrobesController)
function wordrobesController($scope,$state,dataService){
    $scope.toShape=function(number){
        if(number == '1'){
            // d
            $state.go('singleBed')
        }else if(number == '2'){
            $state.go('doubleBed')
        }
        else if(number == '3'){
            $state.go('tripleBed')
        }
    }
}
wordrobesController.$inject=['$scope','$state','dataService']