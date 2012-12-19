/**
 * @fileoverview
 * 
 * The jqueryExterns were taken from the closure code-base:
 * http://code.google.com/p/closure-compiler/source/browse/trunk/contrib/externs/
 */

goog.provide("com.github.ClosureFrameworkJQueryExample");
goog.require("goog.color.names");
goog.require('goog.object');

/**
 * This function will find the color in the current google names list and increment to 
 * the next key in the hash.  The fact that this has the export on this function tells
 * google not to rename this particular function.
 * 
 * @export
 */
com.github.ClosureFrameworkJQueryExample.rotateColorFunction = function(obj) {
	//find current color in list - don't ever do this, as it's a bad algorithm.  It's just an example.
	var colors = goog.object.getValues(goog.color.names);
	var rgb2hex = com.github.ClosureFrameworkJQueryExample.rgb2hex;
	for (var i = 0; i < colors.length; i=i+1) {
		var cssColor = (/**@type {string} */ $(this).css("color"));
		if (colors[i]===rgb2hex(cssColor)) {
			if ((i+1) === colors.length) {
				$(this).css({'color' : colors[0]});				
			} else {
				$(this).css({'color' : colors[i+1]});
			}
			break;
		}
	}
};

/**
 * An array of characters to be referenced.  Based off of the annotations, closure
 * will guarantee that this is an array of strings and that it cannot be changed.
 * @type {Array.<string>} 
 * @const
 */
com.github.ClosureFrameworkJQueryExample.hexDigits = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]; 

/**
 * Function to convert hex format to a rgb color
 * @param {string} rgb the rgb string provided by jQuery.  Closure will guarantee that this is a string
 * @private
 */
com.github.ClosureFrameworkJQueryExample.rgb2hex = function(rgb) {
	var matchedRGB = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	var hex = com.github.ClosureFrameworkJQueryExample.hex;
	return "#" + hex(matchedRGB[1]) + hex(matchedRGB[2]) + hex(matchedRGB[3]);
}

/**
 * Function to convert digits to hexDigits.
 * @param {string} x The digits to convert to hex digits.  Closure will guarantee that this is a string.
 * @private
 */
com.github.ClosureFrameworkJQueryExample.hex = function (x) {
	var hexDigits = com.github.ClosureFrameworkJQueryExample.hexDigits;
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}