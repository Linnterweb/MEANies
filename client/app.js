angular.module("MEANies", ["ngRoute", "ngResource", "MEANies.controllers"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .when("/board", {
        templateUrl: "views/board.html",
        controller: "BoardController"
    })
    // .when("/bugs", {
    //     templateUrl: "views/bugs.html",
    //     controller: "BugsController"
    // })
    .otherwise({
        redirectTo: "/"
    });
}]);