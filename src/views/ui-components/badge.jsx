import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
    badges1,
    chartExample1,
    chartExample2,
    busi_imp1 ,
    security1,
    ethics1,
    transperancy1,
    compliance1
} from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/variables/charts.js";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "b1",
      bigChartData_sec: "d1",
      bigChartData_eth: "d2",
      bigChartData_trans: "d3",
      bigChartData_comp: "d4",
      bigChartData_bus: "d5"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name,
      bigChartData_sec: name,
      bigChartData_eth: name,
      bigChartData_trans: name,
      bigChartData_comp: name,
      bigChartData_bus: name
    });
  };

render() {
    return (
        <>
        <Card>
        <CardBody>
        <Row>
        <Col>
                <CardBody>
                <CardTitle>Business Impact Change Due to AI Assesment</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {badges1[this.state.bigChartData]}
                        options = {badges1.options}
                        height = {"75px"}
                        />
                    </div>
                </CardBody>
                </Col>
                </Row>    
                </CardBody>
        
                
                </Card>
                <Card>
                    <CardBody>
                        <Col>

                                                
                                                
                            <CardBody>
                                <CardTitle>Security</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Line
                                    data = {security1[this.state.bigChartData_sec]}
                                    options = {security1.options} 
                                    height={"40px"}/>
                                    
                                    </div>
                                    
                            </CardBody>
                            </Col>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Col>

                                                
                                                
                            <CardBody>
                                <CardTitle>Ethics</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Line
                                    data = {ethics1[this.state.bigChartData_eth]}
                                    options = {ethics1.options} 
                                    height={"40px"}/>
                                    
                                    </div>
                                    
                            </CardBody>
                            </Col>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Col>

                                                
                                                
                            <CardBody>
                                <CardTitle>Compliance</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Line
                                    data = {compliance1[this.state.bigChartData_comp]}
                                    options = {compliance1.options} 
                                    height={"40px"}/>
                                    
                                    </div>
                                    
                            </CardBody>
                            </Col>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <Col>

                                                
                                                
                            <CardBody>
                                <CardTitle>Transperancy</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Line
                                    data = {transperancy1[this.state.bigChartData_trans]}
                                    options = {transperancy1.options} 
                                    height={"40px"}/>
                                    
                                    </div>
                                    
                            </CardBody>
                            </Col>
                    </CardBody>
                </Card>

                <Card>
                <CardBody>
                        <Col>

                                                
                                                
                            <CardBody>
                                <CardTitle>Business Impact</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Line
                                    data = {busi_imp1[this.state.bigChartData_bus]}
                                    options = {busi_imp1.options} 
                                    height={"40px"}/>
                                    
                                    </div>
                                    
                            </CardBody>
                            </Col>
                    </CardBody>
                </Card>

                    
                   

        </>
    );
}
}

export default Badges;





























// import React from 'react';
// import { Badge, Button, Card, CardBody, CardTitle, Row, Col, CardSubtitle } from 'reactstrap';
// import { Line } from 'react-chartjs-2';

// //Line chart
// let lineData = {
//     labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "SEP", "OCT", "NOV", "DEC"],
//     datasets: [{
//         label: 'Income',
//         borderWidth: 1,
//         backgroundColor: 'rgba(94,114,228,.1)',
//         borderColor: '#e2e2e2',
//         pointBorderColor: '#e2e2e2',
//         pointBackgroundColor: '#e2e2e2',
//         pointRadius: 3,
//         pointHitRadius: 10,
//         data: [0, 15, 6, 11, 25, 9, 18, 24, 15, 5, 34, 41]
//     }, {
//         label: 'Outcome',
//         borderWidth: 1,
//         backgroundColor: 'rgba(79,195,247,.1)',
//         borderColor: '#ffc107',
//         pointBorderColor: '#ffc107',
//         pointBackgroundColor: '#ffc107',
//         pointRadius: 3,
//         pointHitRadius: 10,
//         data: [0, 8, 11, 22, 8, 10, 5, 21, 40, 45, 36, 32]
//     }]
// };


// const Badges = () => {
//     return (
//         <Card>
//             <CardBody>
//                 <div className="d-flex align-items-center">
//                     <div>
//                         <CardTitle><h4>Business Impact Before & After SigmaRed</h4></CardTitle>
                        
//                     </div>
//                     <div className="ml-auto ">
//                         <ul className="list-inline font-12 dl mr-3 mb-0">
//                             <li className="border-0 p-0 text-info list-inline-item">
//                                 <i className="fa fa-circle"></i> After SigmaRed
// 								</li>
//                             <li className="border-0 p-0 text-primary list-inline-item">
//                                 <i className="fa fa-circle"></i> Before SigmaRed
                                
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
//                 </Row>
//             </CardBody>
//         </Card>
//     );
// }

// export default Badges;
