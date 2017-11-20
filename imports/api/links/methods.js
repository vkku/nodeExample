// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(username, email, passphrase,newsletterOpt) {
  	/*
    check(username, String);
    check(email, String);
    check(passphrase, String);
    check(newsletterOpt, String);
    */
    

    return Links.insert({
      username,
      email,
      passphrase,
      newsletterOpt,
      createdAt: new Date(),
    });
  },
    logToConsole: function(msg) {
    console.log(msg);
},
/*
	fetchNews: function() {
		var result = HTTP.call('GET','https://newsapi.org/v1/articles?source=ars-technica&sortBy=top&apiKey=99dff16cf81f435d93867bb769ed80a3');
		//console.log(result);
		return result;
	},
*/

  "weather": function (zip) {
    console.log('Get weather for', zip);
    // Construct the API URL
    var apiKey = "4a9f8bf55a0e5cb9a291b3f619a28d1a";
    var apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us&units=imperial&APPID=" + apiKey;
    // query the API
    var response = HTTP.get(apiUrl).data;
    return response;
    },
});
