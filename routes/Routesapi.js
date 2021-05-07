var db = require("../db/db.json"); 
var fs = require("fs"); 
const { stringify } = require("querystring");
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
     // request to delete api method
     app.delete("/api/notes/:id", function (req, res) { 
         var id = req.params. id; 
       //using splice to delete selected note from db 
         db.splice(id -1, 1); 
    
         db.forEach((obj, i) => { 
             obj. id = i+ 1; 
         }); 

         fs.writeFile("./db/db.json", JSON,stringify(db), function () { 
             res.json(db); 

         });

     }); 
};      