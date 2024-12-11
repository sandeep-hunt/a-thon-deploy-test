import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayBtn from '../assets/images/misc/play.png'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import Arav1 from '../assets/images/rovers/rovers/arav/arav1.png'
import Arav2 from '../assets/images/rovers/rovers/arav/arav2.png'
import Arav3 from '../assets/images/rovers/rovers/arav/arav3.png'
import Arav4 from '../assets/images/rovers/rovers/arav/arav4.png'
import Arav5 from '../assets/images/rovers/rovers/arav/arav5.png'
import Arav6 from '../assets/images/rovers/rovers/arav/arav1.png'
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
        <Header1 caseType='4s'/>
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
            <div className="product-sepcs">
              <h4 className="product-spec-title">TECHNICAL SPECIFICATION</h4>
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-6 product-spec-head">Engine 1</th>
                          <th scope="col" className="col-6"></th>
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
                          <th scope="col" className="col-6 product-spec-head">Engine 2</th>
                          <th scope="col" className="col-6"></th>
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
                          <th scope="col" className="col-6 product-spec-head">DIMENSIONs</th>
                          <th scope="col" className="col-6"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">DRY WEIGHT(Est.)</th>
                          <td>1100 kg</td>
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
                          <td>3412 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">CARGO BOX</th>
                          <td>60 L</td>
                        </tr>
                        <tr>
                          <th scope="row">VEHICLE SIZE(LxwxH)</th>
                          <td>4320 x 1930 x 2010 <span className='text-lowercase'>mm</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-6 product-spec-head">suspension</th>
                          <th scope="col" className="col-6"></th>
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
                          <th scope="col" className="col-6 product-spec-head">brakes & tires/rim</th>
                          <th scope="col" className="col-6"></th>
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
                          <th scope="col" className="col-6 product-spec-head">ADDITIONAL SPECIFICATION</th>
                          <th scope="col" className="col-6"></th>
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
                          <th scope="row">color options</th>
                          <td>4</td>
                        </tr>
                      </tbody>
                    </table>
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