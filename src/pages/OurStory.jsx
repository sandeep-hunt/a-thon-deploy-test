import React, { useState, useEffect } from 'react'
// import Evolution from '../components/Evolution'
import { Container } from 'react-bootstrap'
import Traction from '../components/Traction';
import Vision from '../components/Vision';
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import StickyCont from '../components/StickyCont';

const OurStory = () => {
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
        <title>A-THON | Our Story</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <StickyCont />
          <Vision />
          <Container>
            {/* <Evolution /> */}
            <Traction />
          </Container>
        </>
      )}
    </React.Fragment>
  )
}


export default OurStory