var mapresponse;
var app = angular.module('myapp', []);
app.controller('mapcontroller', function($scope, $http) {
    $http.get("js/cord.js")
    .success(function (response) {$scope.names = response.data.driver_data;
    mapresponse=response.data.driver_data});
});
