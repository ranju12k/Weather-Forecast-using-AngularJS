app.factory('WeatherService', function($http) {
    var apiKey = 'ea4acb1abac14fd0b3e71437241406';
    var baseUrl = 'https://api.weatherapi.com/v1/current.json';

    return {
        getWeather: function(city) {
            return $http.get(baseUrl, {
                params: {
                    key: apiKey,
                    q: city
                }
            });
        }
    };
});
