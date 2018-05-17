
const router = require('express').Router();

const con = require('../app/databases');

//Get
router.get('/', function ( req, res ) {
    con.query(`select * from pasien where nama_pasien LIKE '%${req.query.namapasien}%' `, function (err, rows) {
        res.json( rows )
    })  
})

//Tambah
router.post('/inputpasien', function ( req, res ) {
    let date = new Date;
    let hitungUmur = (tanggal, bulan, tahun) => {
        let lahir = new Date(tahun, bulan, tanggal)
        return (date - lahir) / 31536000000
    }
    let lahir = req.body.tanggal_lahir.split('-')
    con.query('insert into pasien set ? ' , {
        id : date.getMonth().toString() + date.getDate().toString() + date.getHours().toString() + date.getSeconds().toString() + Math.floor(Math.random() * 100).toString(),
        nama_pasien : req.body.nama_pasien,
        tanggal_lahir : req.body.tanggal_lahir,
        umur : hitungUmur(lahir[2], lahir[1], lahir[0]),
        agama : req.body.agama,
        jenis_kelamin : req.body.jenis_kelamin,
        alamat : req.body.alamat,
        telepon : req.body.telepon

    } )
    res.json(req.body)
})


//Hapus 
router.get('/hapus/:id' , function ( req, res ) {
    con.query('delete from pasien where ? ' , {
        id : req.params.id
    })
    res.send('Data Terhapus')
})

//Update
router.post('/update/:id' , function (req,res) {
    con.query("update pasien set ? where ?" , 
    [
        {
            nama_pasien : req.body.nama_pasien,
            alamat : req.body.alamat,
            telepon : req.body.telepon
        },
        {
            id : req.params.id
        }
    ])
    res.send('Data Ter Update')
})

///////////////////////////////////////PROSES PEMESANAN////////////////////////////////////////////////////////


module.exports = router;