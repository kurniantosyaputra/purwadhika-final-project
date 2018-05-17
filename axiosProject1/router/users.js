
const router = require('express').Router();

const con = require('../app/databases');

router.get('/', function ( req, res ) {
    con.query('select * from users', function (err, rows) {
        res.json( rows )
    })
})


//Hapus Data
router.get('/hapus/:id' , function ( req, res ) {
    con.query('delete from users where ? ' , {
        id : req.params.id
    })
    res.send('Data Terhapus')
})

//Update Data
router.post('/update/:id' , function (req,res) {
    con.query("update users set ? where ?" , 
    [
        {
            role : 1,
            password : req.body.password,
            username : req.body.username    
        },
        {
            id : req.params.id
        }
    ])
    res.send('Data Ter Update')
})



module.exports = router;