
(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
    var ToBuyList = this;

  ToBuyList.tobuyitems = ShoppingListCheckOffService.getItems();

  ToBuyList.Buy = function (itemIndex) {
    ShoppingListCheckOffService.Buy(itemIndex);
  };
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var AlreadyBoughtList = this;

  AlreadyBoughtList.boughtitems = ShoppingListCheckOffService.getboughtItems();

 }


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems = [{quantity:1,name:"cookies"},{quantity:2,name:"cookies"},{quantity:3,name:"cookies"},{quantity:4,name:"cookies"}];
  var boughtitems = [];

  service.Buy= function (itemIdex) {
    boughtitems.push(tobuyitems[itemIdex]);  
    tobuyitems.splice(itemIdex, 1);
      
  };

  service.getItems = function () {
    return tobuyitems;
  };
    
  service.getboughtItems = function () {
    return boughtitems;
  };
}

})();
