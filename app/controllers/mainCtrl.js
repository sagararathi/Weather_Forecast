weatherApp.controller('weatherCtrl', ['$scope', '$location', 'weatherService', 'appSetting', function ($scope, $location,weatherService , appSetting) {
  $scope.city = weatherService.city;
  $scope.days = weatherService.days;
  $scope.units = weatherService.units;

  $scope.appSetting = appSetting;

  $scope.$watch('city', function(){
    weatherService.city = $scope.city;
  });

  $scope.$watch('days', function(){
    weatherService.days = $scope.days;
  });

  $scope.$watch('units', function(){
    weatherService.units = $scope.units;
  });

  $scope.submit = function(){
    $location.path("/forecast");
  };
}]);