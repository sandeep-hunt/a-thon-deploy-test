import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet'
import Header1 from '../components/Header1';
import ashva6x6_45deg from '../assets/images/misc/ashva6x6_45deg.png'
import ashva6x6_40deg from '../assets/images/misc/ashva6x6_40deg.png'
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay style
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import ashva6x6_1 from '../assets/images/slider/ashva6x6_1.png'
import ashva6x6_2 from '../assets/images/slider/ashva6x6_2.png'
import ashva6x6_3 from '../assets/images/slider/ashva6x6_3.png'
import ashva6x6_4 from '../assets/images/slider/ashva6x6_4.png'
import ashva6x6_5 from '../assets/images/slider/ashva6x6_5.png'
import ashva6x6_6 from '../assets/images/slider/ashva6x6_6.png'

const slides = [
  {
    image: ashva6x6_1,
    alt_text: "ashva 6x6"
  },
  {
    image: ashva6x6_2,
    alt_text: "ashva 4x4"
  },
  {
    image: ashva6x6_3,
    alt_text: "ashva 4x4"
  },
  {
    image: ashva6x6_4,
    alt_text: "ashva 4x4"
  },
  {
    image: ashva6x6_5,
    alt_text: "ashva 4x4"
  },
  {
    image: ashva6x6_6,
    alt_text: "ashva 4x4"
  },
]

const Ashva6x6 = () => {
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
        <title>A-THON | Ashva 6x6</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <Swiper
            spaceBetween={0}
            navigation={false}
            loop={true}
            autoplay={{
              delay: 3000, // Time between slides in milliseconds
              disableOnInteraction: false // Keeps autoplay running even after interaction
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper3"
          >
            {
              slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={slide.image} width="100%" height="100%" alt={slide.alt_text} />
                </SwiperSlide>
              ))
            }
          </Swiper>
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
                          <th scope="row">HORSEPOWER</th>
                          <td>85.4 hp (63.7kw) @ 6500 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">TORQUE</th>
                          <td>101nm @ 5500 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">ENGINE</th>
                          <td>4 stroke, v-twin</td>
                        </tr>
                        <tr>
                          <th scope="row">No. of cylinders</th>
                          <td>V-TWIN  (2  cylinders)</td>
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
                          <td>1500±150 rpm</td>
                        </tr>
                        <tr>
                          <th scope="row">COMPRESSION RATIO</th>
                          <td>10.5:1</td>
                        </tr>
                        <tr>
                          <th scope="row">no. of VALVES</th>
                          <td>4</td>
                        </tr>
                        <tr>
                          <th scope="row">IGNITION SYSTEM</th>
                          <td>ELECTRIC START</td>
                        </tr>
                        <tr>
                          <th scope="row">transmission</th>
                          <td>AUTOMATIC (cvt)</td>
                        </tr>
                        <tr>
                          <th scope="row">GEARBOX</th>
                          <td>L - H - N - R - P</td>
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
                          <td>1150 kg </td>
                        </tr>
                        <tr>
                          <th scope="row">CHASSIS/ CAGE</th>
                          <td>space frame </td>
                        </tr>
                        <tr>
                          <th scope="row">FUEL CAPACITY</th>
                          <td>30 L</td>
                        </tr>
                        <tr>
                          <th scope="row">GROUND CLEARANCE</th>
                          <td>381 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">CARGO CAPACITY</th>
                          <td>543 L</td>
                        </tr>
                        <tr>
                          <th scope="row">total Length</th>
                          <td>4210 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">total width</th>
                          <td>1950 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">height</th>
                          <td>2000 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">wheel base</th>
                          <td>3330 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">TRACKWIDTH</th>
                          <td>1700 <span className='text-lowercase'>mm</span></td>
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
                          <th scope="row">mid & rear brakes</th>
                          <td>disc brake</td>
                        </tr>
                        <tr>
                          <th scope="row">front tires</th>
                          <td>31 x 10.5 - r15</td>
                        </tr>
                        <tr>
                          <th scope="row">mid & rear tires</th>
                          <td>31 x 10.5 - r15</td>
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
                          <td>DUAL RATED COIL OVER WITH NITRO CHARGE PIGGYBACK CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">front suspension</th>
                          <td>double wishbone suspension</td>
                        </tr>
                        <tr>
                          <th scope="row">mid & rear shocks</th>
                          <td>DUAL RATED COIL OVER WITH NITRO CHARGE PIGGYBACK CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">mid & rear suspensions</th>
                          <td>double wishbone suspension</td>
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
                          <th scope="row">transmission modes</th>
                          <td>2WD, 4WD, front & rear + Open & lock differential modes, 6x6wd, 4x6wd</td>
                        </tr>
                        <tr>
                          <th scope="row">elec. power STEERING</th>
                          <td>yes</td>
                        </tr>
                        <tr>
                          <th scope="row">HITCH TYPE</th>
                          <td>single point  (Front & rear)</td>
                        </tr>
                        <tr>
                          <th scope="row">LIGHTING</th>
                          <td>HALOGEN</td>
                        </tr>
                        <tr>
                          <th scope="row">SEAT BELT</th>
                          <td>3 POINT/ 4 point</td>
                        </tr>
                        <tr>
                          <th scope="row">SEAT TYPE</th>
                          <td>BUCKET SEAT</td>
                        </tr>
                        <tr>
                          <th scope="row">seat capacity</th>
                          <td>2</td>
                        </tr>
                        <tr>
                          <th scope="row">instrumentation</th>
                          <td>SEMI - DIGITAL INSTRUMENT CLUSTER</td>
                        </tr>
                        <tr>
                          <th scope="row">SNORKEL</th>
                          <td>CVT INLET & OUTLET SNORKEL</td>
                        </tr>
                        <tr>
                          <th scope="row">GRAVEL GUARD</th>
                          <td>YES</td>
                        </tr>
                      </tbody>
                    </table>
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col" className="col-6 product-spec-head">ATTACHMENT INTEGRATION CAPABILITIES</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">TOW BEHIND TRAILER</th>
                        </tr>
                        <tr>
                          <th scope="row">3 POINT HITCH</th>
                        </tr>
                        <tr>
                          <th scope="row">RARE HITCH CARRIER</th>
                        </tr>
                        <tr>
                          <th scope="row">AGRI ATTACHMENT WITHOUT PTO</th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <Row style={{ padding: `0 25px` }}>
                    <Col xs={6} sm={6} md={4} className='d-flex justify-content-center align-items-end'>
                      <img src={ashva6x6_45deg} className='img-fluid' width={150} alt="" />
                    </Col>
                    <Col xs={6} sm={6} md={4} className='d-flex justify-center-end align-items-end'>
                      <img src={ashva6x6_40deg} className='img-fluid' width={150} alt="" />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  )
}

export default Ashva6x6