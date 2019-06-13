import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/NewFeature.feature');
var restCall = require("./do-rest-calls.js");
var initializer = require("./initialize-world.js");

var world = require("./world.js")

defineFeature(feature, test => {
  test('Get the employees details', ({ given, when, then }) => {
    initializer.givenIInitializeTheWorld(given)

    restCall.makeARestCall(when)

    then('the employees list is correct', () => {
      // console.log(apiResponse.data);
      expect(world.apiResponse.status).toBe(200);
      expect(world.initializationMessage).toBe("I have initialized world");
    });
  }); 
});