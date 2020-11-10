
// Import dependencies
var createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');


//Express session
var session = require('express-session');
var FileStore = require('session-file-store')(session);

// Passport
var passport = require('passport');

//Token
var config = require('./config');

// Routes
var usersRouter = require('./controllers_MYSQL/user.control');
var SpinnerRouter = require('./controllers_MYSQL/spinner.control');
var ResultsRouter = require('./controllers_MYSQL/results.control');
var uploadRouter = require('./routes/uploadRouter');
var headerFooterRouter = require('./controllers_MYSQL/headerFooter.control');
var centerImageRouter = require('./controllers_MYSQL/centerImage.control');

// Mongoose Database
const mongoose = require('mongoose');

// Create a new express application named 'app'
const app = express();

// Set our backend port to be either an environment variable or port 5000
const port = process.env.PORT || 5000;

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
    console.log(`Request_Endpoint: ${req.method} ${req.url}`);
    next();
});

// Configure the bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Configure the CORs middleware
app.use(cors());

// Require Route
const api = require('./routes/routes');

app.use(passport.initialize());
app.use(passport.session());


// Configure app to use route
app.use('/api/v1/', api);    
app.use('/api/v1/initialStatus', require('./controllers_MYSQL/user.control'));

app.use('/users', usersRouter);

app.use('/api/v1/spinner', SpinnerRouter);
app.use('/api/v1/results', ResultsRouter);
app.use('/api/v1/imageUpload', uploadRouter);
app.use('/api/v1/headerFooter', headerFooterRouter);
app.use('/api/v1/centerImage', centerImageRouter);


// This middleware informs the express application to serve our compiled React files

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    /*
    const cloudUrl = config.mongoCloudUrl;
    const connect = mongoose.connect(cloudUrl);

    connect.then((db) => {
        console.log('Conected correctly to server');
      }, (err) => {console.log(err);});
    */

    app.use(express.static(path.join(__dirname, 'client/spinner-app/dist/spinner-app')));

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'client/spinner-app/dist/spinner-app', 'index.html'));
    });
} else {
    /*
    const url = config.mongoUrl;
    const connect = mongoose.connect(url);

    connect.then((db) => {
    console.log('Conected correctly to server');
    }, (err) => {console.log(err);});
*/
};

// Catch any bad requests
app.get('*', (req, res) => {
    res.status(200).json({
        msg: 'Catch All'
    });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({
        message: err.message,
        error: err
        });
  });

// Configure our server to listen on the port defiend by our port variable
app.listen(port, () => console.log(`BACK_END_SERVICE_PORT: ${port}`));