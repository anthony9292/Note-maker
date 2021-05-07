var db = require("../db/db.json"); 
var fs = require("fs"); 
//routes

module.exports = function (app) {  
    //api get request 
    app.get("/api/notes", function (req, res) { 
        res.json(db)
     }); 
  //api post request
     app.post("/api/notes", function(req, res) { 
         db.push(req.body); 
         //adds unique id for each note
         db. forEach((obj, i) => { 
             obj.id = i + 1; 

         }); 
         //returns the new note to client 
         fs.writeFile("db/db/,json", JSON.stringify(db), function () { 
             res.json(db)
         });
     });
}         