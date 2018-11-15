'use strict';

angular.module('UserModule', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'userData/userInfo.html',
    controller: 'UserController'
  });
}]).controller('UserController',function($scope,UserInfoService,$filter) {
    $scope.UserData = [];
    $scope.ID =1;
    $scope.getData = function(){
    UserInfoService.getUserData().then(function (res) {
        $scope.UserData = res.data;

    })
    }
$scope.getData();
    this.getSortData = function (propertyName, propertyFlag) {
        console.log(propertyName)
        $scope['propertyFlag'] = !$scope['propertyFlag'];
        $scope.UserData = $filter('orderBy')($scope.UserData,propertyName, $scope['propertyFlag'] );
        console.log($scope.UserData);
    }



});
                      
