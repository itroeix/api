const express = require("express");
require("./db/connection");
const apps = require("./db/models/Apps")
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

/*
If you uncomment this, they will be able to add ANY application, it is very dangerous if you do not do it with an approval.
app.post("/apps", (req, res) => {
    const tool = new apps(req.body)
    tool.save().then( () => {
        res.status(201).send("Tool Added!");
    }).catch( (e) => {
        res.status(400).send(e);
    })
})
*/


// Get ALL tools
app.get("/apps", async(req, res) => {
    try {
        const ttApps = await apps.find();
        res.send(ttApps);
    } catch(e) {
        res.send(e);
    }
})

// Get apps by categories
app.get("/apps/category/:id", async(req, res) => {
    const id = req.params.id
    const find = await apps.find({
        "category": id
      })
    res.send(find);
})

// Search apps
app.get("/apps/search/:q", async(req, res) => {
    const id = req.params.q

    const find = await apps.find({"name": {$regex: `${id}`}})
    res.send(find);
})

app.listen(port);

console.log(`Listen on Port ${port}`)