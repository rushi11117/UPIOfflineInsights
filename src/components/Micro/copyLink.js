import React from 'react'
import SecondaryButton from '../micro-component/secondaryButton'

const CopyLink = ({ link }) => {
    return (
        <div className='row'>
            <div className='col'>
                {link}
            </div>
            <div className='col'>
                <SecondaryButton buttonText={"copy"} />
            </div>
        </div>
    )
}
export default CopyLink;