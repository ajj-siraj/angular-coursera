(function () {
  "use strict";
  
  angular.module('public')
  .component('signupForm', {
    templateUrl: 'src/public/signup/signupform.html',
    
    controller: SignUpFormController
  })
  
  
  SignUpFormController.$inject = ['ApiPath', 'SignUpFormService'];
  function SignUpFormController(ApiPath, SignUpFormService) {
    var $ctrl = this;
    $ctrl.basePath = ApiPath;
    $ctrl.mealError = false;
    $ctrl.submitForm = () => {
      
      SignUpFormService.checkMealNum($ctrl.fav).then((result) => {
        if(result.data.error){
          $ctrl.mealError = true;
          return;
        }
        console.log(result.data);
        $ctrl.mealError = false;
        let formData = {
          firstname: $ctrl.firstname,
          lastname: $ctrl.lastname,
          email: $ctrl.email,
          phone: $ctrl.phone,
          fav: result.data,
        }
        $ctrl.submitSuccess = true;
        
        SignUpFormService.setUserData(formData);
      }).catch(err => $ctrl.mealError = true);
      
      
    };
  }
  
  })();