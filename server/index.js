var express = require("express");
var PORT = 3000;
var app = express();
app.get("/", function (req, resp) {
    resp.send("DEFAULT ROUTE TBD");
});
/**
 * USER FUNCTIONS
 */
app.post("/new/:username", function (req, resp) {
    resp.send("CREATE A USER");
});
app.get("/users/:username", function (req, resp) {
    resp.send("GET A USER");
});
app.post("/update/:userID", function (req, resp) {
    resp.send("UPDATE A USER");
});
app["delete"]("/delete/:userID", function (req, resp) {
    resp.send("DELETE A USER");
});
function init() {
    app.listen(PORT, function () {
        console.log("DEV server listening on port: ".concat(PORT));
    });
}
;
init();
