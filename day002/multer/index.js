var express = require('express');
var path = require('path');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'upload'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.post('/profile', upload.single('avatar'), function (req, res, next) {
  console.log(req.file)
  console.log(req.body)
  res.end('submit form success!');
});

app.listen(3000);