import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import PlayBtn from '../assets/images/misc/play.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Option1 from '../assets/images/rovers/rovers/ashva/options/option1.png'
import Option2 from '../assets/images/rovers/rovers/ashva/options/option2.png'
import Option3 from '../assets/images/rovers/rovers/ashva/options/option3.png'
import Option4 from '../assets/images/rovers/rovers/ashva/options/option4.png'
import Option5 from '../assets/images/rovers/rovers/ashva/options/option5.png'
import Option6 from '../assets/images/rovers/rovers/ashva/options/option6.png'
import Option7 from '../assets/images/rovers/rovers/ashva/options/option7.png'
import Option8 from '../assets/images/rovers/rovers/ashva/options/option8.png'
import Ashva1 from '../assets/images/rovers/rovers/ashva/ashva1.png'
import Ashva2 from '../assets/images/rovers/rovers/ashva/ashva2.png'
import Ashva3 from '../assets/images/rovers/rovers/ashva/ashva3.png'
import Ashva4 from '../assets/images/rovers/rovers/ashva/ashva4.png'
import Ashva5 from '../assets/images/rovers/rovers/ashva/ashva5.png'
import Ashva6 from '../assets/images/rovers/rovers/ashva/ashva6.png'
import Ashva7 from '../assets/images/rovers/rovers/ashva/ashva7.png'
import Ashva8 from '../assets/images/rovers/rovers/ashva/ashva8.png'
import Gradeability from '../assets/images/misc/gradeability.png'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import AshvaBroucher from '../assets/docs/ashva_4x4_brochure.pdf'
import StickyCont from '../components/StickyCont';
import { Link } from 'react-router-dom';

const Ashva = () => {

  const [src, setSrc] = useState('#');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // window.scrollTo(0, 0);
  }, []);

  const openPopUp = () => {
    setSrc('https://www.youtube.com/embed/AkcJNHYE7cE?si=-NjdEA_URpvF8EQw');
    document.querySelector('.popUp').style.display = 'block';
    const timer = setTimeout(() => {
      document.querySelector('.iframeVdo').style.display = 'block';
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  };

  const closePopUp = () => {
    setSrc('#');
    document.querySelector('.iframeVdo').style.display = 'none';
    document.querySelector('.popUp').style.display = 'none';
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>A-THON | Ashva</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 caseType='4x4' />
          <StickyCont />
          <div className="mainVdoSec">
            <Container className='mainCont'>
              <div className="mainContTxt">
                <h1 className='mainTxt'>Ashva 4x4</h1>
                <span className='mainTxtTag'>#ReachTheUnreached</span>
                <a href={AshvaBroucher} className='btn brouch_btn' target='_blank'>Download Brochure</a>
              </div>
              <div className="playBtn">
                <img src={PlayBtn} className='video_playBtn' alt="play-button" onClick={openPopUp} />
              </div>
            </Container>
            <div className="popUp">
              <FontAwesomeIcon icon={faXmark} size='2x' onClick={closePopUp} />
              <iframe className='iframeVdo' width="560" height="315" src={src} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
          <div className="gallery mt-5">
            <div className='gallery-wrapper'>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <div className="gallery-inner">
                    <h1>The Farm's Workhorse</h1>
                    <p>The Ashva 4x4 is the ultimate workhorse for your farm, boasting an impressive towing capacity to haul equipment and materials to get the job done effortlessly</p>
                  </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <img src={Ashva2} className='img-fluid' alt="Ashva 4x4 all terrain vehicle with four-wheel drive and plow attachment," />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                  <img src={Ashva3} className='img-fluid' alt="Ashva 4x4 red and black side by side vehicle, navigating through stones, slushy terrains showcasing its durable design and high performance on terrains." />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                  <div className="gallery-inner">
                    <h1>Unmatched Terrain Capability</h1>
                    <p>Boasting a rugged suspension and generous ground clearance, this powerhouse conquers challenging terrains, from rocky trails to deep mud, empowering you to explore without boundaries.</p>
                  </div>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <div className="gallery-inner">
                    <h1>Powerful Performance</h1>
                    <p>The Ashva 4x4 is armed with a high-displacement engine, guaranteeing unstoppable power to conquer steep inclines, challenging obstacles, and tough off-road conditions with ease.</p>
                  </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <img src={Ashva4} className='img-fluid' alt="Red and black colour Ashva 4x4 parked on a rugged rock surface, showcasing its off-road capabilities." />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                  <img src={Ashva1} className='img-fluid' alt="Red and black colour Ashva 4x4 parked on a rugged rock surface, showcasing its off-road capabilities." />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                  <div className="gallery-inner">
                    <h1>Safety</h1>
                    <p>The Ashva 4x4 is designed with a sturdy chassis and durable components to provide great safety by lowering the danger of mechanical failure, especially in difficult situations. The sensitive braking technology improves safety during quick stops or when driving tricky terrain, giving operators peace of mind.</p>
                  </div>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <div className="gallery-inner">
                    <h1>Comfort and Convenience</h1>
                    <p>The Ashva 4x4 is the ideal option for prolonged use in farming activities because of its design, which ensures that drivers will feel less weariness during protracted operation. Farmers are able to work effectively and painlessly thanks to the roomy and well-padded seating.</p>
                  </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <img src={Ashva6} className='img-fluid' alt="Red and black colour Ashva 4x4 parked on a rugged rock surface, showcasing its off-road capabilities." />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                  <img src={Ashva7} className='img-fluid' alt="A robust four-wheel drive Ashva 4x4, driven in off road area." />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                  <div className="gallery-inner">
                    <h1>Durability and
                      Reliability</h1>
                    <p>The Ashva 4x4 is built to conquer the harshest environments, from deserts and forests to water crossings.</p>
                  </div>
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                  <div className="gallery-inner">
                    <h1>Precision & Control</h1>
                    <p>Experience responsive handling, ergonomic seating, and advanced safety features come together to ensure your comfort and control on even the roughest trails. Embrace every moment of your off-road journey with confidence and ease.
                    </p>
                  </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                  <img src={Ashva8} className='img-fluid' alt="Red and black colour Ashva 4x4 parked on a rugged rock surface, showcasing its off-road capabilities." />
                </Col>
              </Row>
              <Row className='mb-5'>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 1 }}>
                  <img src={Ashva5} className='img-fluid' alt="Red and black Ashva 4x4 utility vehicle navigating off road, showcasing its power and adaptability in off-road environments." />
                </Col>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 2 }}>
                  <div className="gallery-inner">
                    <h1>Adventure-Ready Design</h1>
                    <p>With ample storage space for all your gear and the power to tow trailers or additional equipment, you can bring along everything you need for an unforgettable journey.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="product-line-bottom">
            <div className="product-sepcs">
              <h4 className="product-spec-title">Specifications</h4>
              <div className="row">
                <div className="col-sm-12">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-head">engine & drivetrain</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Engine Type</th>
                          <td className="cellBG"><b>XTR</b> - 4 stroke, V-twin, Differential Integrated, Liquid Cooling&nbsp;&nbsp;<b>PFX</b> - 4 stroke, V-twin, Liquid cooling</td>
                        </tr>
                        <tr>
                          <th scope="row">Power</th>
                          <td className="cellBG"><b>XTR</b>- 976 cc, 71 hp (53.7kw) @ 6500 rpm&nbsp;&nbsp;<b>PFX</b>- 976 cc, 85.4 hp (63.7kw) @ 6500 RPM</td>
                        </tr>
                        <tr>
                          <th scope="row">Fuel System</th>
                          <td className="cellBG">EFI, Gasoline</td>
                        </tr>
                        <tr>
                          <th scope="row">Ignition System</th>
                          <td className="cellBG">Electric Start</td>
                        </tr>
                        <tr>
                          <th scope="row">Transmission</th>
                          <td className="cellBG">Automatic (CVT)</td>
                        </tr>
                        <tr>
                          <th scope="row">No. of Gears</th>
                          <td className="cellBG">L - H - N - R - P  (5 positions)</td>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-head">suspension</th>
                        </tr>
                        <tr>
                          <th scope="row">front shocks</th>
                          <td className="cellBG">DUAL RATED COIL OVER WITH NITRO CHARGE PIGGYBACK CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">front suspension</th>
                          <td className="cellBG">double wishbone suspension</td>
                        </tr>
                        <tr>
                          <th scope="row">rear shocks</th>
                          <td className="cellBG">DUAL RATED COIL OVER WITH NITRO CHARGE REMOTE CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">rear suspensions</th>
                          <td className="cellBG">TRAILING ARM WITH TRIPLE CAMBER LINKS</td>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-head">brakes & tires/rim</th>
                        </tr>
                        <tr>
                          <th scope="row">Front & Rear</th>
                          <td className="cellBG">Disc Brake</td>
                        </tr>
                        <tr>
                          <th scope="row">Front Tires</th>
                          <td className="cellBG">31 x 10.5</td>
                        </tr>
                        <tr>
                          <th scope="row">Rear Tires</th>
                          <td className="cellBG">31 x 10.5</td>
                        </tr>
                        <tr>
                          <th scope="row">Wheel Size</th>
                          <td className="cellBG">Alloy Wheels R15- 7”</td>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-head">DIMENSIONs</th>
                        </tr>
                        <tr>
                          <th scope="row">Length</th>
                          <td className="cellBG">3556 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Width</th>
                          <td className="cellBG">1950 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Height</th>
                          <td className="cellBG">2000 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Wheelbase</th>
                          <td className="cellBG">2600 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Track width</th>
                          <td className="cellBG">1700 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Payload Capacity</th>
                          <td className="cellBG">600 <span className='text-capitalize'>Kg</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Dry Weight</th>
                          <td className="cellBG">950 <span className='text-capitalize'>Kg</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Fuel Tank Capacity</th>
                          <td className="cellBG">30 L</td>
                        </tr>
                        <tr>
                          <th scope="row">Ground Clearance</th>
                          <td className="cellBG">381 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Cargo Capacity</th>
                          <td className="cellBG">60L</td>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-head">FEATURES</th>
                        </tr>
                        <tr>
                          <th scope="row">CARGO SYSTEM</th>
                          <td className='cellBG'>inbuilt cargo box</td>
                        </tr>
                        <tr>
                          <th scope="row">Transmission Modes</th>
                          <td className='cellBG'>2WD, 4WD, Front & Rear + Open & Lock Differential Modes</td>
                        </tr>
                        <tr>
                          <th scope="row">Chassis/ Cage</th>
                          <td className='cellBG'>Space Frame</td>
                        </tr>
                        <tr>
                          <th scope="row">HITCH TYPE</th>
                          <td className='cellBG'>Single Point (Front & Rear)</td>
                        </tr>
                        <tr>
                          <th scope="row">Lighting</th>
                          <td className='cellBG'>Halogen</td>
                        </tr>
                        <tr>
                          <th scope="row">Seat Belt</th>
                          <td className='cellBG'>4-point/ 5 point</td>
                        </tr>
                        <tr>
                          <th scope="row">Seat Type</th>
                          <td className='cellBG'>Bucket Seat</td>
                        </tr>
                        <tr>
                          <th scope="row">Seating Capacity</th>
                          <td className='cellBG'>2 Seater</td>
                        </tr>
                        <tr>
                          <th scope="row">Instrumentation</th>
                          <td className='cellBG'>Semi Digital Instrument Cluster</td>
                        </tr>
                        <tr>
                          <th scope="row">Snorkel</th>
                          <td className='cellBG'>Inlet & Outlet for CVT</td>
                        </tr>
                        <tr>
                          <th scope="row">Gravel Guard</th>
                          <td className='cellBG'>Yes</td>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 p-3"></th>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2 product-spec-title">Attachment Integration Capabilities</th>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2">
                            Tow behind trailer
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2">
                            3-point hitch
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2">
                            Rear hitch carrier
                          </th>
                        </tr>
                        <tr>
                          <th scope="col" colspan="2" className="col-xs-6 col-md-2">
                            Agri attachment without PTO
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                    <Row className='mb-4' style={{padding: `0 2rem`}}>
                      <Col sm="12" md="4" className='d-flex justify-content-center align-items-center'>
                      <img src={Gradeability} className='img-fluid' alt="ashav gradeability" />
                      </Col>
                      <Col sm="12" md="8" className='d-flex align-items-end'>
                        <ul>
                          <li>Terms & Conditions- Tested on A-thon Test Track without any attachments</li>
                          <li>Specifications subjected to change due to periodic upgrades in the product & technology</li>
                          <li>All parameters may slightly vary from the actual specifications</li>
                          <li>As per A-THON recommended attachments</li>
                        </ul>
                      </Col>
                    </Row>
                    <div className='ProductOptions'>
                      <div className="row">
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva1'>
                            <div className="optionTxt">
                              <h4>Racing<br />Red</h4>
                            </div>
                            <img src={Option1} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva2'>
                            <div className="optionTxt">
                              <h4>Electric<br />yellow</h4>
                            </div>
                            <img src={Option2} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva3'>
                            <div className="optionTxt">
                              <h4>battle<br />green</h4>
                            </div>
                            <img src={Option3} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva4'>
                            <div className="optionTxt">
                              <h4>lunar<br />grey</h4>
                            </div>
                            <img src={Option4} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva5'>
                            <div className="optionTxt">
                              <h4>mystic<br />black</h4>
                            </div>
                            <img src={Option5} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva6'>
                            <div className="optionTxt">
                              <h4>rock<br />&nbsp;</h4>
                            </div>
                            <img src={Option6} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva7'>
                            <div className="optionTxt">
                              <h4>orange<br />&nbsp;</h4>
                            </div>
                            <img src={Option7} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-3">
                          <div className='bgAshva8'>
                            <div className="optionTxt">
                              <h4>electric<br />blue</h4>
                            </div>
                            <img src={Option8} className='img-fluid' alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productSpecsBtn">
                      <p className='herobtn1 text-lowercase text-center'><Link to="https://forms.zohopublic.in/adminathon/form/BookTestDrive1/formperma/mKld_JO84SgHgQchcoYFSbfcdhuuo2tezduouvZjgeE" target='_blank'>Book a Test Ride</Link></p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  )
}

export default Ashva