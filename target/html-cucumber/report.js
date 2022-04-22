$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/Calculator.feature");
formatter.feature({
  "name": "This feature would be creating a calculator for Add and Substract",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Additon of numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 4 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 9",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Subtractions of number",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sub 10 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_sub_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 5",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.step({
  "name": "I add \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the result as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "4",
        "7",
        "11"
      ]
    },
    {
      "cells": [
        "7",
        "6",
        "13"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 4 and 7",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 11",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 7 and 6",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 13",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.step({
  "name": "I sub \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the result as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "7",
        "4",
        "3"
      ]
    },
    {
      "cells": [
        "7",
        "6",
        "1"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sub 7 and 4",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_sub_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 3",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To Add two numbers using scenario outline",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I sub 7 and 6",
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_sub_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 1",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple numbers using cucumber data table",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add below numbers",
  "rows": [
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "7"
      ]
    },
    {
      "cells": [
        "8"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_below_numbers(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 24",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add multiple numbers using cucumber data table",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add below numbers using List",
  "rows": [
    {
      "cells": [
        "4"
      ]
    },
    {
      "cells": [
        "5"
      ]
    },
    {
      "cells": [
        "7"
      ]
    },
    {
      "cells": [
        "8"
      ]
    },
    {
      "cells": [
        "10"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_add_below_numbers_using_list(Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 34",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To calculate the total bill of the order",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I order below items",
  "rows": [
    {
      "cells": [
        "Coffee",
        "23"
      ]
    },
    {
      "cells": [
        "tea",
        "27"
      ]
    },
    {
      "cells": [
        "burger",
        "50"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_order_below_items(String,Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 100",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To calculate the total bill of the order using quantity",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "CalculatorSteps.i_open_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I order below items and quantity",
  "rows": [
    {
      "cells": [
        "Coffee",
        "1",
        "10"
      ]
    },
    {
      "cells": [
        "tea",
        "2",
        "20"
      ]
    },
    {
      "cells": [
        "burger",
        "3",
        "30"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "CalculatorSteps.i_order_below_items_and_quantity(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 140",
  "keyword": "Then "
});
formatter.match({
  "location": "CalculatorSteps.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/Features/Login.feature");
formatter.feature({
  "name": "This feature would be used to design the Login page of the application",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application on the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_on_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application on the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_on_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using login data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Pqr@12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.step({
  "name": "I enter username \"\u003cUserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "abc@xxx.com",
        "pqR@123456"
      ]
    },
    {
      "cells": [
        "sumit.rusia@fff.com",
        "@854SR12345"
      ]
    }
  ]
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application on the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_on_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xxx.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"pqR@123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application on the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_on_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the successful login using multiple test data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Rapid"
    }
  ]
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"sumit.rusia@fff.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"@854SR12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be landed on the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Open the application",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have opened the application on the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.i_have_opened_the_application_on_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the Negative login using login data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click on the Login link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter username \"abc@xyz.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Pqr@12345\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_enter_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the login Button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.i_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_should_get_the_error_message_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});