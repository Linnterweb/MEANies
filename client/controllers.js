angular.module("MEANies.controllers", [])
    .controller("WecomeController", ["$scope", "$location", function ($scope, $location) {
        //  SEOService.setSEO({
        //      title: "Caterpillars | home",
        //      //image: "http://" + $location.host() + "/images/tree-31581_960_720.png",
        //      description: "For fun and profit!",
        //      url: $location.absUrl()
        //  });   
    }])
    
    .controller('BoardController', ['$scope', '$location', 'Question', '$routeParams', 'User', 'UserService', function ($scope, $location, Question, $routeParams, User, UserService) {
        // $scope.detailMode = false; // start off NOT showing details anywhere on the page
        $scope.showingDetails = false;
        
        var currentQuestionId = 1;
        var pizza = User.me(function (success) {
            console.log(success.username);
            currentQuestionId = pizza.progress
            console.log(currentQuestionId);
            $scope.username = pizza.username;
            $scope.progress = pizza.progress;
        });

        
        $scope.questions = Question.query();

        $scope.circleClicked = function($event) {
           
            
            if (currentQuestionId === this.question.id) {
                $scope.toggleDetails.call(this);
                var target = $event.currentTarget;

                var position = $(target).position();
                var percentLeft = position.left / $('#counter').width() * 100;
                var percentTop = position.top / $('#counter').height() * 100;
                console.log(position);

                $('.mario')
                .animate({
                    top: percentTop + '%',
                    left: percentLeft + '%'
                });
            } else if (currentQuestionId > this.question.id) {
                alert('You have already answered that question.')
            } else {
                alert('You cannot answer that question yet!');
            }
        }
        
        $scope.toggleDetails = function () {
            console.log('inside toggle details');
            // console.log($scope.questionid);
            if ($scope.showingDetails === true) { // if the clicked product is already showing details
                $scope.showingDetails = false; // make the clicked product not show details
                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
            } else { // the clicked product is not already showing details
                console.log('in else');
                // if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                console.log('setting showingDetails to true');
                $scope.showingDetails = true; // show details for this product
                console.log($scope.showingDetails);
                $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                // }
            }
            console.log(this.question.id)
            var quest = (this.question.id).toString();
            $scope.question = Question.get({ id: quest });
            var question = Question.get({ id: quest }, function (question) {
                console.log(question.answer);
                console.log($location.search());


                $scope.query = function () {
                    var answer = prompt("What'll it be pardner?");

                    if (answer.toLowerCase() === (question.answer).toLowerCase()) {

                    var user = User.me(function(user) {
                    // $scope.user = User.me();

                    var updateUser = function() {
                        user.progress = 1;//added
                        user.bossProgress = 0;//adding boss/board progress fn
                        user.$update(function(success) {

                                });
                            };
                            updateUser();

                        });
                        alert("good job!");
                        // var newId = parseInt($routeParams.id) + 1
                        // window.location.assign("/questions/" + newId);
                        // toggleDetails();
                        window.location.assign("/board")
                        currentQuestionId++;
                    } else {
                        console.log("WRONG!!!")
                        alert("You have brought shame on your family. try again")
                    }
                };
            });
        }
    
    }])


    .controller("QuestionsController", ["$scope", "Question", function ($scope, Question) {
        $scope.question = Question.query();
    }])

    .controller("QuestionController", ["$scope", "Question", "$location", "$routeParams", "User", "UserService", function ($scope, Question, $location, $routeParams, User, UserService) {
        $scope.question = Question.get({ id: $routeParams.id });
        var question = Question.get({ id: $routeParams.id }, function (question) {
            console.log(question.answer);

            $scope.query = function () {
                var answer = prompt("What'll it be pardner?");

                if (answer === question.answer) {
                    var user = User.get({ id: 2 }, function (user) {
                        var updateUser = function () {
                            user.$update(function (success) {
                                console.log(success)
                            });
                        };
                        updateUser();
                        console.log(user.progress)
                    });
                    console.log("good job!");
                    var newId = parseInt($routeParams.id) + 1
                    window.location.assign("/questions/" + newId);
                } else {
                    console.log("WRONG!!!")
                    alert("You have brought shame on your family. try again")
                };
            };
        });
        //$scope.user = User.get({ id:$routeParams.id }, function(user) {});
        //get logged in "me" and use their id to update them.
    }])

    .controller ("LoginController", ["$scope", "Question", "$location", "$routeParams", "User", "UserService", function($scope, Question, $location, $routeParams, User, UserService) {
        UserService.me().then(function(me) {
                redirect();
            });
            function redirect() {
                var dest = $location.search().p;
                if (!dest) {
                    dest = '/';
                }
                $location.path(dest).search('p', null).replace();
                //go to page, clear out search parameter, and REPLACE history with current page. Eliminates 'back' browser loops
            }

            $scope.login = function() {
                UserService.login($scope.email, $scope.password)
                .then(function() {
                    $location.path("/board");
                }, function(err) {
                    console.log(err);
                });
            }

            $scope.logout = function() {
                UserService.logout()
                .then(function() {
                    redirect();
                }, function(err) {
                    console.log(err);
                });
            }
    }])
   
    .controller ("UserCreateController", ["$scope", "User", "UserService", function($scope, User, UserService) {
        $scope.createUser = function() {
            var newUser = new User(
                {
                    firstname: $scope.newFirstName, 
                    lastname: $scope.newLastName, 
                    email: $scope.newEmail, 
                    password: $scope.newPass,
                    username: $scope.newUsername
                    });
                newUser.$save(function(success) {
                        window.location.assign("/");
                });
            };
        }])
    .controller ("BossController", ["$scope", "BossQuestion", function($scope, BossQuestion) {
        $scope.showingDetails = false;

        var mongoQ = [];
        var expressQ = [];
        var angularQ = [];
        var nodeQ = [];

       
                        
        var bossQuestions = BossQuestion.query(function() {
             for (var i = 0; i < bossQuestions.length; i++) {
                                var id = 0;
                                if (bossQuestions[i].category === "Mongo") {
                                    //console.log(bossQuestions[i].question)
                                    
                                    (mongoQ).push(bossQuestions[i]);
                                    $scope.wholequestion = mongoQ[0]
                                    $scope.mongo = mongoQ;       
                                    console.log($scope.wholequestion.answer)
                                    //$scope.question = mongoQ[0].question;
                                   // $scope.wholequestion = mongoQ[id];
                                    $scope.scroll = function() {
                                        id = id + 1;
                                        console.log(id)
                                    // $scope.question = BossQuestion.get({ id: id });  this works too but goes through all q's'
                                  //      $scope.question = mongoQ[id].question;
                                        $scope.wholequestion = mongoQ[id];
                                    }  
                                } else if (bossQuestions[i].category === "Express") {
                                    (expressQ).push(bossQuestions[i]);
                                    $scope.express = expressQ;
                                } else if (bossQuestions[i].category === "Angular") {
                                    (angularQ).push(bossQuestions[i]);
                                    $scope.angular = angularQ;
                                } else if (bossQuestions[i].category === "Node") {
                                    (nodeQ).push(bossQuestions[i]);
                                    $scope.node = nodeQ;
                                }
                            };

                $scope.toggleDetails = function () {
                            console.log('inside toggle details');
                            // console.log($scope.questionid);
                            if ($scope.showingDetails === true) { // if the clicked product is already showing details
                                $scope.showingDetails = false; // make the clicked product not show details
                                $scope.detailMode = false; // indicate that we are NOT showing details somewhere on the page
                            } else { // the clicked product is not already showing details
                                console.log('in else');
                                // if ($scope.detailMode !== true) { // if we are NOT showing details anywhere on the page
                                console.log('setting showingDetails to true');
                                $scope.showingDetails = true; // show details for this product
                                console.log($scope.showingDetails);
                                $scope.detailMode = true; // indicate that we ARE showing details somewhere on the page
                                // }
                            }
                            // console.log(this.question.id)
                            // var quest = (this.question.id).toString();
                            // $scope.question = Question.get({ id: quest });
                            // var question = Question.get({ id: quest }, function (question) {
                            //     console.log(question.answer);
                            //     console.log($location.search());

                               

                                $scope.query = function () {
                                    var answer = prompt("What'll it be pardner?");

                                    if (answer.toLowerCase() === (question.answer).toLowerCase()) {

                                    var user = User.me(function(user) {
                                

                                    var updateUser = function() {
                                        user.$update(function(success) {

                                                });
                                            };
                                            updateUser();

                                        });
                                        alert("good job!");
                                        
                                        currentQuestionId++;
                                    } else {
                                        console.log("WRONG!!!")
                                        alert("You have brought shame on your family. try again")
                                    }
                                };
                            // });
                        }

                            
                        });

        
    }])


    //  $scope.detailMode = false; // start off NOT showing details anywhere on the page
    //     $scope.showingDetails = false;
        
    //     $scope.questions = Question.query();

    //     $scope.circleClicked = function($event) {
    //         if (currentQuestionId === this.question.id) {
    //             $scope.toggleDetails.call(this);
               
    //         } else {
    //             alert('You cannot answer that question yet!');
    //         }

    //     }
       
    // }])
    .controller("WinnerController", ["$scope", "UserService", function ($scope, UserService) {
        UserService.me().then(function(me) {
            console.log(me.id);
            $scope.username = me.username;
        });
    }])
