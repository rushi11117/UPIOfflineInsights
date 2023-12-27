import React from 'react'
import Logoicon from './resource/logo192.ico'
import Logotext from './resource/logo'
import SecondaryButton from './micro-component/secondaryButton';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './Theme/ThemeContext';
import Logo from './Theme/Logo'
import { logout } from './Utils/loginUtils'

const HeaderComponent = () => {

    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useTheme();

    const handleLogoClick = () => {
        toggleDarkMode();
    };

    const handleLogOut = () => {
        logout();
        navigate('/login')
    };

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
        <div style={header} >
            <header className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom" >
                <Link to="/UPIOfflineInsights" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
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
                </Link>
                <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
                <div className="navbar-nav">
                    <div className={`nav-item mt-2 form-check form-switch ${darkMode ? 'header-dark' : 'header-light'}`}>
                        <Logo onClick={handleLogoClick} darkMode={darkMode} />
                    </div>
                    <div className="nav-item text-nowrap">
                        <Link to="" className="nav-link  px-3" >
                            <SecondaryButton buttonText={"Logout"} onClick={handleLogOut()} />
                        </Link>
                    </div>
                </div >
            </header >
        </div >
    )
}

export default HeaderComponent;