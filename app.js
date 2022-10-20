const http = require('http');
const express = require('express'); 
const app = express(); // calls express
const expressLayouts = require('express-ejs-layouts')
// server for localprot
const server = http.createServer(app);
server.listen(8080);
// static files
app.use(express.static('public'))
app.use('/css',express.static(__dirname+'public'))
// sets ejs view engine
app.use(expressLayouts)
app.set('view engine', 'ejs');

//navigation
app.get('', (req,res) => {
     res.render('index')
})


