const express = require("express");
const app = express();

const ttHomeRoute = require('./thesetools/Home')
app.use('/thesetools', ttHomeRoute);

const ttAppsRoute = require('./thesetools/Apps')
app.use('/thesetools/apps', ttAppsRoute);

app.get("/", (req, res) => {
    res.send("Here are all the apis that I create for my projects.");
});

module.exports = app;