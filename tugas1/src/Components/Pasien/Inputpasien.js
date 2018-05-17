import React, { Component } from 'react';
import axios from 'axios';



class Inputpasien extends Component {

    tambahpasien({ nama_pasien, tanggal_lahir, agama, jenis_kelamin, alamat, telepon }) {
        axios.post(`http://localhost:3020/pasien/inputpasien`, { nama_pasien, tanggal_lahir, agama, jenis_kelamin, alamat, telepon })
            .then(response => { alert (" Data Berhasil Disimpan") })
    }


    render() {
        return (
            <div>
                <div class="content-wrapper">
                    <div class="container-fluid">
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item active"> Input Pasien</li>
                        </ol>
                        <div class="card-header">Form Register an Patient</div>
                        <div class="card-body">
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col-md-4">
                                        <label for="exampleInputName">Nama Lengkap</label>
                                        <input class="form-control" type="text" ref="nama_pasien" required placeholder="Enter Nama Lengkap" />
                                    </div>
                                    <div class="col-md-3">
                                        <label for="exampleInputLastName">Tanggal Lahir</label>
                                        <input class="form-control" type="date" ref="tanggal_lahir" required placeholder="Tanggal Lahir" />
                                    </div>
                                    <div class="col-md-2">
                                        <label for="exampleInputLastName">Agama</label>
                                        <input class="form-control" type="text" ref="agama" required placeholder="Agama" />
                                    </div>
                                    <div class="col-md-3">
                                    <label for="exampleInputLastName">Jenis Kelamin</label>
                                    <input type="text" hidden/>
                                    <div className="form-row">
                                        <select  name="nama" ref="jenis_kelamin"> 
                                            <option ref="jenis_kelamin" value="Laki-Laki">Laki-Laki</option>
                                            <option ref="jenis_kelamin" value="Perempuan">Perempuan</option>
                                        </select>     
                                    </div>    
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <label for="exampleInputPassword1">Nomor Hp</label>
                                        <input class="form-control" type="number" ref="telepon" placeholder="Nomor Hp" />
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-row">
                                    <div class="col-md-9">
                                        <label for="exampleInputPassword1">Alamat</label>
                                        <input class="form-control" type="text" ref="alamat" placeholder="Alamat" />
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" onClick={(event) => {
                                event.preventDefault()
                                this.tambahpasien({
                                    nama_pasien: this.refs.nama_pasien.value,
                                    tanggal_lahir: this.refs.tanggal_lahir.value,
                                    agama: this.refs.agama.value,
                                    jenis_kelamin: this.refs.jenis_kelamin.value,
                                    alamat: this.refs.alamat.value,
                                    telepon: this.refs.telepon.value
                                })
                                this.refs.nama_pasien.value=""
                                this.refs.tanggal_lahir.value=""
                                this.refs.agama.value=""
                                this.refs.jenis_kelamin.value=""
                                this.refs.alamat.value=""
                                this.refs.telepon.value=""
                            }}>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Inputpasien;  