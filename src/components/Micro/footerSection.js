import React from 'react'
import FooterLink from './footerLink'

const FooterSection = ({ footerSections, footerLink }) => {
    return (
        <div className="col mb-3">
            <h5>{footerSections}</h5>
            <ul className="nav flex-column">
                {
                    footerLink.map((linkItem, index) => (
                        <FooterLink key={`uniqueKey_${index}_${linkItem.id}`} link={linkItem} />
                    ))
                }
            </ul>
        </div>
    )
}
export default FooterSection

// Kadllale 