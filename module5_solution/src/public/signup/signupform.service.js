(function () {
  "use strict";

  angular.module("public").service("SignUpFormService", SignUpFormService);

  SignUpFormService.$inject = ["$http", "ApiPath"];
  function SignUpFormService($http, ApiPath) {

    let service = this;

    let form;

    service.checkMealNum = (item) => {
      return $http({url: `${ApiPath}/menu_items/${item}.json`})
    };

    service.setUserData = (data) => {
      form = data;
    }

    service.getUserData = () => {
      console.log(form);
      return form;
    }
  }
})();
