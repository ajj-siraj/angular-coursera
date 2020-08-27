(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);

// Version with resolving to 1 item based on $stateParams in route config
ItemDetailController.$inject = ['item'];
function ItemDetailController(item) {
  console.log(item.data);
  var itemDetail = this;
  itemDetail.menu_items = item.data.menu_items;
  itemDetail.category = item.data.category
}

})();
