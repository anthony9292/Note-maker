const express = require("express"); 
const Routeshtml = require("./routes/Routeshtml");
const Routesapi = require("./routes/Routesapi"); 


const app = express(); 
const PORT = process.env.PORT || 9500; 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true})); 
app.use(express.static("public")); 
app.use("/api", Routesapi); 
app.use("/", Routeshtml); 


app.listen(PORT, () => console.log(`App listing ON PORT: ${PORT}`)); 
