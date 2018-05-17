import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


class Pasien extends Component {
    constructor() {
        super()
        this.state = {
            pasien: [],
            search: ""
        }
    }


    search(keyword) {
        axios.get('http://localhost:3020/pasien?namapasien=' + keyword)
            .then(ambildata => {
                // console.log(ambildata)
                this.setState({ pasien: ambildata.data })
            })
    }

    componentWillMount(){
        this.search('')
    }    

    hapus(id) {
        axios.get("http://localhost:3020/pasien/hapus/"+id)
            .then(response => { alert("Data Sudah Terhapus") })
    }

    renderPasien() {
        return this.state.pasien.map((item, index) =>
            <tr key={index}>
                <td>{item.nama_pasien}</td>
                <td>{item.umur} Th</td>
                <td>{item.jenis_kelamin}</td>
                <td>{item.agama}</td>
                <td>{item.alamat}</td>
                <td>{item.telepon}</td>
                <td><a class="btn btn-primary btn-block " >Edit</a></td><td><Link to={`/hapus/${item.id}`}><button type="submit" onClick={() => this.hapus(`${item.id}`)} class="btn btn-danger btn-block"> Delete </button></Link></td>
            </tr>
        )
    }
    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item active">List Pasien</li>
                        </ol>
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fa fa-table"></i> Data Table Pasien</div>
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
                                                <th>Jenis Kelamin</th>
                                                <th>Agama</th>
                                                <th>Alamat</th>
                                                <th>Telepon</th>
                                                <th colSpan="2">Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderPasien()}
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

export default Pasien;  