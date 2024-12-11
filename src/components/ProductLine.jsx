import React from 'react'
import { Container } from 'react-bootstrap'
import Adbhut from '../assets/images/rovers/rovers/adbhut.png'
import Arav from '../assets/images/rovers/rovers/arav.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

const slides = [
    {
        image: Arav,
        alt_text: "dfsjfisjdfskf",
        name: "Ashva 4S",
        link: "/ashva_4s",
    },
    {
        image: Adbhut,
        alt_text: "dfsjfisjdfskf",
        name: "Ashva UT",
        link: "/ashva_ut",
    },
]

const ProductLine = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="productSldrCont">
                    <div className="product-wrapper mb-3">
                        <span className='productHdTtlBig'>On the horizon...</span>
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
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 2,
                            },
                        }}
                        className="mySwiper3"
                    >
                        {
                            slides.map((slide, index) => (
                                <SwiperSlide key={index}>
                                    <div className="productSldrContImg">
                                        <img src={slide.image} className='img-fluid' alt={slide.alt_text} />
                                        <div className="productSldrContInr">
                                            <h4>{slide.name}</h4>
                                            <Link className='btnLink' to={slide.link}>Know More</Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default ProductLine