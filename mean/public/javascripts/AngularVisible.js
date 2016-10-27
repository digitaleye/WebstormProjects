/**
 * Created by fjatori on 9/4/2016.
 */

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
    $scope.showHTML=false;
    $scope.showJAVA=false;
    $scope.showCSS=false;

    $scope.myFuncHTML=function() {
        $scope.showHTML = !$scope.showHTML;

        $scope.showJAVA = false;
        $scope.showCSS = false;
    }
    $scope.myFuncJAVA=function() {
        $scope.showJAVA = !$scope.showJAVA;

        $scope.showHTML = false;
        $scope.showCSS = false;
    }
    $scope.myFuncCSS=function() {
        $scope.showCSS = !$scope.showCSS;

        $scope.showJAVA = false;
        $scope.showHTML = false;
    }


});
