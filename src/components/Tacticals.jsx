import React from 'react'
import { Container } from 'react-bootstrap'
import Artpark from '../assets/images/tacticals/artpark.svg'
import Tawara from '../assets/images/tacticals/tawara.svg'
import Comrado from '../assets/images/tacticals/comrado.svg'
import AutoMind from '../assets/images/tacticals/automind.svg'
import Tss from '../assets/images/tacticals/tss.png'
import Cogos from '../assets/images/tacticals/cogos.png'
import Campco from '../assets/images/tacticals/campco.png'
import Precision from '../assets/images/tacticals/precision.png'
import { Link } from 'react-router-dom'

const Tacticals = () => {
  return (
    <React.Fragment>
        <Container className='mt-4'>
            <div className="tactical-content">
                <h4>Tactical Collaborators.</h4>
                <div className="carousel-container">
                <div className="tactical-content-body">
                    <Link to="https://artpark.in/" target='_blank'><img src={Artpark} className="tactical_img" alt="artpart" /></Link>
                    <Link to="https://twararobotics.in/" target='_blank'><img src={Tawara} className="tactical_img" alt="tawara-robotics" /></Link>
                    <Link to="https://www.comradoaerospace.com/" target='_blank'><img src={Comrado} className="tactical_img" alt="comrado" /></Link>
                    <img src={AutoMind} className="tactical_img" alt="aytominds" />
                    <Link to="https://www.tssindia.in/" target='_blank'><img src={Tss} className="tactical_img" alt="tss" /></Link>
                    <Link to="https://cogostrucks.com/" target='_blank'><img src={Cogos} className="tactical_img" alt="cogos" /></Link>
                    <Link to="https://campcochocolates.com/" target='_blank'><img src={Campco} className="tactical_img" alt="campco" /></Link>
                    <Link to="https://precisionhubllc.com/" target='_blank'><img src={Precision} className="tactical_img" alt="precision" /></Link>
                    
                    <Link to="https://artpark.in/" target='_blank'><img src={Artpark} className="tactical_img" alt="artpart" /></Link>
                    <Link to="https://twararobotics.in/" target='_blank'><img src={Tawara} className="tactical_img" alt="tawara-robotics" /></Link>
                    <Link to="https://www.comradoaerospace.com/" target='_blank'><img src={Comrado} className="tactical_img" alt="comrado" /></Link>
                    <img src={AutoMind} className="tactical_img" alt="aytominds" />
                    <Link to="https://www.tssindia.in/" target='_blank'><img src={Tss} className="tactical_img" alt="tss" /></Link>
                    <Link to="https://cogostrucks.com/" target='_blank'><img src={Cogos} className="tactical_img" alt="cogos" /></Link>
                    <Link to="https://campcochocolates.com/" target='_blank'><img src={Campco} className="tactical_img" alt="campco" /></Link>
                    <Link to="https://precisionhubllc.com/" target='_blank'><img src={Precision} className="tactical_img" alt="precision" /></Link>
                </div>
                </div>
            </div>
        </Container>
    </React.Fragment>
  )
}

export default Tacticals