var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next){
  var mailOpts, transporter;
  transporter = nodemailer.createTransport();
 
  mailOpts = {
      from: req.body.name + ' &lt;' + req.body.email, //grab form data from the request body object
      to: 'sampsunny1996@gmail.com',
      subject: req.body.subject,
      text: req.body.message
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
