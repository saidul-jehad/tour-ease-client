// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className={`mySwiper mt-14 `}
        >
            <SwiperSlide>
                <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://cdn.getyourguide.com/img/tour/64620bb85e0d4.png/145.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                    <h3 className='font-bold text-3xl text-center animate__animated animate__lightSpeedInRight'><span>Recommended : </span>
                        <Typewriter

                            words={["Saint Martin's Island", 'Cox’s Bazar',]}
                            loop={20}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h3>
                    <p className='md:w-3/5 w-4/5 mx-auto animate__animated animate__lightSpeedInLeft'>TourEase offers curated travel experiences tailored to your preferences. From cultural immersion to adrenaline-fueled adventures, embark on unforgettable journeys with ease</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://t4.ftcdn.net/jpg/03/36/71/29/360_F_336712931_9oC9QXONCoXpnoF5Us34GfSCvy5vWZ6W.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                    <h3 className='font-bold text-3xl text-center animate__animated animate__lightSpeedInRight'><span>Recommended : </span>
                        <Typewriter

                            words={["Saint Martin's Island", 'Cox’s Bazar',]}
                            loop={20}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h3>
                    <p className='md:w-3/5 w-4/5 mx-auto animate__animated animate__lightSpeedInLeft'>TourEase offers curated travel experiences tailored to your preferences. From cultural immersion to adrenaline-fueled adventures, embark on unforgettable journeys with ease</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://t3.ftcdn.net/jpg/03/08/07/74/360_F_308077404_GZLRc6Bk9Uw8laf646emfbfFRG53HYIN.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                    <h3 className='font-bold text-3xl text-center animate__animated animate__lightSpeedInRight'><span>Recommended : </span>
                        <Typewriter

                            words={["Saint Martin's Island", 'Cox’s Bazar',]}
                            loop={20}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        /></h3>
                    <p className='md:w-3/5 w-4/5 mx-auto animate__animated animate__lightSpeedInLeft'>TourEase offers curated travel experiences tailored to your preferences. From cultural immersion to adrenaline-fueled adventures, embark on unforgettable journeys with ease</p>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;