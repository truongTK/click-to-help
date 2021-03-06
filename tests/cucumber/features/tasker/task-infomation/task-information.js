// Description: This is testing steps of task information
// Author: toanpp
(function() {

  'use strict';

  var _ = require('underscore');
  var assert = require('assert');

  module.exports = function() {
    var url = require('url');

    this.Given(/^I am a Tasker$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      this.server.call('changeAllToRead');
      this.client
      .url(process.env.ROOT_URL+'list-task-tasker')
      .waitForExist('body *')
      .waitForVisible('body *')
      .call(callback);
    });

    this.When(/^I click the notification button$/, function (callback) {
      this.client
      .click('.icon-notification')
      .waitForExist('div=notification')
      .waitForVisible('div=notification')
      .call(callback);
    });

    this.When(/^I click the task "([^"]*)"$/, function (taskName,callback) {
      this.client
      .click('p='.concat(taskName))

      .call(callback);
    });
    this.Then(/^I see "([^"]*)" and "([^"]*)"$/, function (arg1, arg2, callback) {
      this.client
      .waitForExist('h1='.concat(arg1))
      .waitForVisible('h1='.concat(arg1))
      .waitForExist('span='.concat(arg2))
      .waitForVisible('span='.concat(arg2))
      .call(callback);
    });

    this.When(/^I click Skip button$/, function (callback) {
      this.client
      .click('#btnSkip')
      .call(callback);
    });

    this.Then(/^I see task list page$/, function (callback) {
      this.client
      .waitForExist('div=Accepted')
      .waitForVisible('div=Accepted')
      .call(callback);
    });

    this.Then(/^I click Accept button$/, function (callback) {
      this.client
      .click('#btnGetIt')
      .call(callback);
    });

    this.Then(/^I see "([^"]*)"$/, function (arg1, callback) {
      this.client
      .waitForExist('span='.concat(arg1))
      .waitForVisible('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I click "([^"]*)"$/, function (arg1, callback) {
      this.client
      .click('span='.concat(arg1))
      .call(callback);
    });

    this.Then(/^I see Tab Accepted in Taks list$/, function (callback) {
      this.client
      .waitForExist('div=Accepted')
      .waitForVisible('div=Accepted')
      .call(callback);
    });





  };
})();
