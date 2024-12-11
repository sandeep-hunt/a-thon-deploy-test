import React, { useState, useEffect } from 'react'
import Preloader from '../components/Preloader'
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet'
import Header1 from '../components/Header1'
import StickyCont from '../components/StickyCont';

const DealerOppor = () => {
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
        <title>A-THON | A-THON Dealership Opportunity</title>
        <meta name="description" content="Explore India&#x27;s best off-road capable All Terrain Vehicle (ATV) product line. Ashva 4x4, Adbhut 6x6 and more..." />
        <meta name="keywords" content="A-THON, athon, athon all terrain, atv, utv, sxs, 4x4, off-road, off road, indian atv, Indian utv, buy atv in india, all terrain vehicle"></meta>
      </Helmet>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Header1 />
          <StickyCont />
          <div className="partsserv_head_opp">
            <h3 className='text-center'>A-THON Dealership Opportunity</h3>
          </div>
          <div className="partsserv_cont">
            <Container>
              <div className='mt-4'>
                <h5><b>Become a Dealer – A-THON: India’s Premier All-Terrain Vehicle Brand</b></h5>
                <h5>Join the Revolution of All-Terrain Mobility</h5>
                <p>A-THON is proud to pioneer India’s first fully engineered All-Terrain SSV (Side-by-Side Vehicle) product line for various application, designed, engineered and developed to meet global standards. With our unmatched home-grown technology, competitive pricing, and deep understanding of the Indian and International market, we are set to dominate the all-terrain segment in India. We invite enthusiastic entrepreneurs, auto enthusiasts, and business owners to become part of this exciting journey by joining our exclusive dealership network.</p>
              </div>
              <div>
                <h5><b>Why Partner with A-THON?</b></h5>
                <ol type='1'>
                  <li><b>First Mover Advantage:</b> Be part of a trailblazing brand that is introducing India’s first all-terrain SSVs, a growing market with virtually no domestic competition.</li>
                  <li><b>Exclusive Products:</b> Our high-performance ASHVA 4x4, designed for any off-road use only, stands apart with world-class engineering and an affordable price tag compared to expensive imports.</li>
                  <li><b>Proven Technology:</b> A-THON’s technology is proprietary, developed and tested to exceed global benchmarks in off-road and utility performance, offering a competitive edge in the Indian market.</li>
                  <li><b>Lucrative Business Opportunity:</b> With growing interest in off-road usage and farm utility vehicles, becoming a dealer means tapping into a high-potential market with significant demand across all all-terrain sectors.</li>
                  <li><b>Comprehensive Support:</b> A-THON provides its dealers with full marketing support, training, sales strategies, and service assistance to ensure you succeed from day one.</li>
                  <li><b>Strong Customer Base:</b> With thousands of inquiries, potential customers, and an experience center, you will have a pipeline of leads ready to convert.</li>
                </ol>
              </div>
            </Container>
            <div className="partsserv_inner">
              <Container>
                <div>
                  <h5><b>Dealer Benefits</b></h5>
                  <ul>
                    <li><b>Low Investment, High Returns:</b> Our flexible dealership models allow you to start with a minimal investment while enjoying higher profit margins on each sale.</li>
                    <li><b>Marketing & Sales Support:</b> A-THON provides all the tools you need to promote and grow your dealership, including digital marketing assets, physical collateral, and targeted campaigns.</li>
                    <li><b>Nationwide Brand Presence:</b> : Be part of a growing network across India, benefiting from national recognition and customer interest.</li>
                    <li><b>Cutting-Edge Technology:</b> Represent products with cutting-edge features and design that provide your customers with the ultimate off-road and utility experience.</li>
                    <li><b>Exclusive Territories:</b> We offer exclusive territories to ensure you have access to an untapped market with minimal competition.</li>
                    <li><b>Training and Certification:</b> Access our in-depth dealer training program to become an expert in A-THON products, technology, and customer service.</li>
                  </ul>
                </div>
              </Container>
            </div>
            <Container>
              <div>
                <h5>Who Should Apply?</h5>
                <ul>
                  <li>Entrepreneurs and business owners with a passion for automobiles, technology, and off-road experiences.</li>
                  <li>Existing dealerships looking to expand their portfolio with innovative and premium all-terrain products.</li>
                  <li>Investors with a desire to tap into the rapidly growing off-road vehicle market in India.</li>
                </ul>
              </div>
              <div>
                <h5>Ideal Locations</h5>
                <p>We are particularly interested in partnering with dealers in key cities, regional hubs, and areas with significant demand for all-terrain off-road related applications.</p>
              </div>
              <div>
                <h5>Become a Dealer Today!</h5>
                <p>Interested in being part of A-THON’s all-terrain revolution? Take the first step towards joining our exclusive network by filling out the form below. Our team will get in touch to guide you through the process and answer any questions.</p>
                <p>Join the revolution shaping the future of India’s all-terrain mobility!. Partner with A-THON and drive success, one vehicle at a time.</p>
              </div>
              <div>
                <h5>Contact Us</h5>
                <ul>
                  <li><b>Phone:</b> +91 9740025534</li>
                  <li><b>Email:</b> dealerships@a-thonallterrain.com</li>
                </ul>
              </div>
            </Container>
          </div>
        </>
      )
      }
    </React.Fragment >
  )
}

export default DealerOppor