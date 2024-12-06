import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Testi1 from '../assets/images/testimonials/testi1.png'
import Testi2 from '../assets/images/testimonials/testi2.png'
import Testi3 from '../assets/images/testimonials/testi3.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

const testi = [
    {
        name: "Umakant Soni",
        desc: "Chairman AI foundry | Co-founder ARTPARK",
        testi: "Great initiative! Intelligence revolution, the key for sustainable growth.",
        link: "https://www.linkedin.com/posts/soniumakant_agribot-aiforall-agriculture-activity-7193495684816228353-fQnz?utm_source=share&utm_medium=member_desktop",
        image: Testi2,
    },
    {
        name: "Virbhadra Singh Rawat ",
        desc: "Senior Advisor Aerospace, Defense, Startups",
        testi: "This product, a game changer for Farming, is also a game changer for Defense.",
        link: "https://www.linkedin.com/posts/virbhadra-singh-rawat-018359168_makeinindia-farmers-innovators-activity-7173872843997241345-GrSH?utm_source=share&utm_medium=member_desktop",
        image: Testi1,
    },
    {
        name: "Shri HD Kumaraswamy ",
        desc: "Honorable Minister of Heavy Industries & Steel",
        testi: "Quite pleased after seeing all of your accomplishments in this robotic world and artificial intelligence.",
        link: "https://www.linkedin.com/posts/a-thon-allterrain-pvt-ltd_innovationinindia-makeinindia-allterraintech-activity-7252329314845630464-1-vn?utm_source=share&utm_medium=member_android",
        image: Testi3,
    }
]

const Testimonial = () => {
    return (
        <React.Fragment>
            <Container className='mt-4'>
                <div className="product-wrapper mb-4">
                    <span className='productHdTtlBig'>Testimonials</span>
                </div>

                <Swiper
                    spaceBetween={25}
                    navigation={false}
                    loop={false}
                    modules={[FreeMode, Navigation]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.25,
                        },
                        576: {
                            slidesPerView: 1.25,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="mySwiper3"
                >
                    {
                        testi.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div class="texti-cont">
                                    <img src={item.image} className='img-fluid' alt="Your Image" />
                                    <div class="overlay-text">
                                        <h6 className='testiTxt'>“{item.testi}”</h6>
                                        <Link className='testimonial-link' to={item.link} target='_blank'>Read More →</Link>
                                        <div className="overlay-text-bottom">
                                            <p className='testiName'><b>{item.name}</b></p>
                                            <span className='textiDesg'>{item.desc}</span>
                                        </div>
                                    </div>
                                    <div className="textboxSm">
                                        <div className="overlay-text-bottom">
                                            <p className='testiName'><b>{item.name}</b></p>
                                            <span className='textiDesg'>{item.desc}</span>
                                            <div className='mt-2 mb-1'>
                                                <Link className='testimonial-link' to={item.link} target='_blank'>Know More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Container>
        </React.Fragment >
    )
}

export default Testimonial