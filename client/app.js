angular.module("MEANies", ["ngRoute", "ngResource", "MEANies.controllers", "MEANies.factories"])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider

    .when("/", {
        templateUrl: "views/welcome.html",
        controller: "WecomeController"
    })
    .when("/questions", {
        templateUrl: "views/questions.html",
        controller: "QuestionsController"
    })
    .when("/questions/:id", {
        templateUrl: "views/question.html",
        controller: "QuestionController"
    })
    .when("/board", {
        templateUrl: "views/board.html",
        controller: "BoardController"
    })
    .otherwise({
        redirectTo: "/"
    });
}]);