import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet'
import Header1 from '../components/Header1';
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react'
import Ashva6x6Broucher from '../assets/docs/ashva_6x6_brochure.pdf'
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
import Gradeability from '../assets/images/misc/gradeability.png'
import StickyCont from '../components/StickyCont';
import Option1 from '../assets/images/rovers/rovers/adbhut/options/option1.png'
import Option2 from '../assets/images/rovers/rovers/adbhut/options/option2.png'
import Option3 from '../assets/images/rovers/rovers/adbhut/options/option3.png'
import Option4 from '../assets/images/rovers/rovers/adbhut/options/option4.png'
import Option5 from '../assets/images/rovers/rovers/adbhut/options/option5.png'
import Option6 from '../assets/images/rovers/rovers/adbhut/options/option6.png'
import Option7 from '../assets/images/rovers/rovers/adbhut/options/option7.png'
import Option8 from '../assets/images/rovers/rovers/adbhut/options/option8.png'

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
          <Header1 caseType='6x6' />
          <StickyCont />
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
            <div className="d-flex justify-content-center">
              <a href={Ashva6x6Broucher} className='btn brouch_btn2' target='_blank'>Download Brochure</a>
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
                          <td className="cellBG">4 stroke, v-twin, liquid cooling</td>
                        </tr>
                        <tr>
                          <th scope="row">Power</th>
                          <td className="cellBG">976 cc, 85.4 hp (63.7kw) @ 6500 rpm</td>
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
                          <th scope="row">Mid & Rear Shocks</th>
                          <td className="cellBG">DUAL RATED COIL OVER WITH NITRO CHARGE Piggyback CANISTER</td>
                        </tr>
                        <tr>
                          <th scope="row">Mid & Rear Suspension</th>
                          <td className="cellBG">double wishbone suspension</td>
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
                          <td className="cellBG">4210 <span className='text-lowercase'>mm</span></td>
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
                          <td className="cellBG">3330 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Track width</th>
                          <td className="cellBG">1700 <span className='text-lowercase'>mm</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Payload Capacity</th>
                          <td className="cellBG">800 <span className='text-capitalize'>Kg</span></td>
                        </tr>
                        <tr>
                          <th scope="row">Dry Weight</th>
                          <td className="cellBG">1150 <span className='text-capitalize'>Kg</span></td>
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
                          <td className="cellBG">543 L</td>
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
                          <td className='cellBG'>Open & Lock Differential Modes, 6X6 WD, 6X4 WD</td>
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
        </>
      )}
    </React.Fragment>
  )
}

export default Ashva6x6