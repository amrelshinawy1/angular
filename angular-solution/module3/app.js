
(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', ShoppingListDirective);

function ShoppingListDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      items: '<',
      onRemove: '&'
    }

  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.found = [];

  narrow.getMatchedMenuItems =function () {
    var promise =MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
    //var promise =MenuSearchService.getMenuItems();
    promise.then(function (response) {
      narrow.found = response;
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };
  narrow.removeItem = function (itemIndex) {
   narrow.found.splice(itemIndex, 1);
 };
}


MenuSearchService.$inject = ['$http']
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (response) {
      var foundItems=[];
      if(searchTerm!=""){
        for(var i=0; i<response.data.menu_items.length; i++ ){
          if(response.data.menu_items[i].description.indexOf(searchTerm) !== -1){
            foundItems.push(response.data.menu_items[i]);
          }
        }
      }
      return foundItems;
    });
  };

}

})();
