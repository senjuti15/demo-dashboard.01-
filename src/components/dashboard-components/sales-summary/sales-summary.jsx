import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row
} from 'reactstrap';
import { Line } from 'react-chartjs-2';

// ['#FFC000', '#C04040', '#8040C0','#0040C0','#008040']

//Line chart
let lineData = {
    labels: [0, 2, 3, 4, 5, 6, 7, 8],
    datasets: [{
        label: 'Income',
        borderWidth: 1,

        borderColor: '#FFC000',
        pointBorderColor: '#FFC000',
        pointBackgroundColor: '#FFC000',
        data: [0, 15, 6, 11, 25, 9, 18, 24]
    }, {
        label: 'Outcome',
        borderWidth: 1,
       
        borderColor: '#C04040',
        pointBorderColor: '#C04040',
        pointBackgroundColor: '#C04040',
        data: [0, 8, 11, 22, 8, 10, 5, 21]
    }, {
        label: 'Outcome',
        borderWidth: 1,
       
        borderColor: '#8040C0',
        pointBorderColor: '#8040C0',
        pointBackgroundColor: '#8040C0',
        data: [0, 8, 11, 22, 8, 10, 5, 21]
    },{
        label: 'Outcome',
        borderWidth: 1,
       
        borderColor: '#0040C0',
        pointBorderColor: '#0040C0',
        pointBackgroundColor: '#0040C0',
        data: [0, 11, 8, 0, 8, 3, 5, 5]
    },{
        label: 'Outcome',
        borderWidth: 1,
       
        borderColor: '#008040',
        pointBorderColor: '#008040',
        pointBackgroundColor: '#008040',
        data: [0, 8, 11, 22, 8, 10, 5, 21]
    }]
};



const SalesSummary = () => {
    return (
        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Overview</CardTitle>
                        <CardSubtitle>Details about the Graph</CardSubtitle>
                    </div>
                    <div className="ml-auto ">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <li className="border-0 p-0 text-info list-inline-item">
                                <i className="fa fa-circle"></i> Security
								</li>
                            <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Biasness
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Compliance
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Transperancy
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Buisness Impact
								</li>
                        </ul>
                    </div>
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                            <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
                                <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default SalesSummary;
