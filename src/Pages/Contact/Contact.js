import React from 'react';
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
const Contact = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
    };
    return (
        <div className='contact-part'>
            <Container>
                <Row>

                    <Col lg={6}>
                        <div className="contact-left">
                            <h3>Contact Us</h3>
                            <p>If your looking for a sales-oriented approach, you can use this one from IMPACT's Contact Us page.</p>
                            <div className="single-contact">
                                <span>Call us</span>
                                <p>01872400423
                                </p>
                                <p>01580481281

                                </p>
                            </div>
                            <div className="single-contact">
                                <span>EMAIL ADDRESS</span>
                                <p>mildlifej@gmail.com</p>
                            </div>
                            <div className="single-contact">
                                <span>LOCATION</span>
                                <p>Dania, Jatrabari, Dhaka -1236</p>
                            </div>
                            <div className="single-contact">
                                <span>TIME:</span>
                                <p>Monday - Friday</p>
                                <p>08AM - 10PM</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="contact-right">
                            <h3>Get In Touch</h3>
                            <p>Your email address will not be published. Required fields are marked *</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label htmlFor="name">Name   *</label>
                                <input required id='name' {...register("name", { required: true })} />
                                <label htmlFor="email">Username or email  *</label>
                                <input required id='email' {...register("email", { required: true })} />
                                <label htmlFor="sub">Subject  *</label>
                                <input required id='sub' {...register("sub", { required: true })} />
                                <label htmlFor="mess">Message  *</label>
                                <input required id='mess'  {...register("mess")} />
                                <input className='submit-btn btn btn-success' type="submit" value="Send Message" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;