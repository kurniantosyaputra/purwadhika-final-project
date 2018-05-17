import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

class Login extends Component {
    state = {
        nama : ''
    }

    login({ username , password }) {
        axios.post(`http://localhost:3020/login/masuk` , { username , password })
        .then( response => { 
            console.log(response)
            this.setState({
                nama : response.data.username
            })
        })
        this.refs.loginsubmit.reset()
    }

    render() {
        return (
            <div>
                <div class="card card-login mx-auto mt-5">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form ref='loginsubmit'>
                        <div class="form-group">
                            <div class="form-row">
                                <div class="col-md-8">
                                    <label for="exampleInputPassword1">Username</label>
                                    <input class="form-control" type="text" ref="username" placeholder="Username" />
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="col-md-8">
                                    <label for="exampleInputPassword1">Login</label>
                                    <input class="form-control" type="password" ref="password" placeholder="Login" />
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block" onClick={(event) => {
                                event.preventDefault()
                                this.login({
                                    username: this.refs.username.value,
                                    password : this.refs.password.value
                                })
                        }}>
                            Login
                        </button>
                        </form>
                        <div class="text-center">
                            <Link to="/register"><a class="d-block small mt-3">Register an Account</a></Link>
                            {/* <a class="d-block small" href="forgot-password.html">Forgot Password?</a> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Login;  