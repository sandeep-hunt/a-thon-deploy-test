import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import PlayBtn from '../assets/images/misc/play.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Option1 from '../assets/images/rovers/rovers/ashva/options/option1.png'
import Option2 from '../assets/images/rovers/rovers/ashva/options/option2.png'
import Option3 from '../assets/images/rovers/rovers/ashva/options/option3.png'
import Option4 from '../assets/images/rovers/rovers/ashva/options/option4.png'
import Ashva1 from '../assets/images/rovers/rovers/ashva/ashva1.png'
import Ashva2 from '../assets/images/rovers/rovers/ashva/ashva2.png'
import Ashva3 from '../assets/images/rovers/rovers/ashva/ashva3.png'
import Ashva4 from '../assets/images/rovers/rovers/ashva/ashva4.png'
import Ashva5 from '../assets/images/rovers/rovers/ashva/ashva5.png'
import Ashva6 from '../assets/images/rovers/rovers/ashva/ashva6.png'
import Ashva7 from '../assets/images/rovers/rovers/ashva/ashva7.png'
import Ashva8 from '../assets/images/rovers/rovers/ashva/ashva8.png'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import { Link } from 'react-router-dom';
import AshvaBroucher from '../assets/docs/ashva_4x4_brochure.pdf'
import StickyCont from '../components/StickyCont';

const Ashva = () => {

  const [src, setSrc] = useState('#');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
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
          <Header1 caseType='4x4'/>
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
              <h4 className="product-spec-title">TECHNICAL SPECIFICATION</h4>
              <div className="row">
                <div className="col-sm-12">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">Engine 1</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">TORQUE</th>
                          <td>101nm @ 5500 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">ENGINE TYPE</th>
                          <td>4 stroke, v-twin, 2 cylinder sohc engine</td>
                        </tr>
                        <tr>
                          <th scope="row">COOLING</th>
                          <td>liquid cooled</td>
                        </tr>
                        <tr>
                          <th scope="row">displacement</th>
                          <td>976 cc</td>
                        </tr>
                        <tr>
                          <th scope="row">FUEL SYSTEM</th>
                          <td>efi, gasoline</td>
                        </tr>
                        <tr>
                          <th scope="row">IDLE SPEED</th>
                          <td>1250 +-50 rpm </td>
                        </tr>
                        <tr>
                          <th scope="row">COMPRESSION RATIO</th>
                          <td>10.5:1</td>
                        </tr>
                        <tr>
                          <th scope="row"># VALVES</th>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th scope="row">IGNITION SYSTEM</th>
                          <td>idi inductive discharge ignition</td>
                        </tr>
                        <tr>
                          <th scope="row">transmission</th>
                          <td>cvt</td>
                        </tr>
                        <tr>
                          <th scope="row">GEARBOX</th>
                          <td>2 speed forward + r + N + p</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">Engine 2</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">TORQUE</th>
                          <td>85nm @ 5500 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">ENGINE TYPE</th>
                          <td>4 stroke, v-twin, 2 cylinder sohc engine</td>
                        </tr>
                        <tr>
                          <th scope="row">COOLING</th>
                          <td>liquid cooled</td>
                        </tr>
                        <tr>
                          <th scope="row">displacement</th>
                          <td>976 cc</td>
                        </tr>
                        <tr>
                          <th scope="row">FUEL SYSTEM</th>
                          <td>efi, gasoline</td>
                        </tr>
                        <tr>
                          <th scope="row">IDLE SPEED</th>
                          <td>1250 +-50 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">COMPRESSION RATIO</th>
                          <td>10.4:1</td>
                        </tr>
                        <tr>
                          <th scope="row"># VALVES</th>
                          <td>8</td>
                        </tr>
                        <tr>
                          <th scope="row">IGNITION SYSTEM</th>
                          <td>idi inductive discharge ignition</td>
                        </tr>
                        <tr>
                          <th scope="row">transmission</th>
                          <td>cvt</td>
                        </tr>
                        <tr>
                          <th scope="row">GEARBOX</th>
                          <td>2 speed forward + r + N + p</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">DIMENSIONs</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">DRY WEIGHT(Est.)</th>
                          <td>850 kg</td>
                        </tr>
                        <tr>
                          <th scope="row">CHASSIS/ CAGE</th>
                          <td>space frame chassis</td>
                        </tr>
                        <tr>
                          <th scope="row">FUEL CAPACITY</th>
                          <td>50 L</td>
                        </tr>
                        <tr>
                          <th scope="row">GROUND CLEARANCE</th>
                          <td>457 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">wheel base</th>
                          <td>2600 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">CARGO BOX</th>
                          <td>60 L</td>
                        </tr>
                        <tr>
                          <th scope="row">VEHICLE SIZE(LxwxH)</th>
                          <td>3556 x 1930 x 2010 <span className='text-lowercase'>mm</span></td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">suspension</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">front shocks</th>
                          <td>dual rated coil over shock absorber</td>
                        </tr>
                        <tr>
                          <th scope="row">front suspension</th>
                          <td>double wishbone suspension</td>
                        </tr>
                        <tr>
                          <th scope="row">rear shocks</th>
                          <td>dual rated coil over shock absorber</td>
                        </tr>
                        <tr>
                          <th scope="row">rear suspensions</th>
                          <td>trailing arm with camber links</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">brakes & tires/rim</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">front brakes</th>
                          <td>disc brake</td>
                        </tr>
                        <tr>
                          <th scope="row">rear brakes</th>
                          <td>disc brake</td>
                        </tr>
                        <tr>
                          <th scope="row">parking brakes</th>
                          <td>yes</td>
                        </tr>
                        <tr>
                          <th scope="row">front tires</th>
                          <td>31" x 10"</td>
                        </tr>
                        <tr>
                          <th scope="row">rear tires</th>
                          <td>31" x 10"</td>
                        </tr>
                        <tr>
                          <th scope="row">rim</th>
                          <td>15" x 7"</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-xs-6 col-md-2 product-spec-head">ADDITIONAL SPECIFICATION</th>
                          <th scope="col" className="col-xs-6 col-md-10"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">CARGO SYSTEM</th>
                          <td>inbuilt cargo box</td>
                        </tr>
                        <tr>
                          <th scope="row">DOORS</th>
                          <td>BOWED 1/4 DOORS</td>
                        </tr>
                        <tr>
                          <th scope="row">ELECTRONIC POWER STEERING</th>
                          <td>yes</td>
                        </tr>
                        <tr>
                          <th scope="row">HITCH TYPE</th>
                          <td>tow behind and 3-point</td>
                        </tr>
                        <tr>
                          <th scope="row">LIGHTING</th>
                          <td>led/ hid</td>
                        </tr>
                        <tr>
                          <th scope="row">SEAT BELT</th>
                          <td>3 / 5 Point</td>
                        </tr>
                        <tr>
                          <th scope="row">SEAT TYPE</th>
                          <td>BUCKET SEAT</td>
                        </tr>
                        <tr>
                          <th scope="row" className='bgAshva1'>color options</th>
                          <td>4</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className='ProductOptions'>
                      <div className="row">
                        <div className="col-sm-12 col-md-3">
                          <div className='bgAshva1'>
                            <div className="optionTxt">
                              <h4>Stain Black</h4>
                            </div>
                            <img src={Option1} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <div className='bgAshva2'>
                            <div className="optionTxt">
                              <h4>Foliage Green</h4>
                            </div>
                            <img src={Option2} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <div className='bgAshva4'>
                            <div className="optionTxt">
                              <h4>Eclipse black</h4>
                            </div>
                            <img src={Option4} className='img-fluid' alt="" />
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-3">
                          <div className='bgAshva3'>
                            <div className="optionTxt">
                              <h4>Solar blaze</h4>
                            </div>
                            <img src={Option3} className='img-fluid' alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="productSpecsBtn">
                      <p className='herobtn1 text-lowercase text-center'>... and more to come</p>
                    </div>
                    <div className="productSpecsBtn d-flex w-100 justify-content-center">
                      <Link to="https://forms.gle/WMC6rEwevCAYfse57" target="_blank" className='herobtn text-black text-capitalize'>Get Your Invite to Ride &rarr;</Link>
                    </div>
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