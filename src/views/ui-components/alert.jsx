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



import {
  chart1,
  data1,
  bigChartData
}from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/views/ui-components/card1.jsx";
import {
  chart2
} from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/views/ui-components/card2.jsx";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      bigChartData1: "data3",
      flag1: true
      
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name,
      bigChartData1: name,
      flag1: false
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
                          
                          color="info"
                          className={classNames("btn-simple", {
                            active: this.state.bigChartData === "data1"
                          })}

                          onClick={() => this.setBgChartData("data1")}
                        >
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
                            active: this.state.bigChartData1 === "data3"
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
                            active: this.state.bigChartData1 === "data3"
                          })}
                          color="info"
                          id="1"
                        
                          // onClick={() => this.setBgChartData("data1")}
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
                      
                          // onClick={() => this.setBgChartData("data3")}
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
                            active: this.state.bigChartData === "data3"
                          })}
                          color="info"
                          id="0"
                         
                          // onClick={() => this.setBgChartData("data3")}
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

                  <Card>
                    <chart1></chart1>
                  </Card>
                </CardHeader>
              </Card>     
        </Card>
        </div>
        </>

    );
  }
}

export default Dashboard;