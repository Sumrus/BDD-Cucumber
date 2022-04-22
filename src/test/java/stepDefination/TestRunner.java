package stepDefination;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)


@CucumberOptions(
		
		plugin = {"html:target/html-cucumber","json:target/cucumber.jason"},
		
		features= "src/test/java/Features",
		//tags= {"@Sanity"},//to run single tag
		//tags= {"@Sanity, @Regression"},//to run multiple tags
		//tags = {"@Regression","@Rapid"}, // to run multiple tags using AND
		glue = {"stepDefination"}
		
		)


public class TestRunner {


}
