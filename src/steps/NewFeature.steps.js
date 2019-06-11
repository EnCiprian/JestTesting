import { defineFeature, loadFeature } from 'jest-cucumber'
import axios from 'axios';

const feature = loadFeature('./src/features/NewFeature.feature');

defineFeature(feature, test => {
  test('Get the employees details', ({ given, when, then }) => {
    let apiResponse;
    given('that i have the employee api', () => {

    });

    when(/^I do a get on the (.*) endpoint$/, async endName => {
      // apiReponse = request.(app).get("");
      apiResponse = await axios.get("https://restcountries.eu/rest/v2/all");
      // console.log(apiResponse.data);
    });

    then('the employees list is correct', () => {
      // console.log(apiResponse.data);
      expect(apiResponse.status).toBe(200);
    });
  }); 
});