import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import React, { useState } from 'react'
import Logoicon from './resource/favicon.ico'
import Logotext from './resource/logo'
export default function header() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [expanded, setExpanded] = useState(false);

    const handleNavToggle = () => {
        setExpanded(!expanded)
    }

    const columnStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '32px',
        alignItems: 'center',
        justifyContent: 'space-between',
      };
    
      const imgStyle = {
        height: '100%',
      };

    return (
        <div>
            <header class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
                <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
                    <div class="column" style={columnStyle}>
                        {/* <div>
                            <img src={Logoicon} alt="Logo" style={imgStyle} />
                        </div> */}
                        <div>
                            <Logotext />
                        </div>
                    </div>
                </a>
                <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div class="navbar-nav">
                    <div class="nav-item text-nowrap">
                        <a class="nav-link px-3" href="#">Sign out</a>
                    </div>
                </div>
            </header>
        </div >
    )
}
