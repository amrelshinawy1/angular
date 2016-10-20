(function () {
'use strict';

angular.module('restaurant')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SignUpService'];
function MyInfoController(SignUpService) {

  var infoCtrl = this;


  infoCtrl.$onInit = function () {

    infoCtrl.user = SignUpService.getUser();

    if (infoCtrl.user) {
      infoCtrl.loadDish(infoCtrl.user.short_name);
    }

  };

  infoCtrl.loadDish = function (short_name) {

  	SignUpService.getDish(short_name)
  	.success(function (result) {
        
		  infoCtrl.item = result;

    })
    .error(function (result) {

    });

  };

}

})();
