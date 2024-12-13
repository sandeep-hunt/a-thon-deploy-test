import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Preloader from '../components/Preloader'
import Header1 from '../components/Header1'
import StickyCont from '../components/StickyCont'
import { Container } from 'react-bootstrap'

const AshvaUt = () => {
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
      <title>A-THON | Ashva UT</title>
    </Helmet>
    {loading ? (
      <Preloader />
    ) : (
      <>
      <Header1 />
      <StickyCont />
          <div className="mainVdoSec ashvaut">
            <Container className='mainCont'>
              <div className="mainContTxt">
                <h1 className='mainTxt'>Ashva UT</h1>
              </div>
            </Container>
          </div>
      </>
    )}
    </React.Fragment>
  )
}

export default AshvaUt