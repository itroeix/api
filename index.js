const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.listen(port);


app.get("/", (req, res) => {
    res.send("Here are all the apis that I create for my projects.")
})

console.log(`Listen on port ${port}`);