'use strict';
angular.module('UserModule').service('UserInfoService',function($http){
    this.getUserData= function(){
        return $http.get('http://jsonplaceholder.typicode.com/posts');
    }
});