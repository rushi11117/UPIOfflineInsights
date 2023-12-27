import React from 'react'
import { Modal } from 'react-bootstrap';
import SecondaryButton from '../micro-component/secondaryButton';
import CopyLink from '../Micro/copyLink';
import { FaShareAlt } from 'react-icons/fa';




const ShareLinkPopup = ({ showModal, handleCloseModal, shareTo, link }) => {
    return (
        <div className={`toast ${showModal ? 'show' : ''}`}>
            <Modal show={showModal} onHide={handleCloseModal} centered >
                <Modal.Header closeButton>
                    <Modal.Title>
                        <FaShareAlt />
                        Share
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CopyLink link={link} />
                </Modal.Body>
                <Modal.Footer>
                    <SecondaryButton buttonText={"close"} variant="secondary" onClick={handleCloseModal}>
                        Close
                    </SecondaryButton>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ShareLinkPopup