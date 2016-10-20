(function () {
'use strict';

angular.module('restaurant')
.service('SignUpService', SignUpService );


SignUpService.$inject = ['$http']
function SignUpService($http) {

  var service = this;


  service.getDish = function(short_name) {
    
    var url = "https://module5-solution.herokuapp.com/menu_items/" + short_name + ".json";
    return $http({
        url: url
      });

  };

  service.save = function(user) {
    
    service.signeduser = user;

  };

  service.getUser = function() {
    
    return service.signeduser;

  };

}

})();
