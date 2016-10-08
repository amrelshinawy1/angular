(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/menu/templates/home.tpl.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/menu/templates/categories.tpl.html',
                controller: 'CategoriesController as categories',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items/:name',
                templateUrl: 'src/menu/templates/items.tpl.html',
                controller: 'ItemsController as items',
                params: {
                    name: null
                },
                resolve: {
                    items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {

                        var shortName = $stateParams.name;

                        return MenuDataService.getItemsForCategory(shortName);
                    }]
                }
            });

        $urlRouterProvider.otherwise('/');
    }
})();

