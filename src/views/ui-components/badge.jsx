import React from 'react';
import { Badge, Button, Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const Badges = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Row>
                <Col xs="12" md="12" sm="12">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardTitle className="bg-light border-bottom p-3 mb-0">
                            <i className="mdi mdi-arrange-send-backward mr-2"> </i>
                            Merit Impact Framework
                        </CardTitle>
                        <CardBody className="">
                            <div>
                                <p> Details </p>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
        </div >
    );
}

export default Badges;
