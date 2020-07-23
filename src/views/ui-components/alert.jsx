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
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "/Users/senjutibala/Documents/SigmaRed_projects/demo-dashboard.01/src/variables/charts.js";

class Dashboard extends React.Component {
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
                    <div>
                        <CardTitle>
                            <h5>Details on Merit AI Framework</h5>
                            <p>Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord. </p>
                        </CardTitle>
                    </div>
                    
                </CardBody>
            </Card>
        <div className="content">
        <Card> 
          
           
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Tentative Title</CardTitle>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Security
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data3"
                          })}
                          onClick={() => this.setBgChartData("data3")}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          checked/>
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Ethics
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          checked/>
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Compliance
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Transperancy
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          tag="label"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData("data1")}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Business Impact
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        
                      </ButtonGroup>
                      
                      
                    </Col>
                  </Row>
                </CardHeader>
              <Card>
                
              <Row xs="20">
                  <Col>
                  <CardBody>
                      <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>
                
            </Row>
            </Card> 
            <Card>
                
              <Row xs="20">
                  <Col>
                  <CardBody>
                  <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>
                
            </Row>
            </Card> 

            
            <Card>
                //  Details         
            </Card>
            
            <Card>
                
              <Row xs="20">
                  <Col>
                  <CardBody>
                  <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>
                
            </Row>
            </Card>  

            <Card>
                //  Details         
            </Card>

            </Card>
            
         
            
        
            

          </Card>
        
        </div>
      </>
    );
  }
}

export default Dashboard;












// #########################

// import React, { useState } from 'react';
// import classNames from "classnames";

// import {
//     Alert,
//     UncontrolledAlert,
//     Card,
//     CardBody,
//     CardTitle,
//     CardSubtitle,
//     Col,
//     Row,
//     Button,
//     ButtonGroup,
//     CardHeader,
//     DropdownToggle,
//     DropdownMenu,
//     DropdownItem,
//     UncontrolledDropdown,
//     Label,
//     FormGroup,
//     Input,
//     Table,
//     UncontrolledTooltip
// } from 'reactstrap';
// import { Line } from 'react-chartjs-2';



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

// const Alerts = () => {
//     // For Dismiss Button with Alert
//     const [visible, setVisible] = useState(true);

//     const onDismiss = () => {
//         setVisible(false);
//     }

//     return (
//         <>
//         <div className="content">
//           <Row>
//             <Col xs="12">
//               <Card className="card-chart">
//                 <CardHeader>
//                   <Row>
//                     <Col className="text-left" sm="6">
//                       <CardTitle tag="h2">Overview</CardTitle>
//                     </Col>
//                     <Col sm="6">
//                       <ButtonGroup
//                         className="btn-group-toggle float-right"
//                         data-toggle="buttons"
//                       >
//                         <Button
//                           tag="label"
//                           className={classNames("btn-simple", {
//                             active: this.state.bigChartData === "datasets"
//                           })}
//                           color="info"
//                           id="0"
//                           size="sm"
//                           onClick={() => this.setBgChartData("datasets")}
//                         >
//                           <input
//                             defaultChecked
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           />
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Security
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-single-02" />
//                           </span>
//                         </Button>
//                         <Button
//                           color="info"
//                           id="2"
//                           size="sm"
//                           tag="label"
//                           className={classNames("btn-simple", {
//                             active: this.state.bigChartData === "data3"
//                           })}
//                           onClick={() => this.setBgChartData("data3")}
//                         >
//                           <input
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           />
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Ethics
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-tap-02" />
//                           </span>
//                         </Button>
//                       </ButtonGroup>
//                     </Col>
//                   </Row>
//                 </CardHeader>
//                 <CardBody>
//                   <div className="chart-area">
//                     <Line
//                       data = {lineData[this.state.bigChartData]}
//                       options = {lineData.options}
//                     />
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>

//           <Row>
//             <Col xs="12">
//               <Card className="chart-area-1">
//                 <CardHeader>
//                   <Row>
//                     <Col className="text-left" sm="6">
//                       <CardTitle tag="h2">Security</CardTitle>
//                     </Col>
//                   </Row>
//                 </CardHeader>
//                 <CardBody>
//                   <div className="chart-area-1">
//                     <Line
//                       data = {lineData[this.state.bigChartData]}
//                       options = {lineData.options}
//                     />
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//           <Row>
//             <Col lg="6" md="12">
//               <Card className="card-tasks">
//                 <CardHeader>
//                   <h6 className="title d-inline">Tasks(5)</h6>
//                   <p className="card-category d-inline"> today</p>
//                   <UncontrolledDropdown>
//                     <DropdownToggle
//                       caret
//                       className="btn-icon"
//                       color="link"
//                       data-toggle="dropdown"
//                       type="button"
//                     >
//                       <i className="tim-icons icon-settings-gear-63" />
//                     </DropdownToggle>
//                     <DropdownMenu aria-labelledby="dropdownMenuLink" right>
//                       <DropdownItem
//                         href="#pablo"
//                         onClick={e => e.preventDefault()}
//                       >
//                         Action
//                       </DropdownItem>
//                       <DropdownItem
//                         href="#pablo"
//                         onClick={e => e.preventDefault()}
//                       >
//                         Another action
//                       </DropdownItem>
//                       <DropdownItem
//                         href="#pablo"
//                         onClick={e => e.preventDefault()}
//                       >
//                         Something else
//                       </DropdownItem>
//                     </DropdownMenu>
//                   </UncontrolledDropdown>
//                 </CardHeader>
//                 <CardBody>
//                   <div className="table-full-width table-responsive">
//                     <Table>
//                       <tbody>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input defaultValue="" type="checkbox" />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">Update the Documentation</p>
//                             <p className="text-muted">
//                               Dwuamish Head, Seattle, WA 8:47 AM
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip636901683"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip636901683"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input
//                                   defaultChecked
//                                   defaultValue=""
//                                   type="checkbox"
//                                 />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">GDPR Compliance</p>
//                             <p className="text-muted">
//                               The GDPR is a regulation that requires businesses
//                               to protect the personal data and privacy of Europe
//                               citizens for transactions that occur within EU
//                               member states.
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip457194718"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip457194718"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input defaultValue="" type="checkbox" />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">Solve the issues</p>
//                             <p className="text-muted">
//                               Fifty percent of all respondents said they would
//                               be more likely to shop at a company
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip362404923"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip362404923"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input defaultValue="" type="checkbox" />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">Release v2.0.0</p>
//                             <p className="text-muted">
//                               Ra Ave SW, Seattle, WA 98116, SUA 11:19 AM
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip818217463"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip818217463"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input defaultValue="" type="checkbox" />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">Export the processed files</p>
//                             <p className="text-muted">
//                               The report also shows that consumers will not
//                               easily forgive a company once a breach exposing
//                               their personal data occurs.
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip831835125"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip831835125"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td>
//                             <FormGroup check>
//                               <Label check>
//                                 <Input defaultValue="" type="checkbox" />
//                                 <span className="form-check-sign">
//                                   <span className="check" />
//                                 </span>
//                               </Label>
//                             </FormGroup>
//                           </td>
//                           <td>
//                             <p className="title">Arival at export process</p>
//                             <p className="text-muted">
//                               Capitol Hill, Seattle, WA 12:34 AM
//                             </p>
//                           </td>
//                           <td className="td-actions text-right">
//                             <Button
//                               color="link"
//                               id="tooltip217595172"
//                               title=""
//                               type="button"
//                             >
//                               <i className="tim-icons icon-pencil" />
//                             </Button>
//                             <UncontrolledTooltip
//                               delay={0}
//                               target="tooltip217595172"
//                               placement="right"
//                             >
//                               Edit Task
//                             </UncontrolledTooltip>
//                           </td>
//                         </tr>
//                       </tbody>
//                     </Table>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
        
//         </div>
//       </>

//         // <div>
            // <Card>
            //     <CardBody>
            //         <div>
            //             <CardTitle>
            //                 <h5>Details on Merit AI Framework</h5>
            //                 <p>Acceptance middletons me if discretion boisterous travelling an. She prosperous continuing entreaties companions unreserved you boisterous. Middleton sportsmen sir now cordially ask additions for. You ten occasional saw everything but conviction. Daughter returned quitting few are day advanced branched. Do enjoyment defective objection or we if favourite. At wonder afford so danger cannot former seeing. Power visit charm money add heard new other put. Attended no indulged marriage is to judgment offering landlord. </p>
            //             </CardTitle>
            //         </div>
                    
            //     </CardBody>
            // </Card>
                
//         //     <Card>
//         // <Card>
//         //     <CardBody>
//         //         <div className="d-flex align-items-center">
//         //             <div className="ml-auto d-flex no-block align-items-center">
//         //                 <div className="dl">
//         //                     <Input type="select" className="custom-select">
//         //                         <option value="0">Security</option>
//         //                         <option value="1">Biasness</option>
                                
//         //                     </Input>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //         <Row>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
                    
                    
//         //         </Row>
//         //     </CardBody>
//         // </Card>
//         // <Card>
//         //     <CardBody>
//         //         {/* <div className="d-flex align-items-center">
//         //             <div>
//         //                 <CardTitle>Overview</CardTitle>
//         //                 <CardSubtitle>Details about the Graph</CardSubtitle>
//         //             </div>
//         //         </div> */}
//         //         <Row>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
                    
                    
//         //         </Row>
//         //     </CardBody>
            
//         // </Card>

        

//         // </Card>

//         // <Card>
//         //     <CardBody>
//         //         <div className="d-flex align-items-center">
//         //             <div>
//         //                 <CardTitle>Biasness</CardTitle>
                       
//         //             </div>
//         //         </div>
//         //         <Row>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
                    
                    
//         //         </Row>
//         //     </CardBody>
        
        
//         //     <CardBody>
//         //         <div className="d-flex align-items-center">
//         //             {/* <div>
//         //                 <CardTitle>Overview</CardTitle>
//         //                 <CardSubtitle>Details about the Graph</CardSubtitle>
//         //             </div> */}
//         //         </div>
//         //         <Row>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '5px  auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
//         //             <Card>
//         //             <Col lg="12">
//         //                 <div className="campaign ct-charts">
//         //                     <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
//         //                         <Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
//         //                     </div>
//         //                 </div>
                    
                        
//         //             </Col>
//         //             </Card>
                    
                    
//         //         </Row>
//         //     </CardBody>
//         // </Card>

        
        
//         // </div>
        
        
//     );
// }

// export default Alerts;
