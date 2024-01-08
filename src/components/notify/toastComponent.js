import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import { getStatusClass } from '../Utils/warningLevelText';
import stringProcessing from '../Utils/stringProcessing';

const ToastComponent = ({ showModal, handleCloseModal, objectsId, objects }) => {

    const keys = Object.keys(objects);
    const values = Object.values(objects)
    return (
        <div className={`toast ${showModal ? 'show' : ''}`}>
            <Modal show={showModal} onHide={handleCloseModal} centered className='shadow'>
                <Modal.Header closeButton>
                    <Modal.Title>{objectsId ? objectsId : objects.id}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        keys.map((value, key) => (
                            <div className='row'>
                                <p className='col'>
                                    {stringProcessing(value)} :
                                </p>
                                <p className='col' style={{ color: getStatusClass(values[key]) }}>
                                    {values[key]}
                                </p>
                            </div>
                        ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default ToastComponent;