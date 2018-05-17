import React, { Component } from 'react';
import axios from 'axios'
import './menudash.css'

class menudasboard extends Component {
    constructor() {
        super()
        this.state = {
            pasien: [],
            kamar: [],
            kamarterisi: [],
            kamartersedia: [],
            historikamar: [],
            search : ""
        }
    }

    componentWillMount() {
        axios.get('http://localhost:3020/hitung/pasien')
            .then(response => {
                this.setState({ pasien: response.data[0].hitung })
            }),
            axios.get('http://localhost:3020/hitung/kamar')
                .then(getdatakamar => {
                    this.setState({ kamar: getdatakamar.data[0].hitungkamar })
                }),
            axios.get('http://localhost:3020/hitung/kamarterisi')
                .then(getterisi => {
                    this.setState({ kamarterisi: getterisi.data[0].hitungterisi })
                }),
            axios.get('http://localhost:3020/hitung/kamartersedia')
                .then(gettersedia => {
                    this.setState({ kamartersedia: gettersedia.data[0].kamartersedia })
                }),
            this.search('')
    };


    search(keyword) {
        axios.get('http://localhost:3020/kamar/listcheckout?namapasien=' + keyword)
            .then(ambildata => {
                this.setState({ historikamar: ambildata.data })
                console.log(keyword)
            })
    }


    renderHistori() {
        return this.state.historikamar.map((item, index) =>
            <tr key={index}>
                <td>{item.nama_pasien}</td>
                <td>{item.nama_ruangan}</td>
                <td>{item.nomor_kamar}</td>
                <td>{item.tanggal_masuk}</td>
                <td>{item.tanggal_keluar}</td>
                <td className="style3">{item.status_kamar}</td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-itemtive">My Dashboard</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-primary o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i className="fa fa-fw fa-bed"></i>
                                        </div>
                                        <div className="mr-5"> {this.state.kamar} Bed </div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Jumlah Kamar</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-warning o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i className="fa fa-fw fa-bed"></i>
                                        </div>
                                        <div className="mr-5"> {this.state.kamarterisi} Bed</div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left">Jumlah Kamar Terisi</span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-success o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i className="fa fa-fw fa-shopping-cart"></i>
                                        </div>
                                        <div className="mr-5"> {this.state.kamartersedia} Bed </div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left"> Jumlah Kamar Tersedia </span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-3">
                                <div className="card text-white bg-danger o-hidden h-100">
                                    <div className="card-body">
                                        <div className="card-body-icon">
                                            <i className="fa fa-fw fa-users"></i>
                                        </div>
                                        <div className="mr-5">{this.state.pasien} Pasien </div>
                                    </div>
                                    <a className="card-footer text-white clearfix small z-1" href="#">
                                        <span className="float-left"> Total Pasien </span>
                                        <span className="float-right">
                                            <i className="fa fa-angle-right"></i>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Histori Kamar</li>
                        </ol>
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fa fa-table"></i> Data Table Histori Pemesanan Kamare</div>
                            <div class="col-md-5">
                                <label for="exampleInputName"></label>
                                <input type='text' class="form-control" ref='search' onChange={(event) => event.target.value == '' ? this.search('') : this.search(event.target.value)}  placeholder="Cari Nama Pasien"/>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Nama Pasien</th>
                                                <th>Nama Ruangan</th>
                                                <th>Nomor Kamar</th>
                                                <th>Tanggal Masuk</th>
                                                <th>Tanggal Keluar</th>
                                                <th>Status Kamar</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderHistori()}
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

export default menudasboard;
