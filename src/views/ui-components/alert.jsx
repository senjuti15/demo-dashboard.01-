import React, { useState } from 'react';
import {
    Alert,
    UncontrolledAlert,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row,
    Input
} from 'reactstrap';
import { Line } from 'react-chartjs-2';



//Line chart
let lineData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Income',
        borderWidth: 1,
        backgroundColor: 'rgba(94,114,228,.1)',
        borderColor: '#2962ff',
        pointBorderColor: '#2962ff',
        pointBackgroundColor: '#2962ff',
        data: [0, 15, 6, 11, 25, 9, 18, 24]
    }, {
        label: 'Outcome',
        borderWidth: 1,
        backgroundColor: 'rgba(79,195,247,.1)',
        borderColor: '#ffcc13',
        pointBorderColor: '#ffcc13',
        pointBackgroundColor: '#ffcc13',
        data: [0, 8, 11, 22, 8, 10, 5, 21]
    }]
};

const Alerts = () => {
    // For Dismiss Button with Alert
    const [visible, setVisible] = useState(true);

    const onDismiss = () => {
        setVisible(false);
    }

    return (
        <div>
            <Card>
                <CardBody>
                    <div>
                        <CardTitle>
                            <h5>Details on Merit AI Framework</h5>
                            <p>Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord. </p>
                        </CardTitle>
                    </div>
                    
                </CardBody>
            </Card>
                
            <Card>
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Security</CardTitle>
                        
                    </div>
                </div>
                <Row>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    
                    
                </Row>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                {/* <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Overview</CardTitle>
                        <CardSubtitle>Details about the Graph</CardSubtitle>
                    </div>
                </div> */}
                <Row>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    
                    
                </Row>
            </CardBody>
            
        </Card>

        

        </Card>

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Biasness</CardTitle>
                       
                    </div>
                </div>
                <Row>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    
                    
                </Row>
            </CardBody>
        
        
            <CardBody>
                <div className="d-flex align-items-center">
                    {/* <div>
                        <CardTitle>Overview</CardTitle>
                        <CardSubtitle>Details about the Graph</CardSubtitle>
                    </div> */}
                </div>
                <Row>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    <Card>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    
                        
                    </Col>
                    </Card>
                    
                    
                </Row>
            </CardBody>
        </Card>

        
        
        </div>
        
        
    );
}

export default Alerts;
