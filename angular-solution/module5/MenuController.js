(function() {
'use strict';

angular.module('MenuApp')

.controller('MenuController',function ($scope,menuCategories) {
  $scope.menu = menuCategories;
});
})();