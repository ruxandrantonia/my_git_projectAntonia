var findElement = function(locator, type) {
    switch (type) {
        case "css":
            return element(by.css(locator));
            break;
        case "model":
            return element(by.model(locator));
            break;
        case "xpath":
            return element(by.xpath(locator));
            break;
        case "id":
            return element(by.id(locator));
            break;
        case "repeater":
            return element(by.repeater(locator));
            break;
        case "tagName":
            return element(by.tagName(locator));
            break;
        case "binding":
            return element(by.binding(locator));
            break;
        default:
            throw new Error('The locator type doesn\'t exist!');
    }
};
var findElementViaObject = function(obj){
  return findElement(obj.locator,obj.type);
  };
  var checkURL=function(url){
    return browser.getCurrentUrl().then(function(actualUrl){
      return url == actualUrl;
    });
  };


    var verifyText = function(obj,expectedText){
      return expect(getTextProp(obj)).toBe(expectedText);
    };

    var getTextProp = function(obj){
      browser.sleep(5000);
      return findElementViaObject(obj).getText();
    };


module.exports = {
  findElement:findElement,
  findElementViaObject:findElementViaObject,
  checkURL:checkURL,
  verifyText:verifyText,
  getTextProp:getTextProp
}
