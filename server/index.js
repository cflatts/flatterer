"use strict";
exports.__esModule = true;
var express = require("express");
var db_1 = require("../db");
var PORT = 3000;
var app = express();
app.get("/", function (req, resp) {
    resp.send("DEFAULT ROUTE TBD");
});
app.get("/login", function (req, resp) {
    resp.send("LOGIN PAGE");
});
/**
 * USER FUNCTIONS
 */
app.post("/create", function (req, resp) {
    console.log("BODY", req.body);
    (0, db_1.createUser)(req.body)["catch"](function (err) { return console.log(err); });
});
app.get("/users/:username", function (req, resp) {
    var u = (0, db_1.findUser)({ permanentName: req.params.username });
    resp.send("The user is: ".concat(req.params.username));
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
    (0, db_1.connectToDb)()["catch"](function (err) { return console.log(err); });
}
;
init();
