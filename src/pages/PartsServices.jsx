import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Button, Card, CardBody } from 'react-bootstrap';
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import WarrantyCoverage from '../assets/docs/a-thon_warranty_coverage.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGears, faShoppingCart, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import ServicePlugLogo from '../assets/images/misc/serviceplug_logo.svg'
import Modal from 'react-bootstrap/Modal';
import StickyCont from '../components/StickyCont';

const PartsServices = () => {
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>A-THON | Service & Support</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <StickyCont />
          <div className="partsserv_head">
            <h3 className='text-center'>Service & Support</h3>
          </div>
          <div className="partsserv_cont">
            <Container>

              <Row>
                <Col sm={12} md={3}>
                  <Card className=' h-100'>
                    <CardBody>
                      <div className="d-flex align-items-center flex-column text-center">
                        <FontAwesomeIcon style={{ fontSize: `50px` }} icon={faGears} />
                        <Link className='mt-2' onClick={handleShow}><h5>Book a Service</h5></Link>
                        <span style={{ fontSize: `14px` }}>Register here for getting your vehicle serviced hassle free</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={12} md={3}>
                  <Card className=' h-100'>
                    <CardBody>
                      <div className="d-flex align-items-center flex-column text-center">
                        <FontAwesomeIcon style={{ fontSize: `50px` }} icon={faShoppingCart} />
                        <Link className='mt-2'><h5>Order Spares</h5></Link>
                        <span style={{ fontSize: `14px` }}>Get genuine, high-quality original parts delivered to your doorstep with guaranteed authenticity and reliability.</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={12} md={3}>
                  <Card className=' h-100'>
                    <CardBody>
                      <div className="d-flex align-items-center flex-column text-center">
                        <FontAwesomeIcon style={{ fontSize: `50px` }} icon={faHeadphonesSimple} />
                        <Link to="https://support.a-thonallterrain.com/" target='_blank' className='mt-2'><h5>Support Portal</h5></Link>
                        <span style={{ fontSize: `14px` }}>Experience seamless assistance with our customer support portal, offering quick solutions and reliable service at your fingertips.</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col sm={12} md={3}>
                  <Card className=' h-100'>
                    <CardBody>
                      <div className="d-flex align-items-center flex-column text-center">
                        <img src={ServicePlugLogo} style={{ width: `50px` }} alt="" />
                        <Link to="https://www.serviceplug.in/" target='_blank' className='mt-2'><h5>Service Plug</h5></Link>
                        <span style={{ fontSize: `14px` }}>Locate A-THON trained and certified mechanics and garages near you effortlessly with our trusted partner, Service Plug.</span>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <div className='mt-4'>
                <h5>Our Commitment to You</h5>
                <ul>
                  <li>Comprehensive maintenance and support for your A-THON vehicle.</li>
                  <li>Certified professionals available for routine maintenance, repairs, and upgrades.</li>
                </ul>
              </div>
              <div>
                <h5>A-THON Certified Service Centers</h5>
                <ul>
                  <li><b>Comprehensive Inspections:</b> Regular check-ups for optimal performance and safety.</li>
                  <li><b>Maintenance Services:</b> Oil changes, tire rotations, and all essential maintenance.</li>
                  <li><b>Repairs:</b> Skilled technicians handle body repairs, engine servicing, and more.</li>
                  <li><b>Performance Upgrades:</b> Enhance your vehicle's performance with the latest upgrades.</li>
                </ul>
              </div>
              <div>
                <h5>Doorstep Mobile Service</h5>
                <ul>
                  <li><b>Convenient On-Site Service:</b> Certified A-THON technicians come to your location.</li>
                  <li><b>On-the-Spot Maintenance:</b> Oil changes, brake checks, and minor repairs performed at your site.</li>
                  <li><b>Diagnostics & Troubleshooting:</b> Equipped with advanced tools for quick issue resolution.</li>
                  <li><b>Genuine Parts Replacement:</b> Access to genuine A-THON parts on-site.</li>
                  <li><b>Emergency Support:</b> Mobile team provides breakdown and urgent service assistance.</li>
                </ul>
              </div>
              <div>
                <h5>How It Works</h5>
                <ol type="1">
                  <li><b>Schedule Online or by Phone:</b> Choose "Mobile Service" and provide details.</li>
                  <li><b>Technician Dispatch:</b> A certified technician arrives at your location.</li>
                  <li><b>Service Completion:</b> Full documentation and check report provided post-service.</li>
                  <li><b>Post-Service Support:</b> Guidance on any additional repairs needed.</li>
                </ol>
              </div>
              <div>
                <h5>Service Areas</h5>
                <ul>
                  <li>Available in select regions, with plans for expansion. Contact us for availability</li>
                </ul>
              </div>
            </Container>
            <div className="partsserv_inner">
              <Container>
                <div>
                  <h5>Genuine A-THON Parts</h5>
                  <ul>
                    <li><b>Exact Fit & Function:</b> Manufactured to meet your vehicle’s exact specifications.</li>
                    <li><b>Quality Assurance:</b> Ensures longevity and performance under extreme conditions.</li>
                    <li><b>Warranty Protection:</b> Only genuine parts are backed by A-THON warranties.</li>
                  </ul>
                </div>
                <div>
                  <h5>Service Plans & Warranty Support</h5>
                  <ul>
                    <li>Tailored service plans for all type of user owners alike.</li>
                  </ul>
                </div>
                <div>
                  <p><b>Standard Warranty: A-THON Off-Road Vehicles (ATVs, SSVs/UTVs):</b> Usually, A-THON offers a <b>6-month limited factory warranty</b> for most off-road vehicles. This covers defects in materials and workmanship under normal use.</p>
                  <p><b>Extended Warranty: A-THON Protection Plan (Extended Warranty):</b> Customers can purchase an extended service contract for up to <b>4 additional years beyond</b> the standard warranty. This covers mechanical repairs and other costs after the initial factory warranty expires.</p>
                </div>
                <a href={WarrantyCoverage} target='_blank' className='btn btn-primary inner_btn'>Click Here to Download Warranty Coverage</a>
              </Container>
            </div>
            <Container>
              <div>
                <h5>How to Schedule Service</h5>
                <ol type='1'>
                  <li><b>Online Appointment Booking:</b> Schedule service at your convenience.</li>
                  <li><b>Doorstep Mobile Service:</b> Technicians come to your location.</li>
                  <li><b>On-Site Support:</b> Mobile support for only for select cities and regions</li>
                </ol>
              </div>
              <div>
                <h5>Contact Us</h5>
                <ul>
                  <li><b>Phone:</b> +91 9740025534</li>
                  <li><b>Email:</b> service@a-thonallterrain.com</li>
                </ul>
              </div>
            </Container>
          </div>

          {/* Modal */}
          <Modal show={show} size='xl' onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Book a Service</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <iframe aria-label='Service And Support ' frameborder="0" style={{width: `100%`, height: `550px`}} src='https://forms.zohopublic.in/adminathon/form/ServiceAndSupport1/formperma/gnUBcjbysN5s8cNbQK1TY_ddvB6Bi5UMYgzqNVT2Fmw'></iframe>
            </Modal.Body>
          </Modal>
        </>
      )}
    </React.Fragment>
  )
}

export default PartsServices