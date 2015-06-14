weatherApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'weatherCtrl',
      templateUrl: 'app/views/home.html'
    })
    .when('/forecast',{
      controller: 'forecastCtrl',
      templateUrl: 'app/views/forecast.html'
    })
    .otherwise({ redirectTo: '/' });
});