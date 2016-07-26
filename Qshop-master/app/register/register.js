/*function registerButton(){

     var user=document.querySelector('#username').value
     var pass=document.querySelector('#password').value
     var cpass=document.querySelector('#confirm-password').value
     var email=document.querySelector('#email').value
     alert(user+" " +pass+" "+cpass+" "+email);
}

function validate(){

  var inputvalue = document.querySelector('#username')
  if(inputvalue.value == ""){
    inputvalue.style.border="1px solid red"
  }
  else{
    inputvalue.style.border=" 1px solid green"
  }

} */

document.addEventListener('DOMContentLoaded',function(){
    var registerForm = document.querySelector('#register');
    var inputs = ['#username','#email','#password','#confirm-password'];
    for(var i=0;i<inputs.length;i++) {
      document.querySelector(inputs[i]).addEventListener("keyup",function() {
        onchangeElem('#' + this.id)
      })
    }
    registerForm.addEventListener('submit', function(event){
        var hasError = false;
        for(var i=0;i<inputs.length;i++) {
          if(isEmptyInput(inputs[i])) {
             hasError = true;
             showError(inputs[i])
          } else {
            hideError(inputs[i])
          }
        }

        if(hasError) {
          event.preventDefault();
        }
    })
})

function onchangeElem(inputId) {
  isEmptyInput(inputId) ? showError(inputId) : hideError(inputId);
}
