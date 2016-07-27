var data = require ('./data.js');
var Utility=require('./utils.js');

var test = function(){

  this.login = function(username,password){
    var usr = Utility.findElementViaObject(data.username);
    usr.click();
    usr.clear();
    usr.sendKeys(username);
    var psw = Utility.findElementViaObject(data.password);
    psw.click();
    psw.clear();
    psw.sendKeys(password);

    var loginbutton = Utility.findElementViaObject(data.login);
    loginbutton.click();
  };

  this.logout = function(){
    var logoutbutton =Utility.findElementViaObject(data.logout);
    logoutbutton.click();
  };

  this.verify_current_URL = function(url){
    return browser.wait(function(){
      return Utility.checkURL(url);
    },100*1000);

  };
  this.checkTextProperty=function(expect){
    return Utility.verifyText(data.login_invalid_message,expect);

  };
};

module.exports = test;
