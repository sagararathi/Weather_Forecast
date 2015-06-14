weatherApp.controller('forecastCtrl',['$scope', '$resource', '$log','weatherService', function($scope, $resource, $log,weatherService){

  $scope.city = weatherService.city;
  $scope.days = weatherService.days;

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, units: 'imperial', cnt: $scope.days});

  $scope.convertToDate = function(dateTime){
    return new Date(dateTime * 1000);
  }

  // $log.log($scope.weatherResult);
}]);