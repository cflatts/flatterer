const express = require("express");
const MongoClient = require("mongodb").MongoClient;
import { connectToDb, createUser, findUser, updateUser, deleteUser } from "../db";

const PORT: number = 3000;
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


let app = express();

app.get("/", (req, resp) => {
    resp.send("DEFAULT ROUTE TBD");
});

/**
 * USER FUNCTIONS
 */
app.post("/new/:username", (req, resp) => {
    resp.send("CREATE A USER");
});

app.get("/users/:username", (req, resp) => {
    resp.send("GET A USER");
});

app.post("/update/:userID", (req, resp) => {
    resp.send("UPDATE A USER");
});

app.delete("/delete/:userID", (req, resp) => {
    resp.send("DELETE A USER");
});

function init() {
    app.listen(PORT, () => {
        console.log(`DEV server listening on port: ${PORT}`);
    });
    connectToDb().catch(err => console.log(err));
};

init();