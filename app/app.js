
  
      var app = angular.module('myApp', ['ui.router']);

      app.run(function($rootScope, $location, $state, loginService) {
        console.log("AppJS::run()----loginmoduleupdates for testing git-----");
        $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
          console.log(toState);
          $rootScope.isUserAuthenticated = (toState.name && toState.name !== 'login');
          console.log(' $rootScope.isUserAuthenticated ----> ' +  $rootScope.isUserAuthenticated );
        });
          if(!loginService.isAuthenticated()) {
            $state.transitionTo('login');
          }
      });
  
      app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        console.log("AppJS::config()---------");
        
        $urlRouterProvider.otherwise('/login');
        $stateProvider
          .state('login', {
            url : '/login',
            templateUrl : 'app/views/templates/login.html',
            controller : 'loginController'
          })
          .state('home', {
            url : '/home',
            templateUrl : 'app/views/templates/home.html',
            controller : 'homeController'
          })
          .state('customer', {
            url : '/customer',
            templateUrl : 'app/views/templates/customer.html',
            controller : 'homeController'
          })
          .state('department', {
            url : '/department',
            templateUrl : 'app/views/templates/department.html',
            controller : 'homeController'
          })
          .state('employee', {
            url : '/employee',
            templateUrl : 'app/views/templates/employee.html',
            controller : 'homeController'
          });
      }]);
  