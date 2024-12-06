import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import RD1 from '../assets/images/facilities/RD/rd1.png'
import RD2 from '../assets/images/facilities/RD/rd2.png'
import RD3 from '../assets/images/facilities/RD/rd3.png'
import RD4 from '../assets/images/facilities/RD/rd4.png'
import RD5 from '../assets/images/facilities/RD/rd5.png'
import ThumbRD1 from '../assets/images/facilities/RD/rdthumb1.png'
import ThumbRD2 from '../assets/images/facilities/RD/rdthumb2.png'
import ThumbRD3 from '../assets/images/facilities/RD/rdthumb3.png'
import ThumbRD4 from '../assets/images/facilities/RD/rdthumb4.png'
import ThumbRD5 from '../assets/images/facilities/RD/rdthumb5.png'
import Reli1 from '../assets/images/facilities/ReliEngg/reli1.png'
import Reli2 from '../assets/images/facilities/ReliEngg/reli2.png'
import Reli3 from '../assets/images/facilities/ReliEngg/reli3.png'
import Reli4 from '../assets/images/facilities/ReliEngg/reli4.png'
import ReliThumb1 from '../assets/images/facilities/ReliEngg/relithumb1.png'
import ReliThumb2 from '../assets/images/facilities/ReliEngg/relithumb2.png'
import ReliThumb3 from '../assets/images/facilities/ReliEngg/relithumb3.png'
import ReliThumb4 from '../assets/images/facilities/ReliEngg/relithumb4.png'
import Test1 from '../assets/images/facilities/Testing/test1.png'
import Test2 from '../assets/images/facilities/Testing/test2.png'
import Test3 from '../assets/images/facilities/Testing/test3.png'
import Test4 from '../assets/images/facilities/Testing/test4.png'
import Test5 from '../assets/images/facilities/Testing/test5.png'
import TestThumb1 from '../assets/images/facilities/Testing/testthumb1.png'
import TestThumb2 from '../assets/images/facilities/Testing/testthumb2.png'
import TestThumb3 from '../assets/images/facilities/Testing/testthumb3.png'
import TestThumb4 from '../assets/images/facilities/Testing/testthumb4.png'
import TestThumb5 from '../assets/images/facilities/Testing/testthumb5.png'
import CorpOfc1 from '../assets/images/facilities/CorpOfc/corp1.png'
import CorpOfc2 from '../assets/images/facilities/CorpOfc/corp2.png'
import CorpOfc3 from '../assets/images/facilities/CorpOfc/corp3.png'
import CorpThumb1 from '../assets/images/facilities/CorpOfc/corpthumb1.png'
import CorpThumb2 from '../assets/images/facilities/CorpOfc/corpthumb2.png'
import CorpThumb3 from '../assets/images/facilities/CorpOfc/corpthumb3.png'
import Fab1 from '../assets/images/facilities/FabUnit/fabunit1.png'
import Fab2 from '../assets/images/facilities/FabUnit/fabunit2.png'
import Fab3 from '../assets/images/facilities/FabUnit/fabunit3.png'
import Fab4 from '../assets/images/facilities/FabUnit/fabunit4.png'
import Fab5 from '../assets/images/facilities/FabUnit/fabunit5.png'
import FabThumb1 from '../assets/images/facilities/FabUnit/fabthumb1.png'
import FabThumb2 from '../assets/images/facilities/FabUnit/fabthumb2.png'
import FabThumb3 from '../assets/images/facilities/FabUnit/fabthumb3.png'
import FabThumb4 from '../assets/images/facilities/FabUnit/fabthumb4.png'
import FabThumb5 from '../assets/images/facilities/FabUnit/fabthumb5.png'

const Facilities = () => {

    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
    const [showComponent3, setShowComponent3] = useState(false);
    const [showComponent4, setShowComponent4] = useState(false);
    const [showComponent5, setShowComponent5] = useState(false);

    const handleClick = (componentId) => {
        switch (componentId) {
            case 1:
                setShowComponent1(true);
                setShowComponent2(false);
                setShowComponent3(false);
                setShowComponent4(false);
                setShowComponent5(false);
                break;
            case 2:
                setShowComponent1(false);
                setShowComponent2(true);
                setShowComponent3(false);
                setShowComponent4(false);
                setShowComponent5(false);
                break;
            case 3:
                setShowComponent1(false);
                setShowComponent2(false);
                setShowComponent3(true);
                setShowComponent4(false);
                setShowComponent5(false);
                break;
            case 4:
                setShowComponent1(false);
                setShowComponent2(false);
                setShowComponent3(false);
                setShowComponent4(true);
                setShowComponent5(false);
                break;
            case 5:
                setShowComponent1(false);
                setShowComponent2(false);
                setShowComponent3(false);
                setShowComponent4(false);
                setShowComponent5(true);
                break;
            default:
                break;
        }
    };

    return (
        <React.Fragment>
            <div className="productImgSlidr facilities">
                <h4>Facilities</h4>
                <div className="sliderMenu">
                    <h6 onClick={() => handleClick(1)}>R&D Centre &rarr;</h6>
                    <h6 onClick={() => handleClick(2)}>Reliability Engg &rarr;</h6>
                    <h6 onClick={() => handleClick(3)}>Test Track &rarr;</h6>
                    <h6 onClick={() => handleClick(4)}>Corporate office &rarr;</h6>
                    <h6 onClick={() => handleClick(5)}>Production unit &rarr;</h6>
                </div>
                {showComponent1 && <RDPrd />}
                {showComponent2 && <ReliEngg />}
                {showComponent3 && <Testing />}
                {showComponent4 && <CorpOfc />}
                {showComponent5 && <FabUnit />}
            </div>
        </React.Fragment>
    )
}
function RDPrd() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={RD1} alt='Colorful flags fluttering in field of A-THON ALL TERRAIN PRIVATE LIMITED facility.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RD2} alt='A picturesque street in A-THON Plant adorned with trees and buildings'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RD3} alt='A conference room in the A-THON office featuring a long table surrounded by chairs.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RD4} alt='A-THON office featuring numerous desks and computers.'/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={RD5} alt='A-THON office space with staff members working on computers.'/>
                </SwiperSlide>
            </Swiper>
            <div className="sliderThmbs" style={{padding: "0 15rem"}}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={ThumbRD1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ThumbRD2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ThumbRD3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ThumbRD4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ThumbRD5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )
}

function ReliEngg() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={Reli1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Reli2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Reli3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Reli4} />
                </SwiperSlide>
            </Swiper>
            <div className="sliderThmbs" style={{padding: "0 18rem"}}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={ReliThumb1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ReliThumb2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ReliThumb3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ReliThumb4} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )

}

function Testing() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={Test1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Test2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Test3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Test4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Test5} />
                </SwiperSlide>
            </Swiper>
            <div className="sliderThmbs" style={{padding: "0 15rem"}}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={TestThumb1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TestThumb2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TestThumb3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TestThumb4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TestThumb5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )

}

function CorpOfc() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={CorpOfc1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CorpOfc2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={CorpOfc3} />
                </SwiperSlide>
            </Swiper>
            <div className="sliderThmbs" style={{padding: "0 22rem"}}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={CorpThumb1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CorpThumb2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={CorpThumb3} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )

}

function FabUnit() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <React.Fragment>
            <Swiper
                spaceBetween={10}
                navigation={true}
                loop={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img src={Fab1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Fab2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Fab3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Fab4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={Fab5} />
                </SwiperSlide>
            </Swiper>
            <div className="sliderThmbs" style={{padding: "0 15rem"}}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={5}
                    loop={true}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src={FabThumb1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={FabThumb2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={FabThumb3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={FabThumb4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={FabThumb5} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </React.Fragment>
    )

}

export default Facilities