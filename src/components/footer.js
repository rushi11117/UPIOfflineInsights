import React from 'react';

import Logoicon from './resource/logo'
import { Link } from 'react-router-dom';

const Footer = () => {
    const imgStyle = {
        height: '32px',
        width: '32px',
    };
    return (

        <footer class="row row-cols-1 bg-light row-cols-sm-2 row-cols-md-5 py-5  my-5 border-top">
            <div class="col mb-3 ">
                <Link to="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
                    {/* <img src={Logoicon} alt="Logo" style={imgStyle} /> */}
                    <Logoicon />
                </Link>
                <p class="text-muted">© 2023</p>
            </div>

            <div class="col mb-3">

            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                </ul>
            </div>

            <div class="col mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Home</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Features</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">Pricing</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">FAQs</Link></li>
                    <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-muted">About</Link></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
