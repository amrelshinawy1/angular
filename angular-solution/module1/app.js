
(function () {
'use strict';

angular.module('Lunch', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    //  trim dont make any diffrences 
  $scope.LunchChecker = function (items) {
      if(items ==undefined || items ==""){
          $scope.message= "Please enter data first";
      }
      else{   
        items=items.trim();
      var itemslength=items.split(',').length;
          if(itemslength<=3)  
            $scope.message= "Enjoy!";
          else if(itemslength >=4)
             $scope.message= "Too much!";
         }
      };
}

})();

