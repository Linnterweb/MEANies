angular.module("MEANies", ["ngRoute", "ngResource", "MEANies.controllers", "MEANies.factories", "MEANies.services"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .when("/mario", {
        templateUrl: "views/mario.html"
    })
    .when("/board", {
        templateUrl: "views/board.html",
        controller: "BoardController"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    })
    .when("/users/create", {
        templateUrl: "views/create_user.html",
        controller: "UserCreateController"
    })
    .when("/mongo_boss", {
        templateUrl: "views/mongo_boss.html",
        controller: "MongoBossController"
    })
    .when("/questions", {
        templateUrl: "views/questions.html",
        controller: "QuestionsController"
    })
    .when("/questions/:id", {
        templateUrl: "views/question.html",
        controller: "QuestionController"
    })
    .otherwise({
        redirectTo: "/"
    })
}]);