import React from 'react'
import Logo from "../myFace.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Jeffrey Luzon's Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
