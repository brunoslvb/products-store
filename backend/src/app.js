const express   = require('express');
const app       = express();
const bodyParser = require('body-parser');
const cors      = require('cors');

const indexRoute = require('./Routes/index');

app.use(cors());
app.use(bodyParser.json());

app.use('/', indexRoute);

app.listen('3333', () => {
    console.log('Server listening in http://localhost:3333');
});