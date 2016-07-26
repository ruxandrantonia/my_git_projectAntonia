function showError(inputId) {
  var parentNode =  document.querySelector(inputId).parentNode;
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
