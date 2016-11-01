angular.module("MEANies.controllers", [])
.controller("WecomeController", ["$scope", "$location", function($scope, $location) {
    //  SEOService.setSEO({
    //      title: "Caterpillars | home",
    //      //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
    //      description: "For fun and profit!",
    //      url: $location.absUrl()
    //  });   
}])

// .controller("BugsController", ["$scope", function($scope) {
//     $scope.regions = ["La Selva", "Louisiana", "Andes"];//to make this be a hyperlink it needs a database?
// }])
.controller('BoardController', ['$scope', '$location', function($scope, $location) {

    $scope.detailMode = false; // start off NOT showing details anywhere on the page

    // SEOService.setSEO({
    //     title: 'Innovation Depot Game | MEANies',
    //     description: 'Graduate to Win',
    //     image: 'http://' + $location.host() + '/images/blog.png',
    //     url: $location.absUrl()
    // });

        $scope.toggleDetails = function() {
            if (this.showingDetails === true) { // if the clicked product is already showing details
                this.showingDetails = false; // make the clicked product not show details
                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
            } else { // the clicked product is not already showing details
                if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                    this.showingDetails = true; // show details for this product
                    $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                }
            }
    };
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


