const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },  

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
});

const imageFileFilter = (req, file, cb) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|PNG|gif)$/)) {
        return cb(new Error('You can upload only image files!'), false);
    }
    else {
        cb(null, true);
    }
};

const upload = multer({ storage: storage, fileFilter: imageFileFilter});

const uploadRouter = express.Router();

uploadRouter.use(bodyParser.json());

uploadRouter.route('/')
.get(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('GET operation not supported on /imageUpload');
})
.post(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin,
    upload.single('imageFile'), (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(req.file);
})
.put(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /imageUpload');
})
.delete(authenticate.verifyOrdinaryUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /imageUpload');
});

// Return the required image
uploadRouter.route('/:imageName')
    .get((req, res, next) => {
        var fileUrl = req.params.imageName;
        var filePath = path.resolve('./public/images/' + fileUrl);

        fs.exists(filePath, (exist) => {
            if (!exist) {
                res.statusCode = 404;
                res.setHeader('Content-Type', 'application/json');
                res.end('file ' + fileUrl + ' not found')
                return
            }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'image');
            fs.createReadStream(filePath).pipe(res);
        })
    })
    .post(
        upload.single('imageFile'), (req, res) => {
            res.statusCode = 403;
            res.end('Post operation not supported on /imageUpload' + req.params.imageName);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /imageUpload' + req.params.imageName );
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE operation not supported on /imageUpload' + req.params.imageName);
    });
module.exports = uploadRouter;