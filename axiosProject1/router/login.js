const router = require('express').Router();

const con = require('../app/databases');
const crypto = require('crypto');


let enkripsi = (password) => {
    return crypto
    .createHmac('sha256','abcde')
    .update(password)
    .digest('hex')
}

router.post('/masuk' , function ( req, res ) {
    let username = req.body.username;
    let password = enkripsi(req.body.password);
    con.query( 'select * from users where ? and ? and adminapproved=1' , [{username}, {password}] , function ( err, user) {
        if ( user.length > 0 ) {
            req.session.userdata = {
                role : user[0].role,
                userid   : user[0].id,
                username : user[0].username,
                nama  : user[0].nama,
            };
                req.session.save();
                res.json(req.session.userdata)
        } else {
            res.json("Username dan Password Salah / Belum Aktifasi")
        }
    })
})


router.post('/register' , function ( req, res) {
    con.query(' select * from users where username = ? ' , [req.body.username] , function ( err , datauser ) {
        if ( datauser.length > 0 ) {
            res.send(' Data Sudah Terdaftar ')
        } else {
            con.query('insert into users set ? ' , {
                role : 1,
                password : enkripsi(req.body.password),
                username : req.body.username,
                adminapproved : false
            })
            res.json(req.body)
        }

    })
})

//Update Data
router.post('/update/:id' , function (req,res) {
    con.query("update users set ? where ?" , 
    [
        {
            role : req.body.role,
            password : enkripsi(req.body.password),
            username : req.body.username  ,
            adminapproved : req.body.adminapproved  
        },
        {
            id : req.params.id
        }
    ])
    res.send('Data Ter Update')
})

//aktifasi Users
router.get('/aktifasi/:id' , function (req, res ) {
    con.query(' update users set ? where ?  ' ,
    [
        {
            adminapproved : 1
        },
        { id : req.params.id }
    ])
    res.send('Data Sudah Aktif')
})

//List User
router.get('/listuser' , function ( req, res ){
    con.query(' select * from users ' , function ( err , rows ) {
        res.json(rows)
    })
})

module.exports = router;