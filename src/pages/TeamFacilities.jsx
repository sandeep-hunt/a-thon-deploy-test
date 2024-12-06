import React, { useState, useEffect } from 'react'
import Teams from '../components/Teams';
import Facilities from '../components/Facilities';
import { Container } from 'react-bootstrap';
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';

const TeamFacilities = () => {
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
        <title>A-THON | Team & facilities</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <Container>
            <Teams />
            <Facilities />
          </Container>
        </>
      )}
    </React.Fragment>
  )
}

export default TeamFacilities