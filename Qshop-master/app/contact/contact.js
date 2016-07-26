document.addEventListener('DOMContentLoaded',function(){
    var registerForm = document.querySelector('#contact');
    var inputs = ['#email','#subject','#message'];
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

  function showError(inputId) {
    var parentNode =  document.querySelector(inputId).parentNode;
    while(parentNode.className != "form-group"){
      parentNode=parentNode.parentNode;
    }}
    parentNode.className +=  ' has-error';
    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
  }
  function hideError(inputId) {
    var parentNode =  document.querySelector(inputId).parentNode;
    parentNode.className = parentNode.className.replace('has-error','');

    parentNode.querySelector('.help-block').className = parentNode.querySelector('.help-block').className.replace('hidden','');
    parentNode.querySelector('.help-block').className +=' hidden';
  }
  function isEmptyInput(inputId) {
    return !document.querySelector(inputId).value
  }
