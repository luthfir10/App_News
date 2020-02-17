import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
class DefaultHeader extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="/">NewsMorning</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item">
                  <NavLink to="/">
                    <a class="nav-link">Home</a>
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink to="/list">
                    <a class="nav-link">List News</a>
                  </NavLink>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default DefaultHeader;
