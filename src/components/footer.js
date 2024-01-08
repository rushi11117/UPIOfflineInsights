import React from 'react';
import Logoicon from './resource/logo';
import { Link } from 'react-router-dom';
import FooterSection from './Micro/footerSection';
import AwsLogo from './resource/partners/amazon-web-services.png'

const Footer = () => {
    const footers = {
        "Section1": ["Home", "Features", "Pricing", "FAQs", "About"],
        "Section2": ["Home", "Features", "Pricing", "FAQs"],
        "Section3": ["Home", "Features", "FAQs", "About"]
    };

    const numSections = Object.keys(footers).length;
    const numRows = Math.ceil(numSections / 3);
    const sectionRows = [];
    for (let i = 0; i < numRows; i++) {
        const start = i * 3;
        const end = start + 3;
        sectionRows.push(Object.keys(footers).slice(start, end));
    }

    // Include the initial section in the first row
    sectionRows[0].unshift("initialSection");

    return (
        <footer className="row row-cols-1 bg-light py-5 my-5 border-top">
            <div className="col mb-3">
                <div className="d-flex">
                    {/* Initial section */}
                    {sectionRows[0].map((key) => {
                        if (key === "initialSection") {
                            return (
                                <div key={key} className="col mb-3">
                                    <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                                        <Logoicon />
                                    </Link>
                                    <div className=" row justidy-content-right ">
                                        <div className='col'>
                                            <p className='text-muted'>
                                                © 2023
                                            </p>
                                        </div>
                                        <div className='col'>
                                            <p className='text-muted'>
                                                <Link to={'/https://github.com/rushi11117'}>
                                                    @rushi11117
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <FooterSection key={key} footerSections={key} footerLink={footers[key]} />
                        );
                    })}
                </div>
                {/* Remaining section rows */}
                {sectionRows.slice(1).map((row, rowIndex) => (
                    <div key={rowIndex} className="d-flex">
                        {row.map((key) => (
                            <FooterSection key={key} footerSections={key} footerLink={footers[key]} />
                        ))}
                    </div>
                ))}
                <div className='d-flex justify-content-center '>
                    <p className='text-muted row'>

                        <h5 className='col mt-4 text-center'>
                            Powered By
                        </h5>
                        <div className='col mb-2'>
                            <Link to={'https://aws.amazon.com'} target='_blank'>
                                <img
                                    alt=''
                                    src={AwsLogo}
                                    width={100}
                                    height={100}
                                />
                            </Link>
                        </div>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
