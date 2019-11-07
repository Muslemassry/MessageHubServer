var express = require('express');
var bodyParser = require('body-parser');

var server = express();

server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());
server.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
	res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	next();
  });

server.get('/',function(req,res) {
    console.log('/');
    res.send({msg : 'Hello World!'});
});

server.get('/messageList', function (req, res) {
    console.log('messageList');
    var msgs  = [{
        MessageTitle: "MessageTitle1",  
        MessageText: "MessageText1", 
        MessageId: 1  
      },
      {
        MessageTitle: "MessageTitle2",  
        MessageText: "MessageText2", 
        MessageId: 2  
      }];
      
      res.status(200).send(msgs);
    //res.status(500).send({ auth: false, message: 'Unauthorized action.' }); 
});

server.get('/message/',function(req,res) {
    var msg  = {
        MessageTitle: "MessageTitle"+req.query.messageId,  
        MessageText: "MessageText"+req.query.messageId, 
        MessageId: req.query.messageId  
      }; 
      res.status(200).send(msg);
    //res.status(500).send({ auth: false, message: 'Unauthorized action.' });
});

server.put('/messageUpdate', function (req, res) {
    //console.log('messageUpdate', req.body.MessageTitle);
    var msg  = {
        MessageTitle: req.body.MessageTitle,  
        MessageText: req.body.MessageText, 
        MessageId: 555  
      }; 
  
      res.status(200).send(msg);
    //res.status(500).send({ auth: false, message: 'Unauthorized action.' });

});

server.post('/messageAdd', function (req, res) {
    //console.log('messageAdd', req.body.MessageTitle);
    var msg  = {
        MessageTitle: "MessageTitle"+req.body.MessageTitle,  
        MessageText: "MessageText"+req.body.MessageText, 
        MessageId: req.body.MessageId  
      }; 
      res.status(200).send(msg);
    //res.status(500).send({ auth: false, message: 'Unauthorized action.' });
});

server = server.listen(4201,function() {
    console.log("server has started listening in port 4201");
    // /module.exports(server)
});

module.exports = server;




