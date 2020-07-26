import React from "react";

import img1 from 'assets/images/users/1.jpg';

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Input,
    Table
} from 'reactstrap';

const Projects = () => {
    return (
        

        <Card>
            <CardBody>
                <div className="d-flex align-items-center">
                    <div>
                        <CardTitle>Suggestions</CardTitle>
                        
                    </div>
                </div>
                <Table className="no-wrap v-middle" responsive>
                    <thead>
                        <tr className="border-0">
                            <th className="border-0">PILLAR</th>
                            <th className="border-0">DESCRIPTION</th>

                            <th className="border-0">SEVERITY</th>
                            <th className="border-0">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Security</h5></div>
                                </div>
                            </td>
                            <td>Details
                            </td>

                            <td>Critical</td>

                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label class="form-check-label" for="inlineRadio1">Approve</label></div>
                            <div class="form-check form-check-inline">
                            </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Biasness</h5></div>
                                </div>
                            </td>
                            <td>Details</td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label class="form-check-label" for="inlineRadio1">Approve</label></div>
                            <div class="form-check form-check-inline">
                            
                            </div>
                            </td>
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                               
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Compliance</h5></div>
                                </div>
                            </td>
                            <td>Details
                            </td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label class="form-check-label" for="inlineRadio1">Approve</label></div>
                            <div class="form-check form-check-inline">
                          
                            </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    {/* <div className="mr-2"> alt="user" className="rounded-circle" width="45"</div> */}
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Tranperancy</h5></div>
                                </div>
                            </td>
                            <td>Details
                            </td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label class="form-check-label" for="inlineRadio1">Approve</label></div>
                            <div class="form-check form-check-inline">
                         
                            </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                 
                                    <div className="">
                                        <h5 className="mb-0 font-16 font-medium">Business Impact</h5></div>
                                </div>
                            </td>
                            <td>Details
                            </td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                            <label class="form-check-label" for="inlineRadio1">Approve</label></div>
                            <div class="form-check form-check-inline">
              
                            </div>
                            </td>
                            
                        </tr>
                        
                    </tbody>
                </Table>
            </CardBody>
        </Card >
    );
}

export default Projects;
