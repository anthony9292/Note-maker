const express =require("express"); 
const path = require("path"); 
const fs = require ('fs'); 

const app = express(); 

const PORT= parseInt(process.evn.PORT) || 9600;


app.use(express.static('./public')); 
app.get('/notes', (req, res) => { 
    res.sendFile(path.join(__dirname, './public/notes.html'));
}); 

app.get('/api/notes', (req, res) => { 
    let file = fs.readFileSync('./db/db.json'); 
    let jsonData =JSON.parse(file); 
    res.send(jsonData); 
}); 

