var test= require('./mainTests.js');
var page = new test();

describe('Protractor App', function() {

  afterEach(function() {
       element(by.css('[src="./imgs/user_name.png"]')).click();
      // element(by.css('[ng-click="logout()"]')).click();
      page.logout();
  });

  beforeEach(function() {
      browser.get('http://qa.simuwatt.com');


  });

      it('should log in', function() {
        page.login("eer","36");
        expect(page.verify_current_URL("http://qa.simuwatt.com/#/welcome?usrId=-J_BRPlBze05dG8rKdE8&orgId=-J_BMeqBxfSQa3uAe9jp")).toBe(true);
page.checkTextProperty('The username or password you entered is invalid!');
    });


});
