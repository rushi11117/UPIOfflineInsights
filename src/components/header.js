import React, { useState } from 'react'
import Logoicon from './resource/logo192.ico'
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
        height: '32px',
        width: '32px',
    };

    const header = {
        height: '35px',
    }

    return (
        <div style={header}>
            <header className="navbar navbar-dark sticky-top bg-light flex-md-nowrap p-0 shadow" >
                <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
                    <div className="column" style={columnStyle}>
                        <div className='row'>
                            <div className='col-2'>
                                <img src={Logoicon} alt="Logo" style={imgStyle} />
                            </div>
                            <div className='col-9'>
                                <Logotext />
                            </div>
                        </div>
                    </div>
                </a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className="nav-item text-nowrap">
                        <a className="nav-link  px-3" href="#">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                Sign out
                            </button>
                        </a>
                    </div>
                </div>
            </header>
        </div >
    )
}
