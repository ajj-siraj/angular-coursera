(function () {
  angular
    .module("ShoppingListCheckOff", [])
    .controller("ToBuyController", ToBuyController)
    .controller("BoughtController", BoughtController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOff);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    this.toBuyList = ShoppingListCheckOffService.getToBuyList();

    this.checkOffItem = (index) => ShoppingListCheckOffService.checkOffItem(index)
  }

  BoughtController.$inject = ["ShoppingListCheckOffService"];
  function BoughtController(ShoppingListCheckOffService) {
    this.boughtList = ShoppingListCheckOffService.getBoughtList();
  }

  function ShoppingListCheckOff() {
    let service = this;

    let toBuyList = [
      { name: "Cookies", quantity: "10" },
      { name: "Bagels", quantity: "20" },
      { name: "Chocolate", quantity: "20" },
      { name: "Chips", quantity: "20" },
      { name: "Burger", quantity: "20" },
    ];

    let boughtList = [];

    service.checkOffItem = (index) => {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    }
    service.getToBuyList = () => toBuyList;
    service.getBoughtList = () => boughtList;
  }
})();
