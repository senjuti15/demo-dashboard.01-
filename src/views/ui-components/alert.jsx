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
  eth_btn
} from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/variables/charts.js";



class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      bigChartData1: "data3"
    };

    this.handleClickSecurity = this.handleClickSecurity.bind(this);
    this.handleClickEthics = this.handleClickEthics.bind(this);
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name,
      bigChartData1: name
    });
  };

  handleClickSecurity(){
    this.setState(state=> ({
      flag1: true,
      flag2: false,
    }));
    this.setBgChartData("data3");
  }

  handleClickEthics(){
    this.setState(state=> ({
      flag1: false,
      flag2: true,
    }));
    this.setBgChartData("data1")
  }
  
  render() {
    return (
      <>
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
                          
                          color="info"
                          className={classNames("btn-simple", {
                            active: this.state.flag2 === true,
                            active: this.state.bigChartData === "data1"
                          })}

                          onClick={this.handleClickEthics}>
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          checked/>
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            Security
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                        <Button
                          
                          color="info"
                          className={classNames("btn-simple", {
                            active: this.state.flag1 === true, 
                            active: this.state.bigChartData1 === "data3"
                          })}
                          onClick= {this.handleClickSecurity}
                         
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
                        
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}
                          color="info"
                         
                          // onClick={this.handleClickEthics}
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
                       
                          // onClick={() => this.setBgChartData("data1")}
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
                         
                          // onClick={() => this.setBgChartData("data1")}
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
                        <Bar
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                {/* <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>
                 */}
            </Row>
            </Card> 
            <Card>
                
              <Row xs="20">
                  <Col>
                  <CardBody>
                  <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                {/* <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>
                 */}
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
                        <Bar
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col>

                {/* <Col>          
                <CardBody>
                <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col> */}
                
            </Row>
            </Card>  

            <Card>
                //  Details         
            </Card>

            </Card>
            






            <Card>
                
              <Row xs="20">
                  <Col>
                  <CardBody>
                      <CardTitle>Dataset Type</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {eth_btn[this.state.bigChartData1]}
                            options = {eth_btn.options}/>
                            </div>
                </CardBody></Col></Row></Card>
                
                        


            
           

            </Card>
         
            
        
            

          
        
        </div>
      </>
    );
  }
}

export default Dashboard;