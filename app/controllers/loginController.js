'use strict';

app.controller('loginController', ['$scope', '$rootScope', '$state', 'loginService', 
    function ($scope, $rootScope, $state, loginService) {
        console.log("loginController::---------");
        
        $rootScope.title = "Login Page";

        $scope.formSubmit = function() {
            if(loginService.login($scope.username, $scope.password)) {
                $scope.error = '';
                $scope.username = '';
                $scope.password = '';
                $state.transitionTo('home');
            } else {
                $scope.error = "Incorrect username/password !";
            }   
        };

        $scope.getMembers = function () {
            loginService.getMembers()
            .then(function (response) {
                $scope.members = response.data;
            }, function (error) {
                $scope.status = 'Unable to load member data: ' + error.message;
            });
        };

    }
]);