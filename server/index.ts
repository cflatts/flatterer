const express = require("express");

const PORT: number = 3000;

let app = express();

function init() {
    app.listen(PORT, () => {
        console.log(`DEV server listening on port: ${PORT}`);
    });
};

init();