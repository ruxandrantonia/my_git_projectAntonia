function registerButton(){

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

  }
