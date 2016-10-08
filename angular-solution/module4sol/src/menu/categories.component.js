(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'src/menu/templates/categories.tpl.html',
            bindings: {
                items: '<'
            }
        });

})();
