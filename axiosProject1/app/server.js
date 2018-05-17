var express = require('express');
var app = express();

app.set (' view engine', 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }))

var session = require('express-session');
app.use(session({secret: 'ssshhhhh'}));
var sess;

const crypto = require('crypto');
const secret = 'abcdefg';

var cors = require('cors');
app.use ( cors() )




//User
var user = require('../router/users');
app.use('/users', user);

//Pasien
var pasien = require('../router/pasien');
app.use('/pasien', pasien)

//Kamar
var kamar = require('../router/kamar');
app.use('/kamar',kamar)

//Status Kamar
var statusKamar = require('../router/status_kamar')
app.use('/statuskamar', statusKamar)

//Hitung Semua
var hitung = require('../router/hitung')
app.use('/hitung', hitung)

var login = require('../router/login')
app.use('/login', login)



app.listen(3020 , console.log('server run'))
