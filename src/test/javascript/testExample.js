/**
 * @filedescription
 * The closure compiler will parse the output of your testing.
 * This requires you to include the goog.testing.jsunit in your 
 * scripts so that it can generate the file and execute it in a
 * Selenium testbed.
 * 
 * Note that if you test more than the exported
 * functions, you cannot set the "runTestsOnCompiled" 
 * flag to true on the maven plugin, which helps to test if
 * you've missed things in your API.  This is suggested for
 * libraries.
 */
goog.require("goog.testing.jsunit");
goog.require("com.github.ClosureFrameworkJQueryExample");

/**
 * Note that all of your tests must start with the word "test"
 */
testHexDigitsExists = function() {
	assertTrue(goog.isDefAndNotNull(com.github.ClosureFrameworkJQueryExample.hexDigits));
	assertEquals(16, com.github.ClosureFrameworkJQueryExample.hexDigits.length);
};

testRotateColorFunction = function() {
	newParagraph = document.createElement('p');
	assertEquals(true, true);//TODO assert that this is the color black
	com.github.ClosureFrameworkJQueryExample.rotateColorFunction
	assertEquals(true, true);//TODO assert that it has changed to #ffebcd
};

testConvertHex = function() {
	assertEquals("#ffebcd", com.github.ClosureFrameworkJQueryExample.rgb2hex("rgb(255, 235, 205)"));
}
