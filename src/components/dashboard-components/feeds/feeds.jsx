import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import {Doughnut} from 'react-chartjs-2';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Col,
    Row,
    CardHeader
} from 'reactstrap';

const data = {
    maintainAspectRatio: false,

    legend: {
        display: true,
        position: "right",
        fullWidth: true,
        // "labels": {
        //   "fontColor": "rgb(255, 99, 132)"
        // }
      },

      labels: ['Security', 'Ethics', 'Compliance', 'Transperancy', 'Business Impact'],
      datasets: [
        {
          label: 'Emails',
          pointRadius: 0,
          pointHoverRadius: 0,
          backgroundColor: ['#00c09d', '#e2e2e2', '#ff8d72','#17a2b8', '#ffc107'],
          borderWidth: 0,
          data: [60,40,50,70,60]
        }
      ],
      extraOptions: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        responsive: true,
          cutoutPercentage: 70,
          tooltips: {
            backgroundColor: '#f5f5f5',
            titleFontColor: '#333',
            bodyFontColor: '#666',
            bodySpacing: 4,
            xPadding: 12,
            mode: 'nearest',
            intersect: 0,
            position: 'nearest'
          },
          scales: {
            yAxes: [
              {
                display: 0,
                ticks: {
                  display: false
                },
                gridLines: {
                  drawBorder: false,
                  zeroLineColor: 'transparent',
                  color: 'rgba(255,255,255,0.05)'
                }
              }
            ],
            xAxes: [
              {
                display: 0,
                barPercentage: 1.6,
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255,255,255,0.1)',
                  zeroLineColor: 'transparent'
                },
                ticks: {
                  display: false
                }
              }
            ]
}
      }
    };

class Feeds extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bigChartData: "data1"
      };
    }
    setBgChartData = name => {
      this.setState({
        bigChartData: name
      });
    };

  render() {
    return (
        <>
        <Card>
            <CardBody>
                <Row>
                    {/* <div className="d-flex align-items-center"> */}
                            <div>
                                <CardHeader><h5>Business Impact Contributors</h5></CardHeader>
                                {/* <CardSubtitle>Details about the Graph</CardSubtitle> */}
                            </div>
                    {/* </div> */}
                </Row>
                    
                  
                    <div>
                        <Doughnut data={data} height='329.95px'/>
                        
                    </div>
                    
                    
      </CardBody>
      </Card>
      </>
    );
  }
}
export default Feeds;


// import { Pie } from 'react-chartjs-2';
// import React, {Component} from 'react';

// class PieChartComponent extends Component {
    
//     constructor(props) {
//         super(props)
//         this.state = {
//             labels: ['Security', 'Biasness', 'Compliance', 'Transperancy', 'Business Impact'],
//             datasets: [{
//                 data: [200, 300, 350, 400, 150],
//                 backgroundColor: ['#FFC000', '#C04040', '#8040C0','#0040C0','#008040']
//             }]
//         }
//     }

// render() {
//     return (
        // <Card>
        //     <CardBody>
        //         <Row>
        //             <div className="d-flex align-items-center">
        //                     <div>
        //                         <CardTitle>Key Matrix</CardTitle>
        //                         {/* <CardSubtitle>Details about the Graph</CardSubtitle> */}
        //                     </div>
        //             </div>
        //         </Row>
        //             <Row>
        //                 <Col lg="12">
        //                     <div className="campaign ct-charts">
        //                         <div className="chart-wrapper" style={{ width: '0%', margin: '0 auto', height: '0px' }}>
                                    
        //                         </div>
        //                     </div>
        //                 </Col>
        //             </Row>
//                     <Pie
//                         data={{
//                             labels: this.state.labels,
//                             datasets: this.state.datasets
//                         }}
//                         height='200%'
//                     />
//                     <br />
                
//             </CardBody>
//         </Card>
//     )
//     }
// }

// export default PieChartComponent

// //Line chart
// let lineData = {
//     labels: [1, 2, 3, 4, 5, 6, 7, 8],
//     datasets: [{
//         label: 'Income',
//         borderWidth: 1,
//         backgroundColor: 'rgba(94,114,228,.1)',
//         borderColor: '#2962ff',
//         pointBorderColor: '#2962ff',
//         pointBackgroundColor: '#2962ff',
//         data: [0, 15, 6, 11, 25, 9, 18, 24]
//     }, {
//         label: 'Outcome',
//         borderWidth: 1,
//         backgroundColor: 'rgba(79,195,247,.1)',
//         borderColor: '#ffcc13',
//         pointBorderColor: '#ffcc13',
//         pointBackgroundColor: '#ffcc13',
//         data: [0, 8, 11, 22, 8, 10, 5, 21]
//     }]
// };

// const Feeds = () => {
//     return (
//         <Card>
//             <CardBody>
//                 <div className="d-flex align-items-center">
//                     <div>
//                         <CardTitle>Overview</CardTitle>
//                         <CardSubtitle>Details about the Graph</CardSubtitle>
//                     </div>
//                     <div className="ml-auto ">
//                         <ul className="list-inline font-12 dl mr-3 mb-0">
//                             <li className="border-0 p-0 text-info list-inline-item">
//                                 <i className="fa fa-circle"></i> Security
// 								</li>
//                             <li className="border-0 p-0 text-primary list-inline-item">
//                                 <i className="fa fa-circle"></i> Biasness
// 								</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <Row>
//                     <Col lg="12">
//                         <div className="campaign ct-charts">
//                             <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
//                                 <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//                             </div>
//                         </div>
//                     </Col>
//                 </Row>y

//             </CardBody>
//         </Card>
//     );
// }

// export default Feeds;