angular.module("qshop").factory("Contact", function($http) {

var contact = {};

contact.sendContact = function(contact){
  console.log("Contact",contact);


  $http.post('http://10.59.0.30:3000/posts',contact);
};



return contact;




});
