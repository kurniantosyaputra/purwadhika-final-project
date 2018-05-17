import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';
export default class Users extends Component {
    constructor() {
        super()
        this.state = {
            listuser: [],
            search: ''
        }
    }

    componentWillMount(){
        axios.get('http://localhost:3020/login/listuser')
            .then(response => {
                console.log(response)
                this.setState({ listuser: response.data })
            })
    }

    renderList(){
        return this.state.listuser.map((item, index) =>
        <tr>
            <td>{item.username}</td>
            <td><Link to={`/checkout/${item.id}`}> <button disabled={item.adminapproved} class="btn btn-danger btn-block" onClick={() => this.aktif(`${item.id}`) } type="submit"  > Aktivasi </button></Link></td>
        </tr>
        )   
    }

    aktif(id) {
        axios.get("http://localhost:3020/login/aktifasi/"+id)
            .then(response => { alert("User Sudah Aktif") })
    }

  render() {
    return (
        <div>
             <div class="content-wrapper">
                    <div class="container-fluid">
                        <ol class="breadcrumb">
                            <li className="breadcrumb-item active">List Users</li>
                        </ol>
                        <div class="card mb-3">
                            <div class="card-header">
                                <i class="fa fa-table"></i> Data Table Users</div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" width="100%" cellspacing="0">
                                        <thead className="warna">
                                            <tr>
                                                <th>User Name</th>
                                                <th>Aksi</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderList()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>    
    );
  }
}
