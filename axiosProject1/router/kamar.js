const router = require('express').Router();

const con = require('../app/databases');

//Get kamar
router.get('/', function (req, res) {
    con.query(
        ` select kamar.id,tipe,nama_ruangan,nomor_kamar,keterangan  from status_kamar join 
        kamar ON status_kamar.id = kamar.id_status_kamar 
        where id_status_kamar=1 and nama_ruangan LIKE '%${req.query.keterangan}%' `,
        [req.query.namaruangan],
        function (err, rows2) {
            res.json(rows2)
        }
    )
})

//Tambah Data
router.post('/inputkamar', function (req, res) {
    con.query(' insert into kamar set ?  ', {
        id_status_kamar: 1,
        tipe: req.body.tipe,
        nama_ruangan: req.body.nama_ruangan,
        nomor_kamar: req.body.nomor_kamar
    })
    res.json(req.body)
})


//Hapus Data
router.get('/hapuskamar/:id ', function (req, res) {
    con.query(' delete from kamar where ? ', {
        id: req.params.id
    })
    res.send('Data Terhapus')
})

//Update Data
router.post('/updatekamar/:id ', function (req, res) {
    con.query("update kamar set ? where ?",
        [
            {
                id_status_kamar: req.body.id_status_kamar,
                tipe: req.body.tipe,
                nama_ruangan: req.body.nama_ruangan,
                nomor_kamar: req.body.nomor_kamar
            },
            { id: req.params.id }
        ])
    res.send('Data Ter Update')
})

////// Proses Pemesanan ( pesan kamar, booking kamar dan check out)
//Ambil data pemesanan
router.get('/listpemesanan', function (req, res) {
    if (req.query.namapasien == undefined) {
        con.query(`select pesan_kamar.id,nama_pasien,umur,jenis_kelamin,
                nama_ruangan,nomor_kamar,keterangan,
                penanggung_jawab,tanggal_masuk from status_kamar 
                join kamar  ON status_kamar.id = kamar.id_status_kamar 
                join pesan_kamar ON kamar.id = pesan_kamar.id_kamar 
                join pasien ON pasien.id = pesan_kamar.id_pasien`, function (err, datapemesanan) {
                res.json(datapemesanan)
            })
    } else {
        con.query(`select pesan_kamar.id,nama_pasien,umur,jenis_kelamin,
                nama_ruangan,nomor_kamar,keterangan,
                penanggung_jawab,tanggal_masuk from status_kamar 
                join kamar  ON status_kamar.id = kamar.id_status_kamar 
                join pesan_kamar ON kamar.id = pesan_kamar.id_kamar 
                join pasien ON pasien.id = pesan_kamar.id_pasien where nama_pasien LIKE '%${req.query.namapasien}%'  `, function (err, datapemesanan1) {
                res.json(datapemesanan1)
            })
    }

})

//Input Pesan kamar 
router.post('/pesankamar', function (req, res) {
    con.query(' select id_pasien from pesan_kamar where id_pasien = ? ', [req.body.id_pasien], function (err, datapemesanan) {
        if (datapemesanan.length > 0) {
            res.send(' Data Sudah Terisi ')
        } else {
            con.query(' insert into pesan_kamar set ? ', {
                id_pasien: req.body.id_pasien,
                id_kamar: req.body.id_kamar,
                penanggung_jawab: req.body.penanggung_jawab,
                tanggal_masuk: req.body.tanggal_masuk
            })

            con.query('update kamar set ? where ?',
                [
                    { id_status_kamar: 2 },
                    { id: req.body.id_kamar }
                ]
            )
            res.send('data masuk')
        }
    })
})

// Check Out
router.post('/checkout/:id', function (req, res) {
    con.query(`select nama_pasien,nama_ruangan,nomor_kamar,tanggal_masuk,pesan_kamar.id,pesan_kamar.id_kamar as id_kam
               from status_kamar join kamar  ON 
               status_kamar.id = kamar.id_status_kamar 
               join pesan_kamar ON kamar.id = pesan_kamar.id_kamar 
               join pasien ON pasien.id = pesan_kamar.id_pasien where pesan_kamar.id = ${req.params.id}`,
        function (err, rows) {
            con.query(' insert into histori_kamar set ? ', {
                nama_pasien: rows[0].nama_pasien,
                nama_ruangan: rows[0].nama_ruangan,
                nomor_kamar: rows[0].nomor_kamar,
                tanggal_masuk: rows[0].tanggal_masuk
            })
            con.query(' update kamar set ? where ? ',
                [
                    { id_status_kamar: 1 },
                    { id: rows[0].id_kam }
                ])
            con.query(' delete from pesan_kamar where ? ', {
                id: req.params.id
            })
        })
    res.json("Data Sudah Masuk Ke Histori Kamar")
})

//List Check Out
router.get('/listcheckout', function (req, res) {
    con.query(`select * from histori_kamar where nama_pasien LIKE '%${req.query.namapasien}%' ` , function (err, rows) {
        res.json(rows)
    })
})

//Get kamar
router.get('/tersedia', function (req, res) {
    con.query(
        ` select kamar.id,tipe,nama_ruangan,nomor_kamar,keterangan  from status_kamar join 
        kamar ON status_kamar.id = kamar.id_status_kamar 
        where id_status_kamar=1`,
        [req.query.namaruangan],
        function (err, rows2) {
            res.json(rows2)
        }
    )
})

module.exports = router;