import React from 'react'
import Evol1 from '../assets/images/about/evol1.png'
import Evol2 from '../assets/images/about/evol2.png'
import Evol3 from '../assets/images/about/evol3.png'
import Evol4 from '../assets/images/about/evol4.png'
import { Container } from 'react-bootstrap'

const Evolution = () => {
    return (
        <React.Fragment>
            <Container>
                <h4 className='mt-3'>Evolution</h4>
                <ul className="timeline aboutEvolve">
                    <li className='mt-3'>
                        <div className="direction-l">
                            <div className="product-wrapper">
                                <img src={Evol1} className='img-fluid' alt="adbhut" />
                                <h6 className='product_title'>TD1</h6>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-r">
                            <div className="product-wrapper">
                                <img src={Evol2} className='img-fluid' alt="adbhut" />
                                <h6 className='product_title'>TD2</h6>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-l">
                            <div className="product-wrapper">
                                <img src={Evol3} className='img-fluid' alt="arav" />
                                <h6 className='product_title'>TD3</h6>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="direction-r">
                            <div className="product-wrapper">
                                <img src={Evol4} className='img-fluid' alt="adbhut" />
                                <h6 className='product_title'>TD4</h6>
                            </div>
                        </div>
                    </li>

                </ul>
            </Container>
        </React.Fragment>
    )
}

export default Evolution