   app.factory("getData", ['$http', function ($http) {
       return $http.post("https://api2.tookanapp.com:7777/view_all_fleets_location", {access_token: 'b68975681a746b65dc5aac3616638e0'})
           .success(function (response) {
               return response;
           });
   }]);
