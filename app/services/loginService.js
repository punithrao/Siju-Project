
'use strict';
app.factory('loginService', ['$http', 
  function($http) {
    console.log("loginService::----SIJU TESTING-----");
        
      var admin = 'admin';
      // var pass = 'pass';
      var isAuthenticated = false;
      
      var urlBase = '/php/member/memberAPI.php';
      var dataFactory = {};
      dataFactory.login = function(username, password){
        console.log("loginService::login()------");
          isAuthenticated = username === admin && password === pass;
          return isAuthenticated;
      };

      dataFactory.isAuthenticated = function(username, password){
          return isAuthenticated;
      };

      dataFactory.getMembers = function () {
          return $http.get(urlBase+ '/?functionName=GET_MEMBERS');
      };
      return dataFactory;
  }
]);

  // app.factory('loginService', function() {
  //   var admin = 'admin';
  //   var pass = 'pass';
  //   var isAuthenticated = false;
    
  //   return {
  //     login : function(username, password) {
  //       isAuthenticated = username === admin && password === pass;
  //       return isAuthenticated;
  //     },
  //     isAuthenticated : function() {
  //       return isAuthenticated;
  //     }
  //   };
  // });

  //------