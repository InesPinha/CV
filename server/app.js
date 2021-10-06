let express = require('express');
let app = express();
const path = require('path');
let nodemailer = require('nodemailer'); //https://github.com/ishan-me/React_node_email/blob/master/frontend/src/components/requestAccess.js

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "inespinhamonteiro@gmail.com",
    pass: "soulinda!" 
  }
});

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});


router.post('/access', (req, res, next) => {
  var email = req.body.email
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n message: ${message} `

  var mail = {
    from: name,
    to: name,
    message: subject,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})


const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.info(`server has started on ${PORT}`))