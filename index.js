const bodyParser = require('body-parser');
const express = require('express');
const dishRouter = require('./dishRouter');
const promotions = require('./promotions');

http = require('http');
const hostname = 'localhost';
const port = 3000;   
     
const app = express();
app.use(bodyParser.json());

// app.get('/dishes/:dishId', (req,res,next) => {
//     res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
// });



app.use('/dishes', dishRouter);
app.use('/promotions', promotions);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
