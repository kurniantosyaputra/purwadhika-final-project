import React, { Component } from 'react';
import Navbarkiri from './Components/SideBar/SideBar'
import Menudashboard from './Components/Menudasboard/Menudasboard'
import {Link, Route, Redirect} from 'react-router-dom';
import Kamar from './Components/Kamar/Kamar';
import Inputkamar from './Components/Kamar/Inputkamar';
import Booking from './Components/Booking/Booking';
import InputBooking from './Components/Booking/Inputbooking';
import Pasien from './Components/Pasien/Pasien';
import Inputpasien from './Components/Pasien/Inputpasien'
import Login from './Components/Login/login'
import Register from './Components/Login/Register'
import Users from './Components/Login/Users'


class App extends Component {

  state = {
    data : ''
  }



  setter = nama => {
    console.log(nama)
    this.setState({nama})
  }

  render() {
    return (
    <div>  
        <Navbarkiri/>
        <Route exact path="/" component={Menudashboard}/>
        <Route path="/user" component={Users}/>
        <Route path="/login" component={Login} nama={this.setter.bind(this)}/>
        <Route path="/register" component={Register}/>
        <Route path="/kamar" component={Kamar}/>
        <Route path="/inputkamar" component={Inputkamar}/>
        <Route path="/pasien" component={Pasien}/>
        <Route path="/inputpasien" component={Inputpasien}/>
        <Route path="/booking" component={Booking}/>
        <Route path="/inputbooking" component={InputBooking}/>
    </div>       
    );
  }
}


export default App;
