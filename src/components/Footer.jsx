import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import LogoBtm from '../assets/images/logoBtm.svg'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareYoutube, faLinkedin, faSquareFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import MakeIndia from '../assets/images/misc/made_in_india.png'
import Modal from 'react-bootstrap/Modal'

const Footer = () => {
    const [showLegal, setShowLegal] = useState(false);
    const handleCloseLegal = () => setShowLegal(false);
    const handleShowLegal = () => setShowLegal(true);
    const downloadFile = () => {
        // The file path is relative to the public folder in your React project
        const filePath = '/a-thon_media_kit.zip';
        const link = document.createElement('a');
        link.href = filePath;
        link.download = 'a-thon_media_kit.zip'; // Specify the file name you want to use for download
        link.click();
        setMenuOpen(false)
    };
    return (
        <React.Fragment>
            <footer>
                <Container>
                    <div className="footer-bottom">
                        <Row>
                            <Col sm={12} md={3}>
                                <div className="footer-bottomLF">
                                    <h5 className='text-uppercase'>QUICK LINKS</h5>
                                    <Link to="/">Home</Link>
                                    <Link to="/adbhut">Agri & Robotics</Link>
                                    <Link to="/service">Services</Link>
                                    <Link to="/dealership_opportunity">Become a Dealer</Link>
                                    <Link to="https://forms.zohopublic.in/adminathon/form/AshvaProductConfiguration/formperma/n7hbf7eGDrGcAWhOWAcPzP5FKRwQ0b-izQcMvzDOUEw" target='_blank'>Build Your ASHVA</Link>
                                    <Link to="/experience-centre">Experience Centre</Link>
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="footer-bottomLF">
                                    <h5 className='text-uppercase'>products</h5>
                                    <Link to="/ashva_4x4">ASHVA 4X4</Link>
                                    <Link to="/ashva_6x6">ASHVA 6X6</Link>
                                    <Link to="/ashva_4s">ASHVA 4S</Link>
                                    <Link to="/ashva_ut">ASHVA UT</Link>
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="footer-bottomLF">
                                    <h5 className='text-uppercase'>about us</h5>
                                    <Link to="/our-story">Our Story</Link>
                                    <Link to="/team">Team & Facilities</Link>
                                    <Link to="https://docs.google.com/forms/d/e/1FAIpQLScIgLzjOpQyuqigR-fNXc2PozJPFvyEgzImJMisEDzUnN7Rrg/viewform" target='_blank'>Join Our Team</Link>
                                    <Link to="#" onClick={downloadFile}>Our Media Kit</Link>
                                    <Link to="/contact">Contact</Link>
                                </div>
                            </Col>
                            <Col sm={12} md={3}>
                                <div className="footer-bottomLF">
                                    <h5 className='text-uppercase'>legal</h5>
                                    <Link onClick={handleShowLegal} >Legal Disclaimer</Link>
                                    <Link to="/terms">Privacy</Link>
                                    <Link to="/equal_opportunities">Equal Opportunities</Link>
                                    <Link to="/warranty_policy">Warranty Policy</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="footer-top">
                        <div className="footer-topLF">
                            <img src={LogoBtm} className='footImg' alt="" />
                            <p>©  2024. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.<br />CIN: U34100KA2022PTC161300</p>
                        </div>
                        <div className="footer-topMD">
                            <div className="footer-inner">
                                <h6>Reach us on</h6>
                                <p><Link to="mailto: mail@a-thonallterrain.com">mail@a-thonallterrain.com</Link></p>
                            </div>
                        </div>
                        <div className="footer-topRT">
                            <div className="footer-inner">
                                <Link to="https://www.instagram.com/athon_allterrain/" target='_blank'><FontAwesomeIcon icon={faSquareInstagram} size="2x" /></Link>
                                <Link to="https://youtube.com/@a-thon?si=UhZbsETEoj_822Kq" target="_blank"><FontAwesomeIcon icon={faSquareYoutube} size="2x" /></Link>
                                <Link to="https://www.linkedin.com/company/a-thon-allterrain-pvt-ltd/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></Link>
                                <Link to="https://x.com/ATHON1705" target='_blank'><FontAwesomeIcon icon={faXTwitter} size="2x" /></Link>
                                <Link to="https://www.facebook.com/share/cND9rTs3aHFeZcEi" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} size="2x" /></Link>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
            <div className="footer_bottom_sec">
                <img src={MakeIndia} className='img-fluid' alt="make in india" />
            </div>

            <Modal show={showLegal} size="xl" onHide={handleCloseLegal}>
                <Modal.Header closeButton>
                    <Modal.Title>Legal Disclaimer</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>A-thon Allterrain Private Limited (“A-THON”) retains copyright on all the text, graphics and trademarks displayed on this site. All the text, graphics and trademarks displayed on this site are owned by A-thon Allterrain Private Limited and used under licence by A-THON affiliates.</p>
                    <p>You may print copies of the information on this site for your personal use and store the files on your computer for personal use. You may not distribute text or graphics to others without the express written consent of A-THON and A-THON affiliates. Also, you may not, without our permission, copy and distribute this information on any other server, or modify or reuse text or graphics on this or any another system.</p>
                    <p>No reproduction of any part of the site may be sold or distributed for commercial gain, nor shall it be modified or incorporated in any other work, publication or site, whether in hard copy or electronic format, including postings to any other site. A-thon Allterrain Private Limited reserves all other rights.</p>
                    <p>The information on this site has been included in good faith and is for general purposes only. It should not be relied upon for any specific purpose and no representation or warranty is given as regards its accuracy or completeness.</p>
                    <p>No information on this site shall constitute an invitation to invest in A-THON or any of its affiliates. Neither A-THON and A-THON affiliates, nor their or their affiliates' officers, employees or agents shall be liable for any loss, damage or expense arising out of any access to or use of this site or any site linked to it, including, without limitation, any loss of profit, indirect, incidental or consequential loss.</p>
                </Modal.Body>
            </Modal>

        </React.Fragment>
    )
}

export default Footer