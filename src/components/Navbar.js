import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">{props.title}</a> */}
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                        {/* <div className="d-flex">
                            <button className="bg-primary rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('primary')}></button>
                            <button className="bg-danger rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('danger')}></button>
                            <button className="bg-success rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('success')}></button>
                            <button className="bg-warning rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('warning')}></button>
                            <button className="bg-light rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('light')}></button>
                            <button className="bg-dark rounded mx-2" style={{height: '35px', width: '35px', cursor: 'pointer'}} onClick={() => props.toggleMode('dark')}></button>
                        </div> */}
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </form> */}
                        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-4`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={() => props.toggleMode(null)}/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About',
}