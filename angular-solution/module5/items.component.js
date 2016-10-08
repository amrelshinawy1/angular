(function () {
"use strict";

angular.module('MenuApp')
.component('items', {
  templateUrl: 'public/item.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
