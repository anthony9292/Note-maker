const fs =require("fs"); 
const path = require('path'); 
const router = require("express").Router(); 
let notes = require("../db/db.json"); 
const { route } = require("./Routeshtml"); 


router. get("/notes", function ( req, res) { 
    res.json(notes); 
}); 

router.post("/notes", function (req,res ) { 
  
    console.log(notes); 
    notes.push(req.body); 
    fs.writeFileSync(
        path.join(__dirname, "../db/db/json"), 
        JSON.stringify(notes)
    ); 
    res.json(notes); 
}); 

module.exports = router; 

