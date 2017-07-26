const request = require("request-promise");
var tst = {};
const getStatus = function getStatus() {
    return request.get("https://opentdb.com/api_token.php?command=request")
}

var tkn = {};
getStatus().then(
    (response) => {
        console.log('<response>',response);
        tkn = response;
    },
    (error) => {
        console.error('uh-oh! ' , error);
    }
);

console.log('<tst>',tkn);
