

(function () {
"use strict";

angular.module("MenuApp", ["ui.router"])
.controller('MenuController', MenuController);

MenuController.$inject = ['menuCategories'];
function MenuController(menuCategories) {
  var $ctrl = this;
  $ctrl.menuCategories = menuCategories;
}


})();
