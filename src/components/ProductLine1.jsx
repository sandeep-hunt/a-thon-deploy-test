import React from 'react'
import { Container } from 'react-bootstrap'
import Ashva4x4 from '../assets/images/rovers/rovers/ashva4x4.png'
import Ashva6x6 from '../assets/images/rovers/rovers/ashva6x6.png'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation } from 'swiper/modules';

const slides = [
    {
        image: Ashva4x4,
        alt_text: "ashva 4x4",
        name: "Ashva 4x4",
        link: "/ashva_4x4",
    },
    {
        image: Ashva6x6,
        alt_text: "ashva 6x6",
        name: "Ashva 6x6",
        link: "/ashva_6x6",
    },
]

const ProductLine1 = () => {
    return (
        <React.Fragment>
            <Container>
                <div className="productSldrCont">
                    <div className="product-wrapper mb-3">
                        <span className='productHdTtlBig'>Product Line</span>
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

export default ProductLine1