(function () {
  "use strict";

  angular.module("assignment1", []).controller("contr", ["$scope", controller]);

  function controller($scope) {
    $scope.amount = "";
    $scope.error="";
    $scope.checkAmount = () => checkTheAmount($scope.amount, $scope.displayError);
    $scope.displayError = (msg) => { $scope.error = msg; return;}
  }

  function checkTheAmount(amount, displayError) {
    if(amount.length < 1){
      displayError("Please enter data first!");
      return;
    }
    let itemsList = amount.split(", ");
    console.log(itemsList)
    if(itemsList.length > 3){
      displayError("Too much!");
      return;
    }
    displayError("Enjoy!");
    return;
  }
})();
