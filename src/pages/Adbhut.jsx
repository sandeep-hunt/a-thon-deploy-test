import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PlayBtn from '../assets/images/misc/play.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import AdbhutAutonomous from '../assets/images/misc/adbhut_autonomous.png'
import Comrado from '../assets/images/misc/partners/comrado.png'
import AutoMind from '../assets/images/misc/partners/autoMind.png'
import Twara from '../assets/images/misc/partners/twara.png'
import CollabrativeAdb from '../assets/images/misc/collabrativeAdb.svg'
import Solution1 from '../assets/images/misc/solutions/adbSol1.png'
import Solution2 from '../assets/images/misc/solutions/adbSol2.png'
import Solution3 from '../assets/images/misc/solutions/adbSol3.png'
import Solution4 from '../assets/images/misc/solutions/adbSol4.png'
import Solution5 from '../assets/images/misc/solutions/adbSol5.png'
import Solution6 from '../assets/images/misc/solutions/adbSol6.png'
import Adbhut1 from '../assets/images/rovers/rovers/adbhut/adbhut1.png'
import Adbhut2 from '../assets/images/rovers/rovers/adbhut/adbhut2.png'
import Adbhut3 from '../assets/images/rovers/rovers/adbhut/adbhut3.png'
import Preloader from '../components/Preloader'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Header1 from '../components/Header1'

const Adbhut = () => {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState('#');

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    window.scrollTo(0, 0);
  }, []);

  const openPopUp = () => {
    setSrc('https://www.youtube.com/embed/6TI60jytjKs?si=jwSRc8EdPZxIrx8O');
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
        <title>A-THON | AdbhutBot</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <div className="mainVdoSec adbhut">
            <Container className='mainCont'>
              <div className="mainContTxt">
                <h1 className='mainTxt'>AdbhutBot</h1>
                <span className='mainTxtTag'>India’s 1st 6x6 FUV</span>
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
          <Container>
            <div className="collabrativeDet">
              <img src={CollabrativeAdb} className='collabrativeDetImg' alt="Yellow 6-wheel UTV with remote control and camera, featuring advanced technology for efficient agricultural practices in farming." />
              <p className='collabrativeDetTxt'>A market dominating technology for next 5 years.<br />Assisted autonomous ADHBUT Bot being integrated with <span className='collabrativeDetTxtInr'>ARTPARK, IISc Bengaluru.</span></p>
            </div>
            <div className="adbhutAutonomous">
              <img src={AdbhutAutonomous} className='adbhutAutonomous-img' alt="" />
            </div>
            <div className="supportedPartners">
              <Link to="https://www.comradoaerospace.com/" target='_blank'><img src={Comrado} className='supportedPartners-img' alt="comrado" /></Link>
              <img src={AutoMind} className='supportedPartners-img' alt="autominds" />
              <Link to="https://twararobotics.in/" target='_blank'><img src={Twara} className='supportedPartners-img' alt="tawara" /></Link>
            </div>
            <div className="solutions">
              <h5 className='section-title2 mb-3 text-center'>ULTIMATE SOLUTION FOR FARMING</h5>
              <div className="solutionsContainer">
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution1} className='img-fluid' alt="Yellow and black six-wheeled Adbhutbot, featuring Stabilizer Hydro Drive wheels, designed to elevate for navigating hostile terrain." />
                  </div>
                  <div className="solutionContent">
                    <p>Stabilizer Hydro Drive wheels For hostile terrain</p>
                  </div>
                </div>
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution2} className='img-fluid' alt="Drones flying over arecanut fruits, assisting in crop health monitoring and improving farming management practices." />
                  </div>
                  <div className="solutionContent">
                    <p>Monitoring crop health with the help of drone</p>
                  </div>
                </div>
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution3} className='img-fluid' alt="Yellow AdbhutBot with a drone flying above palm trees, illustrating aerial pesticide application in farming." />
                  </div>
                  <div className="solutionContent">
                    <p>Pesticide application through aerial spraying</p>
                  </div>
                </div>
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution4} className='img-fluid' alt="Adbhutbot UTV attached with a trailer used for harvesting crops in farming featuring a telescopic boom. " />
                  </div>
                  <div className="solutionContent">
                    <p>Crop harvesting through snippers & telescopic boom </p>
                  </div>
                </div>
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution5} className='img-fluid' alt="Yellow Adbhutbot UTV driving through a palm tree field, illustrating on-site crop processing for farming." />
                  </div>
                  <div className="solutionContent">
                    <p>On-site crop processing</p>
                  </div>
                </div>
                <div className="solutionsWrapper">
                  <div className="solutionImage">
                    <img src={Solution6} className='img-fluid' alt="Adbhutbot assisting in harvest transportation in farming through Autonomous K-bots." />
                  </div>
                  <div className="solutionContent">
                    <p>Transportation of harvest by Assisted Autonomous K-bots</p>
                  </div>
                </div>
              </div>
            </div>
          <div className="mt-4">
              <div className='gallery-wrapper'>
                <Row>
                  <Col sm={12} md={8}>
                    <img src={Adbhut1} className='img-fluid' alt="COO of ARTPARK Dr. Anurag srivastava testing adbhutBot prototype in Artpark facilities" />
                  </Col>
                  <Col sm={12} md={4}>
                    <div className="gallery-inner">
                      <img src={Adbhut2} className='img-fluid' alt="Red AdbhutBot prototype standing in Artgarage makers space of IISC Bangalore." />
                      <img src={Adbhut3} className='img-fluid' alt="A vibrant orange UTV nestled among trees, with a carpet of leaves covering the forest floor." />
                    </div>
                  </Col>
                </Row>
              </div>
          </div>
          </Container>
        </>
      )}
    </React.Fragment>
  )
}

export default Adbhut