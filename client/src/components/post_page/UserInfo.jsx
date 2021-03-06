import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormContext from "react-bootstrap/cjs/FormContext";

const UserInfo = (props) => {

    return(
                <Form.Row className='container'>
                    <Form.Group  controlId="validationCustom01" className='col-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Name"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'name')}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom02" className='col-4'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Email"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'email')}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom03" className='col-3'>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Phone"
                            onChange={(e) => props.recordStateInfo(e, 'userInfo', 'phone')}
                        />
                    </Form.Group>
                    <Form.Group controlId="validationCustom04" className='col-2'>
                        <Form.Label>Zipcode</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Zipcode"
                            onChange={(e) => props.recordStateInfo(e, '', 'zip')}
                        />
                    </Form.Group>
                    <div className='row'>
                        <Form.Group controlId="validationCustom05" className='col-4'>
                            <Form.Label >Price /day</Form.Label>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">$</span>
                                </div>
                                <input onChange={(e) => props.recordStateInfo(e, 'filters', 'price')}
                                       placeholder="0" type="text" className="form-control" aria-label="Amount (to the nearest dollar)" required/>
                                <div className="input-group-append">
                                    <span className="input-group-text">.00</span>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group controlId="validationCustom06" className='row-10'>
                            <ul className='col'>
                                <h4>
                                    Allow text messages?
                                </h4>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="textAllowedcustomRadio" name="textAllowedCustomRadio" value={true} className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'userInfo', 'textAllowed')}/>
                                    <label className="custom-control-label" htmlFor="textAllowedcustomRadio">Yes</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input type="radio" id="textAllowedcustomRadio2" name="textAllowedCustomRadio" value={false} className="custom-control-input" onChange={(e) => props.recordStateInfo(e, 'userInfo', 'textAllowed')}/>
                                    <label className="custom-control-label" htmlFor="textAllowedcustomRadio2">No</label>
                                </div>
                            </ul>
                        </Form.Group>
                    </div>
                </Form.Row>

    )
};

export default UserInfo