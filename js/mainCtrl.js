angular.module('timeApp')
    .controller('mainCtrl', function ($scope) {


        $scope.name = "Cory"

        $scope.alerter = function (text) {
            alert(text);
        }

        $scope.logger = function (text) {
            console.log(text);
        }


    })