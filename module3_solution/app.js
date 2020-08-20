(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", FoundItemsDirective)
    .constant("ENDPOINT", "https://davids-restaurant.herokuapp.com/menu_items.json");

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    let ctrl = this;

    ctrl.foundItems = MenuSearchService.getFound();
    ctrl.searchTerm = "";
    ctrl.getMatchedMenuItems = (searchTerm) => {
      MenuSearchService.getMatchedMenuItems(searchTerm).then((res) => {
        ctrl.foundItems = res;
      }).catch(err => console.log(err))
    };
    ctrl.onRemove = (index) => MenuSearchService.onRemove(index);
  }

  MenuSearchService.$inject = ["$http", "ENDPOINT"];
  function MenuSearchService($http, ENDPOINT) {
    let service = this;

    let found = [];
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({ url: ENDPOINT }).then(function (result) {
        
        let foundItems = result.data.menu_items;
        let filtered = foundItems.filter((item) => {
          return item.name.toLowerCase().includes(searchTerm);
        });
        
        found = filtered;
        return filtered;
      });
    };

    service.onRemove = function(index) {
      found && found.splice(index, 1);
    }

    service.getFound = () => found;
  }

  function FoundItemsDirective() {
    let ddo = {
      templateUrl: "template.html",
      restrict: "E",
      scope: {
        found: "<foundItems",
        onRemove: "=",
      },
    };

    return ddo;
  }
})();
