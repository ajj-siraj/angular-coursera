(function () {
'use strict';

angular.module('MenuApp')
.service('MenuAppService', MenuAppService);


MenuAppService.$inject = ['$http', 'API_PATH']
function MenuAppService($http, API_PATH) {
  var service = this;

  // // List of shopping items
  // var items = [];

  // // Pre-populate a no cookie list
  // items.push({
  //   name: "Sugar",
  //   quantity: "2 bags",
  //   description: "Sugar used for baking delicious umm... baked goods."
  // });
  // items.push({
  //   name: "flour",
  //   quantity: "1 bags",
  //   description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  // });
  // items.push({
  //   name: "Chocolate Chips",
  //   quantity: "3 bags",
  //   description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  // });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    
    return $http({url: `${API_PATH}/categories.json`})
  };

  service.getItemsForCategory = function (categoryShortName){
    console.log("shortname: ", categoryShortName);
    return $http({url: `${API_PATH}/menu_items.json?category=${categoryShortName}`})
  }
}

})();
