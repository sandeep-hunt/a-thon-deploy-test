import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import Ashva4sBroucher from '../assets/docs/ashva_4s_brochure.pdf'
import Option1 from '../assets/images/rovers/rovers/arav/options/option1.png'
import Option2 from '../assets/images/rovers/rovers/arav/options/option2.png'
import Option3 from '../assets/images/rovers/rovers/arav/options/option3.png'
import Option4 from '../assets/images/rovers/rovers/arav/options/option4.png'
import Option5 from '../assets/images/rovers/rovers/arav/options/option5.png'
import Option6 from '../assets/images/rovers/rovers/arav/options/option6.png'
import Option7 from '../assets/images/rovers/rovers/arav/options/option7.png'
import Option8 from '../assets/images/rovers/rovers/arav/options/option8.png'
import Arav1 from '../assets/images/rovers/rovers/arav/arav1.png'
import Arav2 from '../assets/images/rovers/rovers/arav/arav2.png'
import Arav3 from '../assets/images/rovers/rovers/arav/arav3.png'
import Arav4 from '../assets/images/rovers/rovers/arav/arav4.png'
import Arav5 from '../assets/images/rovers/rovers/arav/arav5.png'
import Arav6 from '../assets/images/rovers/rovers/arav/arav1.png'
import Gradeability from '../assets/images/misc/gradeability.png'
import StickyCont from '../components/StickyCont';

const Arav = () => {
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
        <title>A-THON | Ashva 4S</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 caseType='4s' />
          <StickyCont />
          <div className="mainVdoSec arav">
            <Container className='mainCont'>
              <div className="mainContTxt">
                <h1 className='mainTxt'>Ashva 4S</h1>
                <span className='mainTxtTag'>#ReachTheUnreached</span>
              </div>
            </Container>
          </div>
          <div className="product-line-bottom">
            <div className="d-flex justify-content-center">
              <a href={Ashva4sBroucher} className='btn brouch_btn2' target='_blank'>Download Brochure</a>
            </div>
            <div className="product-sepcs">
              <h4 className="product-spec-title">TECHNICAL SPECIFICATION</h4>
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
                          <td className="cellBG"><b>XTR</b> - 976 cc, 71 hp (53.7kw) @ 6500 RPM&nbsp;&nbsp;<b>PFX</b> - 976 cc, 85.4 hp (63.7kw) @ 6500 RPM</td>
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
                          <th scope="row">Rear Shocks</th>
                          <td className="cellBG">DUAL RATED COIL OVER WITH NITRO CHARGE REMOTE CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">Rear Suspension</th>
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
                          <td className="cellBG">4320 <span className='text-lowercase'>mm</span></td>
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
                          <td className="cellBG">3412 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Track width</th>
                          <td className="cellBG">1550 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Payload Capacity</th>
                          <td className="cellBG">700 <span className='text-capitalize'>Kg</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Dry Weight</th>
                          <td className="cellBG">1300 <span className='text-capitalize'>Kg</span></td>
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
                          <td className="cellBG">60 L</td>
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
                          <td className='cellBG'>4 Seater</td>
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
                  <Row className='mb-4' style={{ padding: `0 2rem` }}>
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
                </div>
              </div>
            </div>
          </div>
          <div className="gallery">
            <div className='gallery-wrapper'>
              <Row className='mb-4'>
                <Col sm={12} md={8}>
                  <img src={Arav1} className='img-fluid' alt="A red and black Arav, 4 seater, 4x4 off road vehicle positioned on rough ground, highlighting its robust features on terrains." />
                </Col>
                <Col sm={12} md={4}>
                  <div className="gallery-inner">
                    <img src={Arav2} className='img-fluid' alt="A man steers a red and black Arav, 4 seater, 4x4 off road vehicle , riding on a smooth road." />
                    <img src={Arav3} className='img-fluid' alt="Arav, 4 seater 4x4 off road vehicle standing among vibrant lush green grass, demonstrating its rugged build and suitability for off-road adventures." />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col sm={12} md={8} className='order-2'>
                  <img src={Arav4} className='img-fluid' alt="Arav, 4 seater 4x4 off road vehicle , is seen on a beach, emphasizing its ability to do beach patrolling." />
                </Col>
                <Col sm={12} md={4} className='order-1'>
                  <div className="gallery-inner">
                    <img src={Arav5} className='img-fluid' alt="Arav, 4 seater 4x4 off road vehicle on a dirt road ready for high terrains, with a scenic mountain view enhancing the adventure." />
                    <img src={Arav6} className='img-fluid' alt="A red and black Arav, 4 seater, 4x4 off road vehicle positioned on rough ground, highlighting its robust features on terrains." />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  )
}

export default Arav