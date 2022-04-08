"use strict";
exports.__esModule = true;
var express = require("express");
var MongoClient = require("mongodb").MongoClient;
var db_1 = require("../db");
var PORT = 3000;
// let testDB;
// function connectToDb() {
//     MongoClient.connect("mongodb://127.0.0.1:27017/test", (err, client)  => {
//         if(err) {
//             console.log(`ERROR: ${err}`);
//         } else {
//             console.log("DB CONNECTION SUCCESSFUL");
//         };
//         testDB = client.db("test");
//         testDB.collection("compliments").find().toArray((err, result) => {
//             if (err) throw err;
//             console.log("RESULT", result);
//         })
//     });
// }
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
    (0, db_1.connectToDb)()["catch"](function (err) { return console.log(err); });
}
;
init();
