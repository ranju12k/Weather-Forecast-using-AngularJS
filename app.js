var app = angular.module('weatherApp', []);

app.controller('WeatherController', function($scope, WeatherService) {
    $scope.city = 'London'; // default city

    $scope.getWeather = function() {
        WeatherService.getWeather($scope.city).then(function(response) {
            $scope.weather = response.data;
        }, function(error) {
            console.error('Error fetching weather data:', error);
        });
    };

    // Initial weather data fetch
    $scope.getWeather();
});
