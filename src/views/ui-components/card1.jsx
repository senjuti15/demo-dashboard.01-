import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line} from "react-chartjs-2";

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
    security1
  } from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/variables/charts.js";
  
  class Card1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bigChartData_sec: "d1",
      };
    }
    setBgChartData = name => {
      this.setState({
        bigChartData: name,
        bigChartData1: name
      });
    };

    render() {
        return ( 
            <>
            <Card>
            <Col>
                    
                    <CardBody>
                        <CardTitle>Security</CardTitle>
                        
                      <div className="chart-area-1">
                      
                          <Line
                              data = {security1[this.state.bigChartData_sec]}
                              options = {security1.options} 
                              height={"100px"}/>
                              
                              </div>
                              
                  </CardBody>
                  
                  </Col>
                
            </Card>
            </>

);
}
}

export default Card1;