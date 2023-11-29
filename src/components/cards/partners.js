import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import amazonlogo from '../resource/partners/amazon-aws.png';
import amazonwebserviceslogo from '../resource/partners/amazon-web-services.png';
import nublogo from '../resource/partners/nagar.png';
import cbalogo from '../resource/partners/CBA.png';
import amclogo from '../resource/partners/amc.png';
import npcilogo from '../resource/partners/npci.png';
import mhgov from '../resource/partners/mhgov.png'

const Partner = () => {
    const ourProdPartners = [
        { id: 1, name: 'Amazon Cloud', logo: amazonlogo },
        { id: 2, name: 'Amazon Web Services', logo: amazonwebserviceslogo },
        { id: 3, name: 'Nagar Urban Co-Operative', logo: nublogo },
        { id: 4, name: 'Conttonment Board Of Bhingar', logo: cbalogo },
        { id: 5, name: 'Ahmednagar Municipal Corporation', logo: amclogo },
        { id: 6, name: 'National Payment Corporation of India', logo: npcilogo },
        { id: 6, name: 'Government of Maharashtra', logo: mhgov }
    ];

    const renderPartnerCards = (partners) => {
        const handleMouseEnter = (e) => {
            e.target.style.transform = 'scale(1.1)';
            e.target.style.transition = 'transform 0.3s ease';
        };

        const handleMouseLeave = (e) => {
            e.target.style.transform = 'scale(1)';
        };

        return partners.map((partner) => (
            <Col key={partner.id} xs={6} sm={4} md={3} lg={2} className="mb-3">
                <Card
                    className="partner-card "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Card.Body className="text-center">
                        <img
                            className="partner-logo img-fluid"
                            src={partner.logo}
                            alt={partner.name}
                            width="100"
                            height="100"
                        />
                        <div className="mt-2" style={{ fontSize: '14px' }}>
                            {partner.name}
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    const chunkedPartners = chunkArray(ourProdPartners, 5);

    return (
        <Container className="py-5">
            <center>
                <h3 className="mb-4">Our Proud Partners</h3>
            </center>
            {chunkedPartners.map((chunk, index) => (
                <Row key={index} className="justify-content-center">
                    {renderPartnerCards(chunk)}
                </Row>
            ))}
        </Container>
    );
};

export default Partner;
