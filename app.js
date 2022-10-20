const http = require('http');
const express = require('express'); 
const app = express(); // calls express
const expressLayouts = require('express-ejs-layouts')
// server for localprot
const server = http.createServer(app);
server.listen(8080);
// sets ejs view engine
app.use(expressLayouts)
app.set('layout', './layouts/page.ejs' )
app.set('view engine', 'ejs');

//navigation
app.get('', (req,res) => {
     res.render('index')
})
app.get('/about',(req,res)=>{
     res.render('about')
})


