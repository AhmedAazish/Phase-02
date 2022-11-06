const { client } = require('nightwatch-api');
const { Given, Then, When } = require('cucumber');

Given(/^I am on the Product page$/, () => {
  return client.url('http://localhost:3000/cart').waitForElementVisible('body', 1000);
});

When(/^I click on the picture of the desired product$/, () => {
  return  client.click('a[href="/checkout"]')
  .pause(1000);
});

Then(/^the picture's size of the desired product increases $/, ()=> {
  return client.waitForElementVisible('body', 1000);
});