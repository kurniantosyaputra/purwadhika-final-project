import React, {Component} from 'react'  ;
import axios from 'axios' ;

class Inputbooking extends Component {
    state = {
        listkamar : [],
        pasien: 0
    }



    componentWillMount(){
        axios.get('http://localhost:3020/kamar/tersedia')
        .then ( response => {
            this.setState({listkamar : response.data})
            console.log(response)
        })
    }

    search(keyword) {
        axios.get('http://localhost:3020/pasien?namapasien=' + keyword)
            .then(ambildata => {
                // console.log(ambildata)
                this.setState({ pasien: ambildata.data[0].id })
            })
    }

    renderBooking(id) {
        return this.state.listkamar.map((item, index) =>
            <option selected key={index} value={item.id}> {item.nomor_kamar} &emsp;|&emsp;{item.nama_ruangan}
            </option>
        )
    }

    tambahBooking({ id_pasien , id_kamar , penanggung_jawab , tanggal_masuk }) {
        axios.post(`http://localhost:3020/kamar/pesankamar`, { id_pasien , id_kamar , penanggung_jawab , tanggal_masuk })
        .then( response => { alert('Data Telah Masuk')})
        .catch(err => alert('Data Sudah Ada'))
    }

    render() {
        return (
		<div>	
            <div class="content-wrapper"> 
                <div class="container-fluid">
                    <ol class="breadcrumb">
                    </ol>
                    <div class="card-body">
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-3">
                                Pilih Kamar :&nbsp; 
                                <select  name="booking" ref="id_kamar">
                                    {this.renderBooking()}
                                </select> 
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-4">
                                    <label for="exampleInputPassword1">Nama Pasien</label>
                                    <input onChange={event => this.search(event.target.value)} class="form-control" type="text" ref="nama_pasien" placeholder="Nama Pasien" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-4">
                                    <label for="exampleInputPassword1">Penanggung Jawab</label>
                                    <input class="form-control" type="text" ref="penanggung_jawab" placeholder="Penanggung Jawab" />
                                </div>
                                <div class="col-md-4">
                                    <label for="exampleInputPassword1">Tanggal Masuk</label>
                                    <input class="form-control" type="date" ref="tanggal_masuk" placeholder="Tanggal Masuk" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" onClick={(event) => {
                            event.preventDefault()
                            this.tambahBooking({
                                id_kamar : this.refs.id_kamar.value,
                                id_pasien: this.state.pasien,
                                penanggung_jawab: this.refs.penanggung_jawab.value,
                                tanggal_masuk : this.refs.tanggal_masuk.value
                            })
                            this.refs.id_kamar.value = ''
                            this.refs.nama_pasien = ''
                            this.refs.penanggung_jawab.value = ''
                            this.refs.tanggal_masuk.value = ''
                        }}>Register</button>
                    </div>
                </div>   
		    </div>	
            	
        </div>
        )
    }

}

export default Inputbooking;  