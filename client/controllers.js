angular.module("MEANies.controllers", [])
.controller("WecomeController", ["$scope", "$location", function($scope, $location) {
    //  SEOService.setSEO({
    //      title: "Caterpillars | home",
    //      //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
    //      description: "For fun and profit!",
    //      url: $location.absUrl()
    //  });   
}])
.controller("QuestionsController", ["$scope", "Question", function($scope, Question) {
    $scope.query = function() {
        var answer = prompt($scope.question);
        if (answer === "a") {
            console.log("good job a")
        }
    };
    $scope.question = Question.query();
}])
.controller ("QuestionController", ["$scope", "Question", "$location", "$routeParams", "User", function($scope, Question, $location, $routeParams, User) {
    $scope.question = Question.get({ id:$routeParams.id });
    var question = Question.get({ id:$routeParams.id }, function(question) {
        console.log(question.answer)
    
        $scope.query = function() {
            var answer = prompt("What'll it be pardner?");
            
            if (answer === question.answer) {
                var user = User.get({ id:2 }, function(user) {
                    var updateUser = function() {
                        user.$update(function(success) {
                        });
                    };
                    updateUser();
                });
                console.log("good job!");
                var newId = parseInt($routeParams.id) + 1
                window.location.assign("/questions/" + newId);
            } else {
                console.log("WRONG!!!")
                alert("you have brought shame on your family. try again")
            }
        };
    });
    //$scope.user = User.get({ id:$routeParams.id }, function(user) {});
//get logged in "me" and use their id to update them.
  
}])

