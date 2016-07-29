angular.module("qshop").controller("ContactController", function($scope,$state,Contact) {


$scope.sendContact =function(){
  var contact = {
    email :"",
    subject : "",
    message: ""

  };
  contact.email = $scope.email;
  contact.subject = $scope.subject;
  contact.message = $scope.message;


  Contact.sendContact(contact);

  $state.go('default');

};

});
