var express = require("express"); 

var app = express(); 

var PORT = process.env.PORT || 3500; 


app.use(express.urlencoded({ extended: true })); 
app.use(express.json()); 
app.use(express.static(__dirname + "/public")); 

require("./routes/Routesapi")(app); 
require("./routes/Routeshtml")(app); 

app.listen(PORT, function () { 
    console.log("App listing on PORT:" + PORT); 
}); 