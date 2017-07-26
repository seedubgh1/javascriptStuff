var https = require('https');

var questions = {};

function getQuestion(token) {
  var tknParam = '';

  if (token) {
    tknParam = '&token=' + token;
  };

  var q = https.get({
    host: 'opentdb.com',
    path: '/api.php?amount=1&category=11&type=multiple' + tknParam,
  }, function(response) {
    var body = '';
    response.on('data', function(d) {
      body += d;
    });
    response.on('end', function() {
      var parsed = JSON.parse(body);
      console.log('getQuestion: ', parsed.results[0]);
      //console.log('getQuestion: ', parsed);
    });
  });
  //console.log('q: ',q);
};

function getToken(callback) {
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
      callback(parsed.token);
    });
  });
};

//getToken(getQuestion);
getQuestion('e78f3d85c9e62b56b163f5e6311e7874b15717c1d5138985453ca935956ca55f');
