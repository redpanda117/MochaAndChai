var request = require("request");

request({
  uri: "http://www.sitepoint.com",
  method: "GET",
  timeout: 5000,
}, function(error, response, body) {
  console.log(body);
});