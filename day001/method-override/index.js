var express = require('express');
var methodOverride = require('method-override');

var app = express();

// override with POST having ?_method=verbs(GET/DELETE/PUT)
app.use(methodOverride('_method'));

app.post('/', (req, res) => {
  res.send("Post return.");
});

app.get('/', (req, res) => {
  res.send("Get return.");
});

app.delete('/', (req, res) => {
  res.send("Delete return.");
});

app.put('/', (req, res) => {
  res.send("Put return.");
});

app.listen(8080);

// post http://localhost:8080?_method=delete 
// return: "Delete return".

// post http://localhost:8080?_method=get 
// return: "Get return".

// post http://localhost:8080?_method=put 
// return: "Put return".