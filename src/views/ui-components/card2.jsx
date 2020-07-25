import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";


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
  } from "/Users/senjutibala/Documents/SigmaRed_projects/demo/demo-dashboard.01/src/variables/charts.js";
  
  class chart2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bigChartData1: "data3"
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
                
            </Row>
            </Card>  

            <Card>
                
                //  Details         
            </Card>
            </>

);
}
}

export default chart2;