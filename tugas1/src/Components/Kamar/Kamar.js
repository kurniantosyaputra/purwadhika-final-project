import React, { Component } from 'react';
import axios from 'axios'
import './kamar.css'


class Kamar extends Component {
    constructor() {
        super()
        this.state = {
            kamartersedia: [],
            search: ''
        }
    }

    search(keyword) {
        axios.get('http://localhost:3020/kamar?keterangan=' + keyword)
            .then(ambildata => {
                this.setState({ kamartersedia: ambildata.data })
            })
    }

    renderKamar() {
        return this.state.kamartersedia.map((item, index) =>
            <tr key={index}>
                <td>{item.tipe}</td>
                <td>{item.nama_ruangan}</td>
                <td>{item.nomor_kamar}</td>
                <td >{item.keterangan}</td>
                <td><a class="btn btn-primary btn-block " >Edit</a></td><td><a class="btn btn-danger btn-block">Hapus</a></td>
            </tr>
        
        )
    }

    componentWillMount() {
        this.search('')
    }

    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item active">List Kamar</li>
                        </ol>
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fa fa-table"></i> Data Table  Kamar</div>
                            <div class="col-md-5">
                                <label for="exampleInputName"></label>
                                <input type='text' class="form-control" ref='search' onChange={(event) => event.target.value == '' ? this.search('') : this.search(event.target.value)} placeholder="Cari Kamar Berdasarkan khadijah/fathimah" />
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                        <thead className="warna">
                                            <tr>
                                                <th>Tipe</th>
                                                <th>Nama Ruangan</th>
                                                <th>Nomor Ruangan</th>
                                                <th>Keterangan</th>
                                                <th colSpan="2">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderKamar()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Kamar;  