 angular.module('app',['ui.router' ]);
             
          angular.module('app').config(['$stateProvider',function($stateProvider){
                $stateProvider
                .state('one',{
                    url:'/one',
                    templateUrl:'one.html'
                })
                .state('two',{
                    url:'/two',
                    templateUrl:'two.html'
                })
            }]);

angular.module('app').run(["$templateCache",function($templateCache){
                $templateCache.put("one.html","<h1>this is page1</h1>")
                ,$templateCache.put("two.html","<h1>this is pagw2</h2>");
            }]) ;