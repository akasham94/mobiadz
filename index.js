const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');
var cors = require('cors');
var jsonParser = bodyParser.json();
const app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
})
// Subscribe route
var arr = ['a', 'b', 'c', 'd', 'e', 'f' ];
var addr = ' ';
app.post('/subscribejson', jsonParser, (req, res) => {
  console.log(req.body);
  //console.log(req.headers);
  const permission = req.body.permission
  if(permission == 'denied')
  {
    for(var i in arr)
    {
      addr = arr[i] +'.';
      res.redirect(addr + "localhost:5000");
    }
  }
});
app.set('port', process.env.PORT || 5000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
