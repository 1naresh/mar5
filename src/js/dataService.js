angular.module('app').factory('dataService',dataService)
function dataService($q,$http){
    var user={}
    var addDetails=function(User){
        user.name=User.name
        user.email=User.email
        user.phone=User.phone
        user.city=User.city
        console.log(user)
        var defered=$q.defer()
        $http({
            method:'post',
            url:'http://localhost:100/data/save',
            data:angular.toJson(user)
        })
    }
    var getData=function(){
        var defered=$q.defer()
        $http({
            method:'get',
            url:'http://localhost:100/data/getByPhone/'+user.phone
        }).then(function(positiveRes){
            defered.resolve(positiveRes)
        },function(negativeRes){
            defered.reject(negativeRes)
        })
        return defered.promise;
    }
    return{
        addDetails:addDetails,
        getData:getData,
        user:user
    }
}
dataService.$inject=['$q','$http']