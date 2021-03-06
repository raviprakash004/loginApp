'use strict';
 
angular.module('Authentication')
 
.factory('AuthenticationService',
    ['$http', '$cookieStore','$rootScope', '$timeout',
    function ($http, $cookieStore, $rootScope, $timeout) {
        var service = {};

        service.Login = function (username, password, callback) {

            /* Dummy authentication for testing, uses $timeout to simulate api call
             ----------------------------------------------*/
            $timeout(function(){
                var response = { success: username === 'test' && password === 'test' };
                if(!response.success) {
                    response.message = 'Username or password is incorrect';
                }
                callback(response);
            }, 1000);

        };
      service.SetCredentials = function (username, password) {
            
            $rootScope.globals = { 
                currentUser: {
                    username: username,
                    authdata: password
                }
            };
 
            $http.defaults.headers.common['Authorization'] = 'Basic ' + password; 
            $cookieStore.put('globals', $rootScope.globals);
        };
 
        service.ClearCredentials = function () {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
            $http.defaults.headers.common.Authorization = 'Basic ';
        };
 
        return service;
    }])