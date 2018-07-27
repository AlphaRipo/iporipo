// var 
//     express = require('express');
//     routes = require('./routes/routes');
//     bodyParser = require('body-parser');
    

//     var 
//     app = express();
//     app.use(routes);
//     app.use(bodyParser.json());
var express = require('express');
cors = require('cors');
routes = require('./routes/routes');
bodyParser = require('body-parser');


var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(routes);
    
    app.listen(3333, function(){
        console.log('server is running');
    })

