import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import Card1 from "./card1.jsx";
import Card2 from "./card2.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flag1: true,
      flag2: false,
    };
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
      bigChartData1: name,
    });
    if (name == "data1") this.setState({ flag1: true, flag2: false });
    else this.setState({ flag2: true, flag1: false });
  };

  render() {
    return (
      <>
        <div className="content">
          
            {/* <Card className="card-chart"> */}
              <CardHeader>
                <Row>
                  {/* <Col className="text-left" sm="6">
                    <CardTitle tag="h3">AI Assessment Analytics</CardTitle>
                  </Col> */}
                  <Col sm="66">
                    <ButtonGroup 
                      className="btn-group-toggle float-right"
                      data-toggle="buttons"
                    >
                      <Button
                        color="warning"
                        className={classNames("btn-simple", {
                          active: this.state.flag2 === "true",
                          active: this.state.bigChartData === "data1",
                        })}
                        onClick={() => this.setBgChartData("data1")}
                      >
                        <input
                          className="d-none"
                          name="options"
                          type="radio"
                          checked
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Security
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>
                      <Button
                        color="warning"
                        className={classNames("btn-simple", {
                          active: this.state.flag1 === "true",
                          active: this.state.bigChartData1 === "data3"
                        })}
                        onClick={() => this.setBgChartData("data3")}
                      >
                         <input
                          className="d-none"
                          name="options"
                          type="radio"
                          size ="sm"
                          checked
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Ethics
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-tap-02" />
                        </span>
                      </Button>

                      <Button
                        className={classNames("btn-simple", {
                          // active: this.state.bigChartData === "data1",
                        })}
                        color="warning"
                        // onClick={() => this.setBgChartData("data1")}
                      >
                        <input
                          defaultChecked
                          className="d-none"
                          name="options"
                          type="radio"
                          checked
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Compliance
                        </span>
                        <span className="d-block d-sm-none">
                          <i className="tim-icons icon-single-02" />
                        </span>
                      </Button>
                      <Button
                        className={classNames("btn-simple", {
                          // active: this.state.bigChartData === "data1",
                        })}
                        color="warning"
                        // onClick={() => this.setBgChartData("data1")}
                      >
                        <input
                          defaultChecked
                          className="d-none"
                          name="options"
                          type="radio"
                          checked
                        />
                        <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                          Transparency
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
                  {/* card1 */}
                  <Col>
                    <div
                      style={{ display: this.state.flag1 ? "block" : "none" }}
                    >
                      <Card1 />
                    </div>
                  </Col>
                </Row>
                {/* card2 */}
                <Row xs="20">
                  <Col>
                    <div
                      style={{ display: this.state.flag2 ? "block" : "none" }}
                    >
                      <Card2 />
                    </div>
                  </Col>
                </Row>
              </Card>
            {/* </Card> */}
          
        </div>
      </>
    );
  }
}

export default Dashboard;














































/////////////////////////////////////////////////////////


// import React from "react";
// // nodejs library that concatenates classes
// import classNames from "classnames";
// // react plugin used to create charts
// import { Line, Bar } from "react-chartjs-2";


// // reactstrap components
// import {
//   Button,
//   ButtonGroup,
//   Card,
//   CardHeader,
//   CardBody,
//   CardTitle,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   Label,
//   FormGroup,
//   Input,
//   Table,
//   Row,
//   Col,
//   UncontrolledTooltip
// } from "reactstrap";

// // core components
// import {
//   chartExample1,
//   eth_btn
// } from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/variables/charts.js";



// class Dashboard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       bigChartData: "data1",
//       bigChartData1: "data3"
//     };

//     this.handleClickSecurity = this.handleClickSecurity.bind(this);
//     this.handleClickEthics = this.handleClickEthics.bind(this);
//   }
//   setBgChartData = name => {
//     this.setState({
//       bigChartData: name,
//       bigChartData1: name
//     });
//   };

//   handleClickSecurity(){
//     this.setState(state=> ({
//       flag1: true,
//       flag2: false,
//     }));
//     this.setBgChartData("data3");
//   }

//   handleClickEthics(){
//     this.setState(state=> ({
//       flag1: false,
//       flag2: true,
//     }));
//     this.setBgChartData("data1")
//   }
  
//   render() {
//     return (
//       <>
//         <div className="content">
//         <Card> 
          
           
//               <Card className="card-chart">
//                 <CardHeader>
//                   <Row>
//                     <Col className="text-left" sm="6">
//                       <CardTitle tag="h2">Tentative Title</CardTitle>
//                     </Col>
//                     <Col sm="6">
//                       <ButtonGroup
//                         className="btn-group-toggle float-right"
//                         data-toggle="buttons"
//                       >
//                         <Button
                          
//                           color="info"
//                           className={classNames("btn-simple", {
//                             active: this.state.flag2 === "true", 
//                             active: this.state.bigChartData === "data1"
//                           })}

//                           onClick={this.handleClickEthics}>
//                           <input
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           checked/>
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Security
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-tap-02" />
//                           </span>
//                         </Button>
//                         <Button
                          
//                           color="info"
//                           className={classNames("btn-simple", {
//                             active: this.state.flag1 === "true", 
//                             active: this.state.bigChartData1 === "data3"
//                           })}
//                           onClick= {this.handleClickSecurity}
                         
//                         >
//                           <input
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           checked/>
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Ethics
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-tap-02" />
//                           </span>
//                         </Button>

//                         <Button
                        
//                           className={classNames("btn-simple", {
//                             active: this.state.bigChartData === "data1"
//                           })}
//                           color="info"
                         
//                           // onClick={this.handleClickEthics}
//                         >
//                           <input
//                             defaultChecked
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           checked/>
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Compliance
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-single-02" />
//                           </span>
//                         </Button>
//                         <Button
//                           tag="label"
//                           className={classNames("btn-simple", {
//                             active: this.state.bigChartData === "data1"
//                           })}
//                           color="info"
//                           id="0"
                       
//                           // onClick={() => this.setBgChartData("data1")}
//                         >
//                           <input
//                             defaultChecked
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           />
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Transparency
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-single-02" />
//                           </span>
//                         </Button>
//                         <Button
//                           tag="label"
//                           className={classNames("btn-simple", {
//                             active: this.state.bigChartData === "data1"
//                           })}
//                           color="info"
//                           id="0"
                         
//                           // onClick={() => this.setBgChartData("data1")}
//                         >
//                           <input
//                             defaultChecked
//                             className="d-none"
//                             name="options"
//                             type="radio"
//                           />
//                           <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
//                             Business Impact
//                           </span>
//                           <span className="d-block d-sm-none">
//                             <i className="tim-icons icon-single-02" />
//                           </span>
//                         </Button>
                        
//                       </ButtonGroup>
                      
                      
//                     </Col>
//                   </Row>
//                 </CardHeader>
//               <Card>
                
//               <Row xs="20">
                //   <Col>
                //   <CardBody>
                //       <CardTitle>Dataset Type</CardTitle>
                //     <div className="chart-area-1">
                //         <Bar
                //             data = {chartExample1[this.state.bigChartData]}
                //             options = {chartExample1.options}/>
                //             </div>
                // </CardBody></Col>
                
                        
                   
                // <Col>
                // <CardBody>
                // <CardTitle>Dataset Type</CardTitle>
                //     <div className="chart-area-1">
                //         <Bar
                //         data = {chartExample1[this.state.bigChartData]}
                //         options = {chartExample1.options}
                //         />
                //     </div>
                // </CardBody>
                // </Col>

//                 {/* <Col>          
//                 <CardBody>
//                 <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                         data = {chartExample1[this.state.bigChartData]}
//                         options = {chartExample1.options}
//                         />
//                     </div>
//                 </CardBody>
//                 </Col>
//                  */}
//             </Row>
//             </Card> 
//             <Card>
                
//               <Row xs="20">
//                   <Col>
//                   <CardBody>
//                   <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                             data = {chartExample1[this.state.bigChartData]}
//                             options = {chartExample1.options}/>
//                             </div>
//                 </CardBody></Col>
                
                        
                   
//                 <Col>
//                 <CardBody>
//                 <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                         data = {chartExample1[this.state.bigChartData]}
//                         options = {chartExample1.options}
//                         />
//                     </div>
//                 </CardBody>
//                 </Col>

//                 {/* <Col>          
//                 <CardBody>
//                 <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                         data = {chartExample1[this.state.bigChartData]}
//                         options = {chartExample1.options}
//                         />
//                     </div>
//                 </CardBody>
//                 </Col>
//                  */}
//             </Row>
//             </Card> 

            
//             <Card>
//                 //  Details         
//             </Card>
            
//             <Card>
                
//               <Row xs="20">
//                   <Col>
//                   <CardBody>
//                   <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                             data = {chartExample1[this.state.bigChartData]}
//                             options = {chartExample1.options}/>
//                             </div>
//                 </CardBody></Col>
                
                        
                   
//                 <Col>
//                 <CardBody>
//                 <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                         data = {chartExample1[this.state.bigChartData]}
//                         options = {chartExample1.options}
//                         />
//                     </div>
//                 </CardBody>
//                 </Col>

//                 {/* <Col>          
//                 <CardBody>
//                 <CardTitle>Dataset Type</CardTitle>
//                     <div className="chart-area-1">
//                         <Bar
//                         data = {chartExample1[this.state.bigChartData]}
//                         options = {chartExample1.options}
//                         />
//                     </div>
//                 </CardBody>
//                 </Col> */}
                
//             </Row>
//             </Card>  

//             <Card>
//                 //  Details         
//             </Card>

//             </Card>
            
         
            
        
            

//           </Card>
        
//         </div>
//       </>
//     );
//   }
// }

// export default Dashboard;