(function() {
'use strict';

angular.module('MenuApp')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      url:'/',
      templateUrl: 'index.html'
    })
    .state('public.home', {
      url: '/home',
      templateUrl: 'home/home.html'
    })
    .state('publicmenu', {
      url: '/menu',
      templateUrl: 'public/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('menuitems', {
      url: '/menu/{category}',
      templateUrl: 'public/item.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.category);
        }]
      }
    });
}
})();
