const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I am on the cart page$/, () => {
  return client.url('http://localhost:3000/cart').waitForElementVisible('body', 1000);
});

When(/^I click on the Remove from cart button$/, () => {
  return  client.click('div.MuiPaper-rounded button:nth-child(2)')
  .pause(1000);
});

Then(/^remove product message popup! $/, ()=> {
  return client.waitForElementVisible('div[role="dialog"]', 5000)
  .assert.containsText('div[role="dialog"]','Product 3' );
});