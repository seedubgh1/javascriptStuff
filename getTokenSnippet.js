var https = require('https');
var rqst = require('request');

function getToken (callback) {
  var t = https.get({
    host: 'opentdb.com',
    path:  '/api_token.php?command=request'
  }, function(response) {
    var body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function() {
      var parsed = JSON.parse(body);
      console.log('getToken: ', parsed);
      console.log('token: ',parsed.token);
      //callback(parsed.token);
    });
  });

  // return t;
};

console.log(getToken({}));
