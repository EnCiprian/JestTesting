var axios = require("axios");

var exports = module.exports = {};

var world = require("./world.js");

exports.makeARestCall = when => {
    when(/^I do a get on the (.*) endpoint$/, async endName => {
        world.apiResponse = await axios.get("https://restcountries.eu/rest/v2/all");
      });
}