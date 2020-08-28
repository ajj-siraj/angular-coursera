(function () {
  "use strict";

  angular.module("public").controller("InfoController", InfoController);

  InfoController.$inject = ["user"];
  function InfoController(user) {
    var $ctrl = this;
    console.log("userdata in infoCtrl: ", user);
    $ctrl.user = user;
  }
})();
