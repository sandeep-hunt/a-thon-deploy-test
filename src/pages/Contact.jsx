import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap';
import Header1 from '../components/Header1';
import ContactUs from '../assets/images/misc/contactUs.png'
import { Link } from 'react-router-dom';
import StickyCont from '../components/StickyCont';

const Contact = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
        window.scrollTo(0, 0);
    }, []);

    return (
        <React.Fragment>
            <Helmet>
                <title>A-THON | Contact Us</title>
            </Helmet>
            {loading ? (
                <Preloader />
            ) : (
                <>
                    <Header1 />
                    <StickyCont />
                    <Container className='mt-4'>
                        <Row>
                            <Col sm={12}>
                                <h4>Contact Us</h4>
                            </Col>
                            <Col sm={12} md={6} className='mt-3'>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>R & D CENTRE</h6>
                                            <p className='contactTxt'>Plot no: 08, Building B, KIADB Industrial Area, Dasarahosahalli, Bangarpet, Karnataka 563114</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>CORPORATE OFFICE</h6>
                                            <p className='contactTxt'>308, 1st floor, 100ft. Rd, Indira Nagar 1st stage, Bengaluru, Karnataka 560038</p>
                                        </div>
                                    </Col>
                                    <div className="contact-details">
                                        <Link to="tel:+919740025534">Mob: +91 9740025534</Link>
                                        <Link to="mailto:info@a-thonallterrain.com">Email: info@a-thonallterrain.com</Link>
                                    </div>
                                </Row>
                                <Row className='mt-3'>
                                    <Col sm={12} className='mb-3'>
                                        <h4>Our Footprints</h4>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>RELIABILITY ENGINEERING</h6>
                                            <p className='contactTxt'>Plot no: 40, KIADB Industrial Area, Dasarahosahalli, Bangarpet, Karnataka 563114</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>TEST TRACK</h6>
                                            <p className='contactTxt'>Nerelekere, Thammenhalli, Bangarpet, Karnataka 563114</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>PRODUCTION</h6>
                                            <p className='contactTxt'>Plot no: 10 & 11, KIADB Industrial Area, Dasarahosahalli, Bangarpet, Karnataka 563114</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className="contact-wrapper">
                                            <h6 className='contactrHead'>EXPERIENCE CENTRE</h6>
                                            <p className='contactTxt'>Hoskote, Karnataka 562114</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={12} md={6}>
                                <img src={ContactUs} className='img-fluid' alt="" />
                            </Col>
                        </Row>
                    </Container></>
            )}
        </React.Fragment>
    )
}

export default Contact