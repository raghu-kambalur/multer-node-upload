const express = require('express')
const app = express()

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'upload');
     },
    filename: function (req, file, cb) {
        cb(null , file.originalname);
    }
});

const upload = multer({ storage: storage })

app.post('/',upload.single('profile'),(req,res) => {
    try {
        res.send(req.file);
    }catch(err) {
        res.send(400);
    }
})

app.listen(3000,(req,res) => {
    console.log("SERVER IS RUNNING ON PORT 3000")
})