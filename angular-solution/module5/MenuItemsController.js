(function() {
'use strict';

angular.module('MenuApp')

.controller('MenuController',function ($scope,menuItems) {
  $scope.items = menuItems;
});
})();