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