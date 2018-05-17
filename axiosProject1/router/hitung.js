
const router = require('express').Router();

const con = require('../app/databases');

//Hitung Pasien
router.get('/pasien', function ( req, res ) {
    con.query('select count(*) as hitung from pasien', function (err, rows) {
        res.json( rows )
    })
})

//Hitung Kamar
router.get('/kamar' , function ( req, res ){
    con.query(' select count(*) as hitungkamar from kamar' , function ( err , kamar ) {
        res.json( kamar )
    })
})

//hitung kamar terisi
router.get('/kamarterisi' , function ( req, res ){
    con.query( ' select count(*) as hitungterisi from kamar where id_status_kamar = 2 ' , function ( err, kamarterisi ){
        res.json( kamarterisi )
    })
})

//hitung kamar tersedia
router.get('/kamartersedia' , function ( req, res ){
    con.query( ' select count(*) as kamartersedia from kamar where id_status_kamar = 1 ' , function ( err, kamarterisi ){
        res.json( kamarterisi )
    })
})



module.exports = router;