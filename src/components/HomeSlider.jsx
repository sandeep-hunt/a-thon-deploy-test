import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // Import autoplay style
import { FreeMode, Navigation, Autoplay } from 'swiper/modules';
import slider1 from '../assets/images/slider/slider1.png'
import slider2 from '../assets/images/slider/slider2.png'
import slider3 from '../assets/images/slider/slider3.png'
import slider4 from '../assets/images/slider/slider4.png'
import slider5 from '../assets/images/slider/slider5.png'
import slider6 from '../assets/images/slider/slider6.png'

const slides = [
    {
        image: slider1,
        alt_text: "ashva 6x6"
    },
    {
        image: slider2,
        alt_text: "ashva 4x4"
    },
    {
        image: slider3,
        alt_text: "ashva 4x4"
    },
    {
        image: slider4,
        alt_text: "ashva 4x4"
    },
    {
        image: slider5,
        alt_text: "ashva 4x4"
    },
    {
        image: slider6,
        alt_text: "ashva 4x4"
    },
]

const HomeSlider = () => {
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={0} // No space between slides
                slidesPerView={1} // Default number of slides to show
                navigation={false}
                loop={true}
                autoplay={{
                    delay: 3000, // Time between slides in milliseconds
                    disableOnInteraction: false // Keeps autoplay running even after interaction
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 0, // No space for small screens
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 0, // No space for tablets
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0, // No space for desktops
                    },
                }}
                modules={[FreeMode, Navigation, Autoplay]}
                className="mySwiper3"
            >
                {
                    slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <img src={slide.image} className='img-fluid' alt={slide.alt_text} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </React.Fragment>
    )
}

export default HomeSlider;
