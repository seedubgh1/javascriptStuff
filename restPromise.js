const handlers = {
    'GoGetRESTfoo': function () {
        console.log("GoGetRESTfoo called");
        promisedRESTrequest('Some foo bar url').then(function(response) {
            console.log("Success!", response); // Yea, REST all the things
            this.emit(':tell', 'ok');
        }, function(error) {
            console.error("Failure!", response); // Boo, bad feels
            this.emit(':tell', 'Hmm.. that didn\'t work.  Check the CloudWatch Luke.');
        });
    },

    // lots more handlers..
}
