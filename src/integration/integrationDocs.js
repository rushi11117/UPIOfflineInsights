import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const IntegrationDocs = () => {
    const routes = [
        {
            route: '/api/route1',
            description: 'Dummy Route 1',
            request: {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    key: 'value',
                    key1: 'value',
                    key2: 'value',
                    key3: 'value',
                    key4: 'value',
                    key5: 'value',
                    key6: 'value',
                    key7: 'value',
                    key8: 'value',
                    keyf: 'value',
                    key1d: 'value',
                    key2a: 'value',
                    key3a: 'value',
                    key4a: 'value',
                    key5a: 'value',
                    key6a: 'value',
                    key7a: 'value',
                    key8a: 'value',
                    keyb: 'value',
                    key1b: 'value',
                    key2b: 'value',
                    key3b: 'value',
                    key4b: 'value',
                    key5b: 'value',
                    key6b: 'value',
                    key7b: 'value',
                    key8b: 'value',
                },
            },
            response: {
                status: 'success',
                data: {
                    key: 'value',
                },
            },
        },
        {
            route: '/api/route2',
            description: 'Dummy Route 2',
            request: {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
            response: {
                status: 'success',
                data: {
                    id: 1,
                    name: 'Dummy Data',
                },
            },
        },
        // Add similar objects for the remaining 8 routes
        {
            route: '/api/route3',
            description: 'Dummy Route 3',
            request: {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: {
                    key: 'updatedValue',
                },
            },
            response: {
                status: 'success',
                data: {
                    key: 'updatedValue',
                },
            },
        },
        {
            route: '/api/route4',
            description: 'Dummy Route 4',
            request: {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                params: {
                    id: 2,
                },
            },
            response: {
                status: 'success',
                message: 'Resource deleted successfully',
            },
        },
        // Add similar objects for the remaining routes...
    ];

    return (
        <Container className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <iframe src="http://localhost:8085/swagger-ui/index.html" className='w-100' frameborder="0" sandbox />
            {/* <h1 className="mb-4">Dummy Routes Documentation</h1>
            {routes.map((route, index) => (
                <Card key={index} className="mb-3">
                    <Card.Body>
                        <h4>Route: {route.route}</h4>
                        <p>Description: {route.description}</p>
                        <Row>
                            <Col md={6}>
                                <h5>Request:</h5>
                                <pre
                                    className={`bg-light p-3 ${JSON.stringify(route.request, null, 2).split('\n').length > 10 ? 'pre-scrollable' : ''}`}
                                    style={{ maxHeight: '200px', overflowY: 'auto' }}
                                >
                                    <code className="language-json">{JSON.stringify(route.request, null, 2)}</code>
                                </pre>
                            </Col>
                            <Col md={6}>
                                <h5>Response:</h5>
                                <pre
                                    className={`bg-light p-3 ${JSON.stringify(route.response, null, 2).split('\n').length > 10 ? 'pre-scrollable' : ''}`}
                                    style={{ maxHeight: '200px', overflowY: 'auto' }}
                                >
                                    <code className="language-json">{JSON.stringify(route.response, null, 2)}</code>
                                </pre>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))} */}
        </Container>
    );
};

export default IntegrationDocs;
