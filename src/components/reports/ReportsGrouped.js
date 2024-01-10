import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import stringProcessing from '../Utils/stringProcessing';
import DynamicChart from './Graph/dynamicChart';
import DynamicMap from './Map/dynamicMap';
import TallyBar from './Graph/TallyBar';


const ReportsGrouped = ({ name }) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const formattedDate = stringProcessing(name);

        fetch(`http://localhost:5000/transactions/month?date=${formattedDate}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                return response.json();
            })
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [name]);
    // console.log(data)

    return (
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Row className="">
                <Col className='bg-light border'>
                    <h3 className='text-md m-3 text-center fw-bold'>
                        {stringProcessing(name)}
                    </h3>
                </Col>
            </Row>
            <Row className="text-center">
                <Col md={6} className=''>
                    <DynamicChart data={data} />
                </Col>
                <Col md={6} className=''>
                    <DynamicMap data={data} name={name} />
                </Col>
            </Row>
            <Row className="text-center ">
                <Col xs={12} md={2}>
                    <TallyBar data={data} />
                </Col>
            </Row>
        </div>
    );
};

export default ReportsGrouped;
