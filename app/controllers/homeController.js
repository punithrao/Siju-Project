  
  app.controller('homeController', function($scope, $rootScope, $stateParams, $state, loginService) {
    $rootScope.title = "Home Page";
    if(!loginService.isAuthenticated()) {
        $state.transitionTo('login');
    }
  });