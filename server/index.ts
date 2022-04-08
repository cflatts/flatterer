const express = require("express");

const PORT: number = 3000;

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
};

init();