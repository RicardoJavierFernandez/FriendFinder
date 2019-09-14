const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
require('dotenv').config();

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine('handlebars', exphbs({ defaultLayout: 'main'}));


