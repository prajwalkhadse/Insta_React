import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../../images/circle_icon.svg"
import Camera from "../../../images/camera.png"

import './Header.css';
import { Link } from "react-router-dom";



export default function Header() {
  
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                        <span>Instaclone</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                      <Link to="/post/new">  <img src={Camera} alt="Logo" /> </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
)
}            