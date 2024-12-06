import React, { useState, useEffect } from 'react'
import HeroBanner from '../components/HeroBanner'
import Focus from '../components/Focus'
import Vision from '../components/Vision'
import ProductLine from '../components/ProductLine'
import Tacticals from '../components/Tacticals'
import Test from '../components/Test'
import VideoThumb from '../components/VideoThumb'
import Testimonial from '../components/Testimonial'
import Preloader from '../components/Preloader'
import { Helmet } from 'react-helmet'
import Header1 from '../components/Header1'
import HomeSlider from '../components/HomeSlider'
import ProductLine1 from '../components/ProductLine1'

const Homepage = () => {
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
        <title>A-THON | India's Farm Utility ROVRs, Off Road Utility Vehicles, UTV, ATV</title>
        <meta name="description" content="A-THON is trailblazing in All-terrain technology for farm utility, empowering plantation and hill terrain farmers with end-to-end-solutions encapsulating AI & ML." />
        <meta name="keywords" content="A-THON, athon, athon all terrain, atv, utv, sxs, 4x4, off-road, off road, indian atv, Indian utv, buy atv in india, all terrain vehicle"></meta>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <HeroBanner />
          <Focus />
          <HomeSlider />
          <Vision />
          <ProductLine1 />
          <ProductLine />
          <Test />
          <VideoThumb />
          <Testimonial />
          <Tacticals />
        </>
      )}
    </React.Fragment>
  )
}

export default Homepage