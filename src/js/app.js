angular.module('app',['ui.router']).config(config)
function config($stateProvider,$urlRouterProvider){
    function State(name,ctrl,Params){
        var obj={
            name:name,
            url:'/'+name,
            views:{
                'main':{
                    templateUrl:'http://localhost:100/templates/' +name +'.html',
                    controller: ctrl
                }
            }
        }
        if(Params){
            obj.url= '/'+name + '/:' +Params
        }
        return obj 
    }
    $stateProvider.state(State('home','homeController'))
                  .state(State('products','productsController'))
                  .state(State('shapes','shapeController'))
                  .state(State('LShape','kitchenController'))
                  .state(State('UShape','kitchenController'))
                  .state(State('parallelShape','kitchenController'))
                  .state(State('straightShape','kitchenController'))
                  .state(State('register','registerController'))
                  .state(State('final','finalController'))      
                  .state(State('wordrobes','wordrobesController'))
                  .state({
                      name:'singleBed',
                      url:'/singleBed',
                      views:{
                          'main':{
                              templateUrl:'http://localhost:100/templates/straightShape.html',
                              controller:'bedController'
                          }
                      }
                  }) 
                  .state({
                      name:'doubleBed',
                      url:'/doubleBed',
                      views:{
                          'main':{
                              templateUrl:'http://localhost:100/templates/LShape.html',
                              controller:'bedController'
                          }
                      }
                  }) 
                  .state({
                      name:'tripleBed',
                      url:'/tripleBed',
                      views:{
                          'main':{
                              templateUrl:'http://localhost:100/templates/UShape.html',
                              controller:'bedController'
                          }
                      }
                  })
                  .state({
                      name:'fulllInteriors',
                      url:'/fulllInteriors',
                      views:{
                          'main':{
                              templateUrl:'http://localhost:100/templates/fulllInteriors.html',
                              controller:'fulllInteriorsController'
                          }
                      }
                  })      
    $urlRouterProvider.otherwise('/home')
}
config.$inject=['$stateProvider','$urlRouterProvider']
