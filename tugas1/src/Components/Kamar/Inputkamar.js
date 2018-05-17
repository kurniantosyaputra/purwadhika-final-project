import React, {Component} from 'react'  ;
import axios from 'axios'

class Inputkamar extends Component {


    // Funsgi Untuk Menambahkan Data
    tambahKamar({ tipe , nama_ruangan , nomor_kamar }) {
        axios.post(`http://localhost:3020/kamar/inputkamar`, { tipe , nama_ruangan , nomor_kamar })
        .then( response => { alert('Kamar Telah Ditambahkan')})
    }

    render() {
        return (
            <div>
            <div class="content-wrapper">
                <div class="container-fluid">
                    <ol class="breadcrumb">
                        <li className="breadcrumb-item active"> Input Kamar</li>
                    </ol>
                    <div class="card-header">Form Input Kamar</div>
                    <div class="card-body">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-3">
                                    <label for="exampleInputName">Tipe Kamar</label>
                                    <input class="form-control" type="text" ref="tipe" required placeholder="Enter Tipe Kamar" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-4">
                                    <label for="exampleInputPassword1">Nama Ruangan</label>
                                    <input class="form-control" type="text" ref="nama_ruangan" placeholder="Nama Ruangan" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-4">
                                    <label for="exampleInputPassword1">Nomor Ruangan</label>
                                    <input class="form-control" type="text" ref="nomor_kamar" placeholder="Nomor Ruangan" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" onClick={(event) => {
                            event.preventDefault()
                            this.tambahKamar({
                                tipe: this.refs.tipe.value,
                                nama_ruangan: this.refs.nama_ruangan.value,
                                nomor_kamar: this.refs.nomor_kamar.value,
                            })
                            this.refs.tipe.value = ""
                            this.refs.nama_ruangan.value=""
                            this.refs.nomor_kamar.value=""
                        }}>Register</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }

}

export default Inputkamar;  