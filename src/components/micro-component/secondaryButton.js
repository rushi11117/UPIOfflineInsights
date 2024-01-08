import React from 'react'

const SecondaryButton = ({ buttonText, onClick }) => {
    return (
        <button type="button" onClick={onClick} className="btn btn-sm btn-outline-secondary" >
            {buttonText}
        </button >
    )
}
export default SecondaryButton;