import React, { useState, useEffect } from 'react'
import ExpLogo from '../assets/images/misc/expLogo.png'
import { Col, Container, Row } from 'react-bootstrap'
import { Player, ControlBar } from 'video-react'
import AshvaFocus from '../assets/videos/experience.mp4'
import Experience1 from '../assets/images/experienceCentre/1.png'
import Experience2 from '../assets/images/experienceCentre/2.png'
import Experience3 from '../assets/images/experienceCentre/3.png'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Experience4 from '../assets/images/experienceCentre/4.png'
import Experience5 from '../assets/images/experienceCentre/5.png'
import Experience6 from '../assets/images/experienceCentre/6.png'
import Experience7 from '../assets/images/experienceCentre/7.png'
import Experience8 from '../assets/images/experienceCentre/8.png'
import Experience9 from '../assets/images/experienceCentre/9.png'
import Experience10 from '../assets/images/experienceCentre/10.png'
import ThumbExp4 from '../assets/images/experienceCentre/thumbs/4.png'
import ThumbExp5 from '../assets/images/experienceCentre/thumbs/5.png'
import ThumbExp6 from '../assets/images/experienceCentre/thumbs/6.png'
import ThumbExp7 from '../assets/images/experienceCentre/thumbs/7.png'
import ThumbExp8 from '../assets/images/experienceCentre/thumbs/8.png'
import ThumbExp9 from '../assets/images/experienceCentre/thumbs/9.png'
import ThumbExp10 from '../assets/images/experienceCentre/thumbs/10.png'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Header1 from '../components/Header1'
import LocationIcon from '../assets/images/misc/locationIcon.svg'

const TestCentre = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <React.Fragment>
      <Helmet>
        <title>A-THON | Experience Centre</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <div className="experienceSection">
            <div className="experienceSec-top">
              <div className="experienceSec-innerTop"></div>
              <div className="experienceSec-innerBottom"></div>
              <div className="experienceSec-ExpLogo">
                <img src={ExpLogo} className='img-fluid' alt="" />
              </div>
            </div>
            <div className="experienceSec-bottom">
              <div className="experienceSecVdo">
                <Player src={AshvaFocus} autoPlay loop muted>
                  <ControlBar disableCompletely={true} />
                </Player>
              </div>
              <div className="experienceSecbtn-inner">
                <h2>Explore your every<br />Uncharted Experience </h2>
              </div>
              <div className="experienceSecbtn-innerRg">
                <Link className='experienceSecbtn-innerLk' to="https://zfrmz.in/TXkctOvJ9gonSBGuaG3e" target="_blank">Get your experience &rarr;</Link>
              </div>
            </div>
          </div>
          <Container>
            <div className="experienceCtr">
              <div className="experienceCtr-top">
                <div className="expCtrvl"></div>
                <h6>Welcome to</h6>
              </div>
              <div className="experienceCtr-middle">
                <h2>Experience Center</h2>
                <h6>Hoskote, KARNATAKA</h6>
              </div>
              <div className="experienceCtr-bottom">
                <p className='experienceCtr-bottomTxt'>“Witness endurance and reliability redefined at any one of our 3 (three) testing locations.”</p>
              </div>
            </div>
          </Container>
          <div className="experienceHltCtr">
            <div className="experienceHltCtr-top">
              <div className="expCtrvl"></div>
              <h6>Highlights</h6>
            </div>
            <div className="experienceHltCtr-bottom">
              <div className="experienceHltCtr-wrapper">
                <Container className='experienceHltCtr-inner'>
                  <div className="experienceHltCtr-content">
                    <img src={Experience1} className='img-fluid' alt="" />
                    <div className="experienceHltCtr-contBdy">
                      <p className='experienceHltCtrTxt'>Experience next level endurance & reliability testing at our test sites.</p>
                    </div>
                  </div>
                  <div className="experienceHltCtr-content">
                    <img src={Experience2} className='img-fluid' alt="" />
                    <div className="experienceHltCtr-contBdy">
                      <p className='experienceHltCtrTxt'>observe extreme upto 60° trails at our advanced test & torture tracks.</p>
                    </div>
                  </div>
                  <div className="experienceHltCtr-content">
                    <img src={Experience3} className='img-fluid' alt="" />
                    <div className="experienceHltCtr-contBdy">
                      <p className='experienceHltCtrTxt'>Extreme Pit articulation.</p>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          </div>
          <div className="expSliBg">
            <Container>
              <div className="productImgSlidr expCtr">
                <Swiper
                  spaceBetween={10}
                  navigation={true}
                  loop={true}
                  thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img src={Experience4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience5} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience6} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience7} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience8} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience9} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={Experience10} />
                  </SwiperSlide>
                </Swiper>
                <div className="sliderThmbs" style={{ padding: "0 7rem" }}>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={7}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={ThumbExp4} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp5} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp6} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp7} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp8} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp9} />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img src={ThumbExp10} />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </Container>
          </div>
          <Row>
            <Col sm={12} md={4}>
            
            </Col>
          </Row>
          <div className="expCtrLoc">
            <div className="expCtrLoc-inr">
              <div className="expCtrvl"></div>
              <h6 className='text-center'>A-THON Experience Centre<br/>Hoskote</h6>
              <img src={LocationIcon} className='img-fluid' alt="" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6508423543205!2d77.81679077398077!3d13.082361912442408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae05003985d9ab%3A0x3b2632be939e174a!2sA-THON%20Experience%20Centre!5e1!3m2!1sen!2sin!4v1717147943843!5m2!1sen!2sin" width="250" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="expCtrLoc-inr">
              <div className="expCtrvl"></div>
              <h6 className='text-center'>A-THON R&D Centre<br/>KIADB Industrial Area, Bangarpet</h6>
              <img src={LocationIcon} className='img-fluid' alt="" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d527.7177229676162!2d78.22308423548745!3d12.99139197585767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badebb4c9ed0c2f%3A0xabeeac89dc14eaa7!2sA-THON%20R%26D%20Centre!5e1!3m2!1sen!2sin!4v1725949233106!5m2!1sen!2sin" width="250" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="expCtrLoc-inr">
              <div className="expCtrvl"></div>
              <h6 className='text-center'>A-THON Reliablity Engineering Centre<br/>KIADB Industrial Area, Bangarpet</h6>
              <img src={LocationIcon} className='img-fluid' alt="" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d456.75838053984336!2d78.22128973582193!3d12.991717891730922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725949633107!5m2!1sen!2sin" width="250" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="expCtrLoc-inr">
              <div className="expCtrvl"></div>
              <h6 className='text-center'>A-THON Production Facility<br/>KIADB Industrial Area, Bangarpet</h6>
              <img src={LocationIcon} className='img-fluid' alt="" />
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d384.0857323738014!2d78.2227115174545!3d12.992204400859892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1725950082983!5m2!1sen!2sin" width="250" height="250" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </>
      )}
    </React.Fragment>
  )
}

export default TestCentre