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
    UncontrolledTooltip,
    CardSubtitle,
    CardDeck
  } from "reactstrap";

// core components
import {
    chart21, chart22, chart23
  } from "../../variables/chart_2.js";
  
  class chart2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        bigChartData21: "d21",bigChartData22: "d22",bigChartData23: "d23"
      };
    }
    setBgChartData = name => {
      this.setState({
        bigChartData21: name
      });
    };

    render() {
        return ( 
            <>
            <CardHeader tag="h4">AI Risk Assessment for Ethics</CardHeader>
            <Card></Card>
            <Card>
            <CardBody>
            <Row>
                <Col>
                    <CardTitle tag="h5" >Ideal Bias</CardTitle>
                    <div><p>Acceptable bias in the defined task which will not hinder with the results</p></div>
                    </Col>
                    <Col>
                    <CardTitle tag="h5">Data Bias</CardTitle>
                    <div><p>Inherent bias in the data due to values and classes</p></div>
                    </Col>
                    <Col>
                    <CardTitle tag="h5">Model Bias</CardTitle>
                    <div><p>Bias added to the task because of the selected model</p></div>
                </Col>
            </Row> 
            </CardBody>     
            
             
               
            <Row>
                <Col>
                <CardBody>
                      <CardTitle tag="h6">Dataset: Image</CardTitle>
                      <CardSubtitle>Automobile Damage Analysis</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart21[this.state.bigChartData21]}
                            options = {chart21.options}
                            height = {"230px"}
                            />
                            </div>
                            <CardBody></CardBody>
                            <div class="card text-center" >
                            <div class="p-3 mb-2 bg-gradient-light text-dark"><CardTitle tag="h7">Net Bias : 0.20</CardTitle></div>
                            </div>
                </CardBody>
                </Col>
                <Col>
                <CardBody>
                <CardTitle tag="h6">Dataset: Text</CardTitle>
                      <CardSubtitle>Social Media Conversations</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart22[this.state.bigChartData22]}
                            options = {chart22.options}
                            height = {"230px"}
                            />
                            </div>
                            <CardBody></CardBody>
                            <div class="card text-center" >
                            <div class="p-3 mb-2 bg-gradient-light text-dark"><CardTitle tag="h7">Net Bias : 2.50</CardTitle></div></div>
                </CardBody>
                </Col>
                <Col>
                <CardBody>
                <CardTitle tag="h6">Dataset: Tabular</CardTitle>
                      <CardSubtitle>Population Dataset</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart23[this.state.bigChartData23]}
                            options = {chart23.options}
                            height = {"230px"}
                            />
                            </div>
                            <CardBody></CardBody>
                            <div class="card text-center" >
                            <div class="p-3 mb-2 bg-gradient-light text-dark"><CardTitle tag="h7">Net Bias : 3.00</CardTitle></div>
                            </div>
                </CardBody>
                </Col>
                
                </Row>
                <CardBody>

            </CardBody>     
            </Card>

           
            

            </>

);
}
}

export default chart2;