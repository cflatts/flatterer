const express = require("express");
import { connectToDb, createUser, findUser, updateUser, deleteUser } from "../db";

const PORT: number = 3000;

let app = express();

app.get("/", (req, resp) => {
    resp.send("DEFAULT ROUTE TBD");
});

app.get("/login", (req, resp) => {
    resp.send("LOGIN PAGE");
});

/**
 * USER FUNCTIONS
 */
app.post("/create", (req, resp) => {
    console.log("BODY", req.body);
    createUser(req.body).catch( err => console.log(err));
});

app.get("/users/:username", (req, resp) => {
    const u = findUser({permanentName: req.params.username});
    resp.send(`The user is: ${req.params.username}`);
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