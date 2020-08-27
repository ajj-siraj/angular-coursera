(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuAppController', MainMenuAppController);


MainMenuAppController.$inject = ['MenuAppService', 'items'];
function MainMenuAppController(MenuAppService, items) {
  var mainList = this;
  mainList.items = items.data;
}

})();
