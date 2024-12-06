import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Wheel from '../assets/images/misc/wheel.svg'
import CollabrativeAdb from '../assets/images/misc/collabrativeAdb.svg'
import Autonomous from '../assets/images/misc/adbhut_autonomous.png'

const Vision = () => {
    return (
        <React.Fragment>
            <div className="vision-container">
                <Container>
                    <Row>
                        <Col sm={12} md={7}>
                            <div className="vision-content text-center">
                                <img src={CollabrativeAdb} className='collabrativeDetImg' alt="" />
                                <h5 className='section-title1'>AdbhutBot</h5>
                                <p className='section-para'>A pioneering initiative - ALL-TERRAIN Assisted Autonomous tech for plantation & orchards;
                                Integrated aerial harvesting, robotics, tethered drone & sub-systems.</p>
                                <img src={Autonomous} className="img-fluid mt-4" alt="Yellow 6-wheel UTV with remote control and camera, featuring advanced technology for efficient agricultural practices in farming" />
                            </div>
                        </Col>
                        <Col sm={12} md={5}>
                            <div className="vision-content text-center">
                                <h5 className='section-title1'>Vision & Mission</h5>
                                <p className='section-para'>All-terrain advance technologies beyond roads<br/>ensuring adaptability to hostile extreme terrains.</p>
                                <img src={Wheel} className='img-fluid' alt="A wheel listing out the All terrain technology as follows:
                                Rescue and disaster management, assisted 
                                autonomous modularity, farm utility plantation 
                                and orchards, All terrain series hybrid, AI & ML 
                                enabled robotics and drone integration, forestry 
                                and coastal management, patrol and 
                                surveillance, 
                                " />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default Vision