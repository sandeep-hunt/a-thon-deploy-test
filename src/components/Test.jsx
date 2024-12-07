import React from 'react';
import ExpLogo from '../assets/images/expLogo.svg';
import { Link } from 'react-router-dom';

const Test = () => {
  return (
    <React.Fragment>
        <div className="experience_container">
            <div className="experience_content">
                <img src={ExpLogo} className='expLogo' alt="experience logo" />
                <div className="exp-content-inner">
                    <h5 className='expTxt'>A-thon Experience center</h5>
                    <span className='expTag'>Hoskote, KARNATAKA</span>
                </div>
                <Link to="experience-centre" className='btnLink'>VISIT </Link>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Test