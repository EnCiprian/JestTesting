var exports = module.exports = {};

var world = require("./world.js");

exports.givenIInitializeTheWorld = given => {
    given('that i have the employee api', () => {
        world.initializationMessage = "I have initialized world"; 
    });
}

