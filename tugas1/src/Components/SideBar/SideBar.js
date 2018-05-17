import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'

class navbarkiri extends Component {
  render() {
    return (
      <div>
        <body className="fixed-nav sticky-footer bg-dark" id="page-top">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <Link to="/"><a className="navbar-brand">Reservasi Kamar</a></Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                  <a class="nav-link">
                  <Link to="/"> <i class="fa fa-fw fa-table"></i>
                    <span class="nav-link-text">Dashboard</span></Link>
                  </a>
                </li>
                <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
                  <a class="nav-link">
                   <i class="fa fa-fw fa-wrench"></i>
                   <Link to="/user"><span class="nav-link-text">User</span></Link>
                  </a>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Kamar">
                  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
                    <i className="fa fa-fw fa-bed"></i>
                    <span className="nav-link-text">Kamar</span>
                  </a>
                  <ul className="sidenav-second-level collapse" id="collapseComponents">
                    <li>
                      <Link to="/Kamar">List Kamar</Link>
                    </li>
                    <li>
                      <Link to="/inputkamar"> Input Kamar </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Pasien">
                  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents1" data-parent="#exampleAccordion">
                    <i className="fa fa-fw fa-users"></i>
                    <span className="nav-link-text"> Pasien </span>
                  </a>
                  <ul className="sidenav-second-level collapse" id="collapseComponents1">
                    <li>
                      <Link to="/pasien"> List Pasien </Link>
                    </li>
                    <li>
                      <Link to="/inputpasien"> Input Pasien </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item" data-toggle="tooltip" data-placement="right" title="Booking Kamar">
                  <a className="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents2" data-parent="#exampleAccordion">
                    <i className="fa fa-fw fa-wrench"></i>
                    <span className="nav-link-text"> Booking Kamar </span>
                  </a>
                  <ul className="sidenav-second-level collapse" id="collapseComponents2">
                    <li>
                      <Link to="/booking"> List Booking </Link>
                    </li>
                    <li>
                      <Link to="/inputbooking"> Input Booking </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="navbar-nav sidenav-toggler">
                <li className="nav-item">
                  <a className="nav-link text-center" id="sidenavToggler">
                    <i className="fa fa-fw fa-angle-left"></i>
                  </a>
                </li>
              </ul>
              <li className="nav-item">
                  <i className="fa fa-fw fa-sign-in"></i>Selamat Datang : 
              </li>
              <ul className="navbar-nav ml-auto style2">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fa fa-fw fa-bell" ></i>
                    <span className="indicator text-danger d-none d-lg-block">
                      <i className="fa fa-fw fa-circle"></i>
                    </span>
                  </a>
                  <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                    <h6 className="dropdown-header">New Alerts:</h6>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      <span className="text-success">
                        <strong>
                          <i className="fa fa-long-arrow-up fa-fw"></i>Status Update
                          </strong>
                      </span>
                      <span className="small float-right text-muted">11:21 AM</span>
                      <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                 <Link to="/login"> <a className="nav-link"><i className="fa fa-fw fa-sign-in"></i>Login</a></Link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                  <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <a class="btn btn-primary" href="login.html">Logout</a>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>

    )
  }

}

export default navbarkiri;  