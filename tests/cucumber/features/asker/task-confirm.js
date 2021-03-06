// Description: This is testing steps of task information
// Author: toanpp
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {
    var url = require('url');

    this.Given(/^I am an Asker in Waiting list of task$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.server.call("resetDataConfriming");
      this.client
      .url(process.env.ROOT_URL + 'ask-list')
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.When(/^I click the task "([^"]*)" in waiting list.$/, function (arg1, callback) {
      this.client
      .click('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I see "([^"]*)" and "([^"]*)" in confirming$/, function (arg1, arg2, callback) {
      this.client
      .waitForExist('h1='.concat(arg1))
      .waitForVisible('h1='.concat(arg1))
      .waitForExist('span='.concat(arg2))
      .waitForVisible('span='.concat(arg2))
      .call(callback);
    });

    this.When(/^I click check box$/, function (callback) {
      this.client
      .click('#toanpp')
      .call(callback);
    });

    this.When(/^I click accept button to confirm$/, function (callback) {
      this.client
      .click('#btnAccept')
      .call(callback);
    });

    this.Then(/^I see result "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('span='.concat(arg1))
      .waitForVisible('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I go back to Comfirmed list$/, function (callback) {
      this.client
      .url(process.env.ROOT_URL + 'ask-list')
      .waitForExist('body *')
      .waitForVisible('body *')
      .click('div=Confirmed')
      .call(callback);
    });

    this.Then(/^I click the task "([^"]*)" in confirmed list$/, function (arg1, callback) {
      this.client
      .click('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I click "([^"]*)" button$/, function (arg1, callback) {
      this.client
      .click('#btnCancel')
      .call(callback);
    });

    this.Then(/^I click "([^"]*)" action in Snackbar$/, function (arg1, callback) {
      this.client
      .click('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I see "([^"]*)" screen$/, function (arg1, callback) {
      this.client
      .waitForExist('h1='+arg1)
      .waitForVisible('h1='+arg1)
      .call(callback);
});










  };
})();
