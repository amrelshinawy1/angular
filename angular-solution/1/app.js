(function () {

    var app = angular.module("myApp", ["ui.router"]);
    app.config(function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                url: "",
                controller: 'catcontroler',
                templateUrl: 'public/home/home.html',
                resolve: {
                    menuCategories: ['sharedProperties', function (sharedProperties) {
                        return sharedProperties.getCategory();
        }]
                }
            })
            .state('menuitems', {
                url: '/menu/{category}',
                controller: 'MainController',
                templateUrl: 'public/home/item.html',
                resolve: {
                    menuItems: ['$stateParams', 'sharedProperties', function ($stateParams, sharedProperties) {
                        return sharedProperties.getItems($stateParams.category);
        }]
                }
            });
    })
    app.controller("MainController", function ($scope, menuItems) {
        $scope.items = menuItems;
    });
    app.controller("catcontroler", function ($scope, menuCategories) {
        $scope.emp = menuCategories;
    });
    app.service('sharedProperties', function ($http) {

        var getCategory = function () {
            return $http.get("http://davids-restaurant.herokuapp.com/categories.json").then(function (response) {
                return response.data;

            });
        };

        var getItems = function (shortName) {
            return $http.get("http://davids-restaurant.herokuapp.com/menu_items.json?category=" + shortName).then(function (response) {
                return response.data;
            });
        };

        return {
            getItems: getItems,
            getCategory: getCategory
        };
    });

})();
