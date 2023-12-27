import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = ({ link }) => {
    return (
        <div>
            <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-muted">
                    {link}
                </Link>
            </li>
        </div>
    )
}

export default FooterLink;