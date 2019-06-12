Feature: Employee api
 
Scenario: Get the employees details
  Given that i have the employee api
  When I do a get on the "employee" endpoint
  Then the employees list is correct