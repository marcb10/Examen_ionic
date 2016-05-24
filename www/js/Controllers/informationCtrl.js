/**
 * Created by Admin on 24/05/2016.
 */
angular.module('starter').controller('informationCtrl', function ($scope,$http,$state, $ionicFilterBar,$ionicModal, $timeout) {
    $scope.tele={};
    $scope.subject={};
    function getSubject() {
        if(sessionStorage["subjectSearch"]!=null) {
            var a = JSON.parse(sessionStorage["subjectSearch"]);
            $http.get(base_url + '/subject/'+ a._id)
                .success(function (data) {
                    console.log(data);
                    $scope.subject = data;
                    console.log($scope.subject);
                })
                .error(function (err) {
                    $ionicPopup.alert({
                        title: 'Error ',
                        content: "Error searching subject"
                    });
                });
        }
    };
    getSubject();
    $scope.tlf = function(tle){
        console.log(tle.phones);
        $scope.tele = tle.phones;
    }
});