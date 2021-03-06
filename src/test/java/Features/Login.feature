Feature: This feature would be used to design the Login page of the application

  Background: Open the application
    Given I have opened the application on the browser

  @Sanity
  Scenario: Validate the successful login
    When I click on the Login link
    And I enter username
    And I enter password
    And I click on the login Button
    Then I should be landed on the home page

  @Regression
  Scenario: Validate the successful login using login data
    When I click on the Login link
    And I enter username "abc@xyz.com"
    And I enter password "Pqr@12345"
    And I click on the login Button
    Then I should be landed on the home page

  @Regression @Rapid
  Scenario Outline: Validate the successful login using multiple test data
    When I click on the Login link
    And I enter username "<UserName>"
    And I enter password "<Password>"
    And I click on the login Button
    Then I should be landed on the home page

    Examples: 
      | UserName            | Password    |
      | abc@xxx.com         | pqR@123456  |
      | sumit.rusia@fff.com | @854SR12345 |

  Scenario: Validate the Negative login using login data
    When I click on the Login link
    And I enter username "abc@xyz.com"
    And I enter password "Pqr@12345"
    And I click on the login Button
    Then I should get the error message as "The email or password you have entered is invalid."
