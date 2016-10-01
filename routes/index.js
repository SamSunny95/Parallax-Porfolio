var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var Instafeed = require("instafeed.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  
    
});

router.post('/', function(req,res,next){
  var mailOpts, transporter;
  transporter = nodemailer.createTransport();
 
  mailOpts = {
      from: 'sampsunny1996@gmail.com', //grab form data from the request body object
      to: 'sampsunny1995@gmail.com',
      subject: 'my Website',
      text: 'Name: '+req.body.name + '<br>Email: '+ req.body.email + ' <br>Message: ' + req.body.message
  };
  transporter.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          console.log(error);
      }
      //Yay!! Email sent
      else {
        console.log("success")
          res.redirect('/');
      }
  });
  transporter.close();
});

module.exports = router;
