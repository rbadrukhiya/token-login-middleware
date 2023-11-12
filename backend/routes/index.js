var express = require('express');
var router = express.Router();
var user = require('../models/user')
var jwt = require('jsonwebtoken');
var auth = require('../Middleware/middleware')
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata', async function (req, res, next) {
  try {
    var data = await user.create(req.body)
    var token = jwt.sign({ token: data._id }, 'ravi');
    console.log(token);
    res.status(201).json({
      status: 'success',
      data,
      token
    })
  }
  catch (err) {
    res.status(401).json({
      status: 'success'
    })
  }
});



router.post('/logindata',auth , async function (req, res, next) {
  try {
    // var data = await user.find({email: req.body.email})

      console.log('success ');
    // if(data[0].email == req.body.email && data[0].password == req.body.password)
    // {
    //   console.log('true');
    // }
    // else
    // {
    //   console.log('false');
    // }
    // console.log(data[0]);
    // res.status(201).json({
    //   status: 'success',
    //   data,
    // })
  }
  catch (err) {
    res.status(401).json({
      status: 'success'
    })
  }
});


module.exports = router;
