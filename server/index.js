var express = require("express");
var PORT = 3000;
var app = express();
function init() {
    app.listen(PORT, function () {
        console.log("DEV server listening on port: ".concat(PORT));
    });
}
;
init();
