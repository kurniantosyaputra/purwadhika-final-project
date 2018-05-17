
const router = require('express').Router();

const con = require('../app/databases');

//Get
router.get('/', function ( req, res ) {
    con.query('select * from status_kamar', function (err, rows) {
        res.json( rows )
    })
})

//Tambah Data
router.post('/tambah', function ( req, res ) {
    con.query('insert into status_kamar set ? ' , {
        id : req.body.id,
        keterangan : req.body.keterangan
    } )
    res.send('data masuk')
})

// //Hapus Data
router.get('/hapus/:id' , function ( req, res ) {
    con.query('delete from status_kamar where ? ' , {
        id : req.params.id
    })
    res.send('Data Terhapus')
})

// //Update Data
router.post('/update/:id' , function (req,res) {
    con.query("update status_kamar set ? where ?" , 
    [
        {
            keterangan : req.body.keterangan
        },
        {
            id : req.params.id
        }
    ])
    res.send('Data Ter Update')
})


module.exports = router;