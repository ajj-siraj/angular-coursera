(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController)
  
  
  SignUpController.$inject = ['ApiPath'];
  function SignUpController(ApiPath) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
  }
  
  })();