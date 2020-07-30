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
    security1
} from "../../variables/charts.js";

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
                <CardTitle>Increased Business Impact Post SigmaRed Deployment</CardTitle>
                    <div className="chart-area-1">
                        <Line
                        data = {badges1[this.state.bigChartData]}
                        options = {badges1.options}
                        height = {"60px"}
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
                                <CardTitle>Pillar Wise Contribution To Business Impact Over Time</CardTitle>
                                
                            <div className="chart-area-1">
                            
                                <Bar
                                    data = {security1[this.state.bigChartData_sec]}
                                    options = {security1.options} 
                                    height={"55px"}/>
                                    
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
