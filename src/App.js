import "./assets/stylesheets/App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import Home from "./components/Home";
import About from "./components/About";
import Apply from "./components/Apply";
import Consult from "./components/Consult";
import VetClinics from "./components/VetClinics";
import ContactUs from "./components/ContactUs";

class App extends Component {
    render() {
        return (
            <Router>
                <Navbar expand="lg" className="navbar-custom">
                    <Navbar.Brand href="/">
                        <img
                            id="logo"
                            src={require("./assets/images/logo.png")}
                            alt="find-a-vet-logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <NavDropdown
                                title="About Us"
                                className="navdropdown-custom"
                                renderMenuOnMount={true}
                            >
                                <NavDropdown.Item href="/about">
                                    About Us
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/apply">
                                    Apply to be an FV Veterinarian
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/consult">
                                See A Veterinarian
                            </Nav.Link>
                            <Nav.Link href="/find-a-vet-clinic">
                                Find A Veterinary Clinic
                            </Nav.Link>
                            <Nav.Link
                                href="/contact-us"
                                className="navbar-links"
                            >
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route exact path="/about" element={<About />}></Route>
                    <Route exact path="/apply" element={<Apply />}></Route>
                    <Route exact path="/consult" element={<Consult />}></Route>
                    <Route
                        exact
                        path="/find-a-vet-clinic"
                        element={<VetClinics />}
                    ></Route>
                    <Route
                        exact
                        path="/contact-us"
                        element={<ContactUs />}
                    ></Route>
                </Routes>
            </Router>
        );
    }
}

export default App;
