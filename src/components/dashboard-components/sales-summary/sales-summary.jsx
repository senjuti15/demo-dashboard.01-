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


const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"

  ],
  datasets: [
    {
      label: 'Security',
      fill: false,
      
      backgroundColor: '#00c09d',
      borderColor: '#00c09d',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#00c09d',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#00c09d',
      pointHoverBorderColor: '#00c09d',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [0, 4, 10, 7, 8, 9, 15, 10, 10, 15, 25, 30]
    },
    {
        label: 'Ethics',
        fill: false,
      
        backgroundColor: '#e2e2e2',
        borderColor: '#e2e2e2',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#e2e2e2',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#e2e2e2',
        pointHoverBorderColor: '#e2e2e2',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 7, 8, 6, 8, 12, 19, 15, 20, 17, 20, 28]
      },
      {
        label: 'Compliance',
        fill: false,
 
        backgroundColor: '#ff8d72',
        borderColor: '#ff8d72',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#ff8d72',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#ff8d72',
        pointHoverBorderColor: '#ff8d72',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 5, 10, 7, 12, 20, 16, 19, 15, 23, 18, 28]
      },
      {
        label: 'Transparency',
        fill: false,
  
        backgroundColor: '#17a2b8',
        borderColor: '#17a2b8',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: '#17a2b8',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#17a2b8',
        pointHoverBorderColor: '#17a2b8',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [0, 2, 8, 6, 8, 3, 10, 15, 7, 17, 16, 29]
      },
    //   {
    //     label: 'Business Impact',
    //     fill: false,

    //     backgroundColor: '#ffc107',
    //     borderColor: '#ffc107',
    //     borderCapStyle: 'butt',
    //     borderDash: [],
    //     borderDashOffset: 0.0,
    //     borderJoinStyle: 'miter',
    //     pointBorderColor: '#ffc107',
    //     pointBackgroundColor: '#fff',
    //     pointBorderWidth: 1,
    //     pointHoverRadius: 5,
    //     pointHoverBackgroundColor: '#ffc107',
    //     pointHoverBorderColor: '#ffc107',
    //     pointHoverBorderWidth: 2,
    //     pointRadius: 1,
    //     pointHitRadius: 10,
    //     data: [0, 20, 30, 40, 50, 70, 80, 90, 95, 87, 70, 110]
    //   }
  ]
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
                    {/* <div className="ml-auto ">
                        <ul className="list-inline font-12 dl mr-3 mb-0">
                            <li className="border-0 p-0 text-info list-inline-item">
                                <i className="fa fa-circle"></i> Security
								</li>
                            <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Ethics
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Compliance
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Transparency
								</li>
                                <li className="border-0 p-0 text-primary list-inline-item">
                                <i className="fa fa-circle"></i> Buisness Impact
								</li>
                        </ul>
                    </div> */}
                </div>
                <Row>
                    <Col lg="12">
                        <div className="campaign ct-charts">
                        <div>
                            
                            <Line data={data} data1={data}/>
                            
                        </div>
                        
                        </div>
                    </Col>
                </Row>
            </CardBody>
        </Card>
    );
}

export default SalesSummary;
