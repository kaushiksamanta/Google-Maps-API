app.controller("driverData", ['$scope', 'getData', function ($scope, getData) {
        getData.success(function (response) {
            $scope.drivers = response.data;
        });
}]);
app.controller("mapData", ['getData', function(getData) {
    getData.success(function(response) {
        mapRecords = response.data;
        initializeMaps();
    });
}]);
