import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdAutoGraph, MdDashboard, MdAdminPanelSettings } from "react-icons/md";
import { FaShoppingCart, FaRupeeSign } from 'react-icons/fa';
import { IoPieChartSharp } from 'react-icons/io5';
import { RiPieChart2Line } from 'react-icons/ri';
import { BiSolidReport } from 'react-icons/bi';
import { AiTwotoneApi } from 'react-icons/ai';
import { IoMdWifi } from 'react-icons/io';
import { HiOutlineDocumentReport } from "react-icons/hi";
import { Nav } from 'react-bootstrap';

import links from '../components/resource/sidelinktree.json';


const iconComponents = {
    MdDashboard,
    MdAutoGraph,
    MdAdminPanelSettings,
    FaShoppingCart,
    FaRupeeSign,
    IoPieChartSharp,
    RiPieChart2Line,
    BiSolidReport,
    AiTwotoneApi,
    IoMdWifi,
    HiOutlineDocumentReport
};




const SidebarLink = ({ link, iconComponents }) => {
    const [expanded, setExpanded] = useState(false);

    const handleToggle = () => {
        setExpanded(!expanded);
    };

    const renderChildren = (children) => {
        return (
            <Nav.Item className={expanded ? 'show' : 'collapse'}>
                <Nav>
                    {children.map((childLink) => (
                        <SidebarLink key={childLink.id} link={childLink} iconComponents={iconComponents} />
                    ))}
                </Nav>
            </Nav.Item>
        );
    };

    const IconComponent = iconComponents[link.icon];

    return (
        <React.Fragment>
            <Nav.Link as={Link} to={link.url} className="nav-link" onClick={handleToggle}>
                {IconComponent && <IconComponent size={25} className="" />} {link.title}
            </Nav.Link>
            {link.children && renderChildren(link.children)}
        </React.Fragment>
    );
};

const Sidebar = ({ links }) => {
    return (
        <Nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
            {links.map((link) => (
                <SidebarLink key={link.id} link={link} iconComponents={iconComponents} />
            ))}
        </Nav>
    );
};

const SidebarComponent = () => {
    return (
        <nav id="sidebarMenu" className="d-md-block sidebar collapse">
            <div className="position-sticky pt-3">
                <Sidebar links={links} />
            </div>
        </nav>
    );
};

export default SidebarComponent;