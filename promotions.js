const express = require('express');
const bodyParser = require('body-parser');

const promotions = express.Router();

promotions.use(bodyParser.json());

promotions.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotiones to you!');
})
.post((req, res, next) => {
    res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotiones');
})
.delete((req, res, next) => {
    res.end('Deleting all promotiones');
});
promotions.get('/:promotionId', (req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promotionId +' to you!');
});

promotions.post('/:promotionId', (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotiones/'+ req.params.promotionId);
  });
  
  promotions.put('/:promotionId', (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promotionId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
          ' with details: ' + req.body.description);
  });
  
  promotions.delete('/:promotionId', (req, res, next) => {
      res.end('Deleting promotion: ' + req.params.promotionId);
  });


module.exports = promotions;