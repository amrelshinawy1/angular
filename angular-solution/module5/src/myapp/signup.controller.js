(function () {
'use strict';

angular.module('restaurant')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SignUpService'];
function SignUpController(SignUpService) {

  var signCtrl = this;


  signCtrl.$onInit = function () {
  	signCtrl.report = "";
  };


  signCtrl.submit = function () {

  	signCtrl.report = "";

  	SignUpService.getDish(signCtrl.user.short_name)
  	.success(function (result) {
        
		  SignUpService.save(signCtrl.user);
      //signCtrl.emptyForm();
      signCtrl.report = "Your information has been saved.";

    })
    .error(function (result) {

      signCtrl.report = "No such menu number exists.";

    });

  };

  signCtrl.emptyForm = function () {

  	signCtrl.user.firstname = '';
  	signCtrl.user.lastname = '';
  	signCtrl.user.email = '';
  	signCtrl.user.phone = '';
  	signCtrl.user.short_name = '';

  };

}

})();
