const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I am on the Product page: $/, () => {
  return client.url('http://localhost:3000/p/3').waitForElementVisible('body', 1000);
});

When(/^I click on the Add to cart button: $/, () => {
  return  client.click('button[data-th="add-to-cart"]')
  .pause(1000);
});

Then(/^Cart items page is shown up: $/, ()=> {
  return client.waitForElementPresent('.MuiDialogContent-root', 5000);
});