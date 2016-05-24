/**
 * Created by Admin on 24/05/2016.
 */
angular.module('starter').controller('studentCtrl', function($scope,ionicMaterialInk, ionicMaterialMotion, $ionicModal, $ionicPopover, $timeout, $http,$ionicPopup, $state) {
    $scope.subject = {};
    $scope.newStudent={};
    $scope.addStud= function () {
        $http.post(base_url+'/subject/' + $scope.newStudent.subject,{
            name: $scope.newStudent.name,
            address: $scope.newStudent.address,
            place: $scope.newStudent.place,
            tlf: $scope.newStudent.tlf,
        }).success(function (data) {
                $scope.newStudent.name=null;
                $scope.newStudent.address=null;
                $scope.newStudent.place=null;
                $scope.newStudent.tlf=null;
                $scope.newStudent.subject=null;
            })
            .error(function (error, status, headers, config) {
                $ionicPopup.alert({
                    title: 'Error ',
                    content: "Error adding student"
                });
                console.log(error);
            });
    };
});