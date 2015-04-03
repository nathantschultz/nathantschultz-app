/**
 * Module dependencies
 */
var woodruff = require("woodruff")
  , themeEngage = require("theme-engage");

var experiments = [
  { "featureOne" : false }
];

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, themeEngage, { experiments: experiments });
