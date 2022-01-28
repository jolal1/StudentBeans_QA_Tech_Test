const ParentPageObject = require('./parentPageObject')

class simpleSearchPageObject extends ParentPageObject {
  goToHomePage () {
    // the below url call is relative to the base url in the wdio.conf.js so the below call will actually just result in going straight to the base url
    browser.url('')
  }

  verifyHomePage () {
    this.isElementEqualToExpected($('h2=Recommended For You'), 'Recommended For You')
  }

  acceptAll() {
    $("#onetrust-accept-btn-handler").click()
  }

  searchBar() {
    $('._tf5swf').click()
  }

  enterSamsung () {
    $('._1g5dvk1').setValue('Samsung')
  }

  verifySearchResults () {
    this.isElementEqualToExpected($("//a//div//span[@class='_63p46ei']"), 'Samsung')
  }
}

module.exports = simpleSearchPageObject
