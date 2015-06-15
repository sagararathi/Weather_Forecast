weatherApp.controller('forecastCtrl',['$scope', '$resource', '$log','weatherService','appSetting', function($scope, $resource, $log,weatherService, appSetting){

  $scope.city = weatherService.city;
  $scope.days = weatherService.days;
  $scope.units = weatherService.units;

  $scope.appSetting = appSetting;

  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", { callback: "JSON_CALLBACK"}, {get: {method: "JSONP"}});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, units: $scope.units, cnt: $scope.days});

  $scope.convertToDate = function(dateTime){
    return new Date(dateTime * 1000);
  }

  // $log.log($scope.weatherResult);
}]);