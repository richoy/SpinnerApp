const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');
const passport = require('passport');
const authenticate = require('../authenticate');

const ChangePasswordController = require('../controllers/controllers');

const router = express.Router();
router.use(bodyParser.json());

/* GET users listing. */
router.get('/', authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    User.find({})
      .then( (users) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(users);
      }, err => next(err))
      .catch((err) => next(err))
});

router.post('/signup', (req, res, next) => {
    User.register(new User({username: req.body.username}), 
      req.body.password, (err, user) => {
      if(err) {
        res.statusCode = 500;
        res.setHeader('Content-Type', 'application/json');
        res.json({err: err});
      }
      else {
        if(req.body.firstname)
          user.firstname = req.body.firstname;
        if(req.body.lastname) 
          user.lastname = req.body.lastname;
        user.save((err, user) => {
          if(err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err: err});
            return;
          }
          passport.authenticate('local')(req, res, () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json({success: true, status: 'Registration Successful!'});
          });
        });
      }
    });
});

  router.post('/login', passport.authenticate('local'), (req, res) => {
  
    var token = authenticate.getToken({_id: req.user._id});
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({success: true, token: token, 
      status: 'You are successfully logged in!'});
});

//Logout

router.get('/logout', (req, res) => {
      req.logout();
      res.redirect("/");
});
  
module.exports = router;
  

//Reset Password

router.route('/resetPassword')
  .post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res) => {  
    let usernameVariable = req.body.username;
    User.findOne({username:usernameVariable}, (err, user) => {
      if(err){
        res.json({success: false, message: 'Err'});
      }
      else {
        if(!user) {
          res.json({success: false, message: 'User not Found'});
        }
        else {
          user.changePassword(req.body.oldpassword, req.body.newpassword, (err) => {
            if(err){
              if(err.name === 'IncorrectPasswordError') {
                res.json({success: false, message: 'Incorrect Password'});
              }
              else {
                res.json({success: false, message: 'Something went wrong, please try again'});
              }
            }
            else {
              res.json({success: true, message: 'You password has been changed'});
            }
          });
        }
      }
    });

  });
