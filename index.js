const express = require("express");
require("./db/connection");
const apps = require("./db/models/Apps")
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors"); 
app.use(cors());
app.use(express.json());

/*
//If you uncomment this, they will be able to add ANY application, it is very dangerous if you do not do it with an approval.
app.post("/apps", (req, res) => {
    const tool = new apps(req.body)
    tool.save().then( () => {
        res.status(201).send("Tool added");
    }).catch( (e) => {
        res.status(400).send(e);
    })
})
*/


// Get all tools
app.get("/apps", async(req, res) => {
    try {
        const ttApps = await apps.find().sort({$natural:-1})
        res.json(ttApps);
    } catch(e) {
        res.json(e);
    }
})

// Get tools by categories
app.get("/apps/category/:id", async(req, res) => {
    const id = req.params.id
    const find = await apps.find(({
        "category": id
      })).sort({$natural:-1})
    res.json(find);
})

// Search tools
app.get("/apps/search/:search", async(req, res) => {
    const id = req.params.search
    const find = await apps.find({"lower": {$regex: `${id}`}}).sort({$natural:-1})
    res.json(find);
})

app.listen(port);

console.log(`Listen on Port ${port}`)