import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Register extends Component {

    daftar({ username , password }) {
        axios.post(`http://localhost:3020/login/register` , { username , password })
        .then( response => { alert("Data Sudah Tersimpan") } )
    }


    render() {
        return (
            <div>
            <div class="card card-register mx-auto mt-5">
                <div class="card-header">Register an Account</div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <div class="form-row">
                        <div class="col-md-6">
                            <label for="exampleInputName">Username</label>
                            <input class="form-control" id="exampleInputName" type="text" aria-describedby="nameHelp" ref="username" placeholder="Username"/>
                        </div>
                        <div class="col-md-6">
                            <label for="exampleInputLastName">Password</label>
                            <input class="form-control" id="exampleInputLastName" type="password" aria-describedby="nameHelp" ref="password" placeholder="Password"/>
                        </div>
                        </div>
                    </div>
                    <div class="form-group">
                    </div>
                    <button type="submit" class="btn btn-primary btn-block" onClick={(event) => {
                                event.preventDefault()
                                this.daftar({
                                    username: this.refs.username.value,
                                    password : this.refs.password.value
                                })
                            }}>Register</button>
                    </form>
                    <div class="text-center">
                    <Link to="/login"><a class="d-block small mt-3">Login Page</a></Link>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Register;  