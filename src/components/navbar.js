import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
            <div className={`container-fluid`}>
                <Link className="navbar-brand" to="/">
                    {props.title}
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                {props.aboutTitle}
                            </Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.mode==='dark' ? 'light' : 'dark'}`}>
                        <input 
                            className="form-check-input" 
                            type="checkbox" 
                            role="switch" 
                            id="flexSwitchCheckChecked" 
                            onClick={props.toggle}
                        />
                        <label 
                            className="form-check-label" 
                            for="flexSwitchCheckChecked">
                            {props.mode === 'dark' ? 'light' : 'dark'} mode
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.prototype = {
    title : PropTypes.string.isRequired ,
    aboutTitle : PropTypes.string.isRequired
}

export default Navbar;