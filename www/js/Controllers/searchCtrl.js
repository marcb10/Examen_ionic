angular.module('starter').controller('searchCtrl', function($scope,$state,$ionicFilterBar, $stateParams,$location, $timeout, ionicMaterialMotion, ionicMaterialInk, $http) {
    var filterBarInstance;

    function getItems () {
        var items = [];
        $http.get(base_url + '/subject').success(function (data) {
        for (var x = 0; x < data.length; x++) {
            items.push({text:data[x].name,id: data[x]._id});
        }
        $scope.items = items;
            console.log($scope.items);
    })
    }
    $scope.onselect= function (subject, id) {
        $http.get(base_url + '/subject/' +id)
            .success(function (data) {
                sessionStorage["subjectSearch"]=JSON.stringify(data);
                $state.go('app.information');

            })
            .error(function (err) {
            });
    };

    getItems();
    $scope.showFilterBar = function () {
        var filterBarInstance = $ionicFilterBar.show({
            cancelText: "<i class='ion-ios-close-outline'></i>",
            items: $scope.items,
            update: function (filteredItems, filterText) {
                $scope.items = filteredItems;
            }
        });
    };
    $scope.refreshItems = function () {
        if (filterBarInstance) {
            filterBarInstance();
            filterBarInstance = null;
        }
    };
    $timeout(function () {
        getItems();
        $scope.$broadcast('scroll.refreshComplete');
    }, 1000);
});
