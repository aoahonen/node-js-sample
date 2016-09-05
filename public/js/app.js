angular.module("serverApp", ['ngRoute']).config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "main.html",
      controller: "MainController",
      resolve: {
        data: function (data) {
          return data.get();
        }
      }
    })
    .otherwise({
      redirectTo: "/"
    })
});


angular.module("serverApp").service("data", function ($http) {
  this.get = function () {
    return $http.get("/main").
      then(function (response) {
        return response;
      }, function (response) {
        alert("Error finding data.");
      });
    }
  });


angular.module("serverApp").controller("MainController", function (data, $scope) {
    $scope.data = data.data;
  });