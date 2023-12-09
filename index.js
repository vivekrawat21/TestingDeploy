const express = require('express');
require('dotenv').config();

const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send("hello world1");

});
app.get('/twitter', (req, res) => {
 res.send("<h1>twitter</h1>");
});
app.get('/facebook', (req, res) => {
    res.send("<h1>facebook</h1>");
});
app.get('/signup', (req, res) =>{
    res.send("<h1>signup</h1>");
});
app.get('/login', (req, res) =>{
    res.send("<h1>login</h1>");
});
app.listen(process.env.PORT,()=>{
    console.log("Example app is listnening to port"+port);
});
