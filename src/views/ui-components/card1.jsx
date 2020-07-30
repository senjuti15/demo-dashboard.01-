import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Bar} from "react-chartjs-2";

import {
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
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
  chart12,chart13,chart14,chart15, chart16, chart17
  } from "../../variables/charts_1.js";
  
  class Card1 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      
        bigChartData12: "d12",
        bigChartData13: "d13",
        bigChartData14: "d14",
        bigChartData15: "d15",
        bigChartData16: "d16",
        bigChartData17: "d17"
        
      };
    }
    setBgChartData = name => {
      this.setState({
        bigChartData: name,
        bigChartData12: name,
        bigChartData13: name,
        bigChartData14: name,
        bigChartData15: name,
        bigChartData16: name,
        bigChartData17: name
      });
    };

    render() {
        return ( 
            <>
            
            <CardHeader tag="h4">AI Risk Assessment for Security</CardHeader>
            <Card></Card>
            <Card>
            <Row>
            <Col>
                  <CardBody>
                      <CardTitle tag="h5">Dataset : Image</CardTitle>
                      <CardSubtitle>Accuracy Score</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart12[this.state.bigChartData12]}
                            options = {chart12.options}/>
                            </div>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                The above graph depicts the impact on accuracy score based on various attacks on AI models.
                                  </CardSubtitle>
                                  </div>
                                  </Card>
                                  </div>
                                  
                </CardBody></Col>
                <Col><CardBody>
                      <CardTitle tag="h5">Dataset : Image</CardTitle>
                      <CardSubtitle>Metrics Score	</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart13[this.state.bigChartData13]}
                            options = {chart13.options}/>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                The above graph compares threshold values of sensitivity and robustness against actual data based on anomalies would be analysed and normalised.                                   </CardSubtitle>
                                  </div>
                                  </Card>
                                  </div>
                                  </div>
                </CardBody>
              </Col>
             </Row>
            <Card></Card>
            <Row>
            <Col>
                  <CardBody>
                      <CardTitle tag="h5">Dataset : Text</CardTitle>
                      <CardSubtitle>Model Performance</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart14[this.state.bigChartData14]}
                            options = {chart14.options}/>
                            </div>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                Above plot shows the impact of various attacks on text models.
                                  </CardSubtitle>
                                  </div>
                                  </Card>
                                  </div>
                </CardBody></Col>
                <Col><CardBody>
                <CardTitle tag="h5">Dataset : Text</CardTitle>
                      <CardSubtitle>Distortion Rate For Model</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart15[this.state.bigChartData15]}
                            options = {chart15.options}/>
                            </div>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                Lower the distortion rates = weaker the model <div></div>Higher distortion rate = stronger the model
                                  </CardSubtitle>
                                  </div>
                                  </Card>
                                  </div>
                </CardBody></Col>
             </Row>

            <Card></Card>
             <Row>
            <Col>
                  <CardBody>
                      <CardTitle tag="h5">Dataset : Tabular</CardTitle>
                      <CardSubtitle>Accuracy Score</CardSubtitle>
                      <div className="chart-area-1">
                        <Bar
                            data = {chart16[this.state.bigChartData16]}
                            options = {chart16.options}/>
                            </div>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                The above graph provides insights on accuracy impacts due to various adversarial attacks on tabular data. 
                                  </CardSubtitle>
                                  </div>
                                  </Card></div>
                </CardBody></Col>
                <Col><CardBody>
                      <CardTitle tag="h5">Dataset : Tabular</CardTitle>
                      <CardSubtitle>Error and Robustness Metric</CardSubtitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chart17[this.state.bigChartData17]}
                            options = {chart17.options}/>
                            </div>
                            <Card></Card>
                            <div>
                              <Card>
                              <div>
                                <CardSubtitle tag="h5">
                                The above graph compares adversarial error and robustness of various classifier with the thresholds.
                                  </CardSubtitle>
                                  </div>
                                  </Card></div>
                </CardBody>
              </Col>
             </Row>


             

            </Card>

{/* 
            <Card>
            <Row>
            <Col>
                  <CardBody>
                      <CardTitle>Dataset Type: Text</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                
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
            <Row>
            <Col>
                  <CardBody>
                      <CardTitle>Dataset Type: Tabular</CardTitle>
                    <div className="chart-area-1">
                        <Bar
                            data = {chartExample1[this.state.bigChartData]}
                            options = {chartExample1.options}/>
                            </div>
                </CardBody></Col>
                
                        
                   
                <Col>
                <CardBody>
                
                    <div className="chart-area-1">
                        <Bar
                        data = {chartExample1[this.state.bigChartData]}
                        options = {chartExample1.options}
                        />
                    </div>
                </CardBody>
                </Col> */}
            {/* </Row>
            </Card> */}
            

            
           
            
            </>

);
}
}

export default Card1;