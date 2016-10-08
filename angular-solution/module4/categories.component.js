(function () {
"use strict";

angular.module('MenuApp')
.component('menuCategory', {
  templateUrl: 'public/menu.html',
  bindings: {
    category: '<'
  }
});



})();
