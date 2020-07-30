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
                            <th className="border-0">Pillar</th>
                            <th className="border-0">Description</th>

                            <th className="border-0">Severity</th>
                            <th className="border-0">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div className="d-flex no-block align-items-center">
                                    <div className="">
                                        Security</div>
                                </div>
                            </td>
                            <td>Adversarial vulnerabilities in class 22
                            </td>

                            <td>Critical</td>

                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"></input>
                            <label class="form-check-label">Approve</label></div>
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
                                        Ethics</div>
                                </div>
                            </td>
                            <td>Severe bias against minority group</td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"></input>
                            <label class="form-check-label" >Approve</label></div>
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
                                        Compliance</div>
                                </div>
                            </td>
                            <td>Decision process for class 15 is unclear
                            </td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"></input>
                            <label class="form-check-label" >Approve</label></div>
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
                                        Transparency</div>
                                </div>
                            </td>
                            <td>Not compliant with GDPR regualtions.
                            </td>

                            <td>Critical</td>
                            
                            <td>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"></input>
                            <label class="form-check-label" >Approve</label></div>
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
