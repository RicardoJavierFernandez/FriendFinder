const express = require('express');
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Enable ability to serve static files
// http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express
app.use('/static', express.static('app'));

require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

app.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});


