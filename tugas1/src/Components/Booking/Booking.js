import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'


class Booking extends Component {
    constructor() {
        super()
        this.state = {
            booking: [],
            search: '',
            cariPasien : ''
        }
    }

    componentWillMount() {
        this.search('')
    }

    search(keyword) {
        axios.get('http://localhost:3020/kamar/listpemesanan?namapasien=' + keyword)
            .then(ambildata => {
                console.log(ambildata)
                this.setState({ booking: ambildata.data })
            })
    }

    checkout(id) {
        axios.post("http://localhost:3020/kamar/checkout/"+id)
            .then(response => {  })
    }

    renderBooking() {   
        return this.state.booking.map((item, index) =>
            <tr>
                <td>{item.nama_pasien}</td>
                <td>{item.umur}</td>
                <td>{item.nama_ruangan}</td>
                <td>{item.nomor_kamar}</td>
                <td>{item.penanggung_jawab}</td>
                <td>{item.tanggal_masuk}</td>
                <td><a class="btn btn-primary btn-block " >Edit</a></td><td><Link to={`/checkout/${item.id}`}><button class="btn btn-danger btn-block" onClick={() => this.checkout(`${item.id}`) } type="submit"> CheckOut </button></Link></td>
            </tr>
        )
    }

    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item active">List Booking</li>
                        </ol>
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fa fa-table"></i> Data Table  Booking</div>
                            <div class="col-md-5">
                                <label for="exampleInputName"></label>
                                <input type='text' class="form-control" ref='search' onChange={(event) => event.target.value == '' ? this.search('') : this.search(event.target.value)}  placeholder="Cari Nama Pasien"/>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                        <thead className="warna">
                                            <tr>
                                                <th>Nama Pasien</th>
                                                <th>Umur</th>
                                                <th>Nama Ruangan</th>
                                                <th>Nomor Kamar</th>
                                                <th>Penanggung Jawab</th>
                                                <th>Tanggal Masuk </th>
                                                <th colSpan="2">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderBooking()}
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

export default Booking;  