import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Logo = ({ onClick, darkMode }) => {
    return (
        <div onClick={onClick} style={{ cursor: 'pointer' }}>
            {darkMode ? <FiMoon size={25} /> : <FiSun size={25} />}
        </div>
    );
};

export default Logo;
