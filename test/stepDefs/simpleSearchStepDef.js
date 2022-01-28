const { Given, When, Then } = require('cucumber')
const SimpleSearchPageObject = require('../pageObjects/simpleSearchPageObject')

const simpleSearchPageObject = new SimpleSearchPageObject()

Given('I am on the studentbeans homepage', function () {
  simpleSearchPageObject.goToHomePage()
  simpleSearchPageObject.verifyHomePage()
  simpleSearchPageObject.acceptAll()
})

When('I open the search bar', function () {
  simpleSearchPageObject.searchBar()
})

When('I enter "Samsung"', function () {
  simpleSearchPageObject.enterSamsung()
})

Then ('I should be shown a search listing for "Samsung"', function () {
  simpleSearchPageObject.verifySearchResults()
})
