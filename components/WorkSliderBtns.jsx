"use client";

import {useSwiper} from "swiper/react";
import {PiCareLeftBold, PiCareRightBold} from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconsStyles}) => {
    const swiper = useSwiper();
    return (
       <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCareLeftBold  className={iconsStyles} />
            </button>
            <button className={btnStyles} onClick={() => swiper.slideNext()}>
                <PiCareRightBold  className={iconsStyles} /> 
                </button>
       </div>
    )
};

export default WorkSliderBtns;  