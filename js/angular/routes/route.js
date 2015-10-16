app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/drivers', {
        templateUrl: 'table.html',
        controller: 'driverData'
    })
    .when('/map', {
        templateUrl: 'map.html',
        controller: 'mapData'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);
