const express =require("express"); 
const path = require("path"); 
const fs = require ('fs'); 

const app = express(); 

const PORT= parseInt(process.evn.PORT) || 9600;


app