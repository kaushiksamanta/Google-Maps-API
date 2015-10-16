var mapRecords;
var app=angular.module("myapp",['ngRoute']);
app.config(['$httpProvider', function ($httpProvider) {
    'use strict';
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    $httpProvider.defaults.transformRequest = function (data) {
        if (data === undefined) {
            return data;
        }
        return $.param(data);
    };
}]);
