weatherApp.controller('weatherCtrl', ['$scope', 'weatherService', function ($scope,weatherService) {
  $scope.city = weatherService.city;
  $scope.days = weatherService.days;

  $scope.$watch('city', function(){
    weatherService.city = $scope.city;
  });

  $scope.$watch('days', function(){
    weatherService.days = $scope.days;
  });
}]);