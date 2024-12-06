import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet';
import Header1 from '../components/Header1';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
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
        <title>A-THON | 404</title>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <Container>
            <div className="notfound-wrapper">
              <h3>SORRY, THE PAGE YOU ARE LOOKING FOR WAS NOT FOUND</h3>
              <Link to="/">GO TO HOME PAGE</Link>
            </div>
          </Container>
        </>
      )}
    </React.Fragment>
  )
}

export default PageNotFound