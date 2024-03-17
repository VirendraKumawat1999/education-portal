import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import PopularCourseComponent from './popularCourses'

const HeaderComponent = ()=>{

    const Sliders = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: false,
        nextArrow: false,
    }

    return (
        <>
            <div class="FirstFoldAILive_topBanner__1OI8e">
                        <Slider className="tarkikComandSlider" {...Sliders}>
                            <div><Image src={require('../../public/assets/images/header-slider/1cd9c91c-edca-4151-8ac4-738632e63b54-1704979110112-4102494629269801.png')} alt=""/></div>
                            <div><Image src={require('../../public/assets/images/header-slider/577c6e12-b46f-46a0-aa24-c86d164a52f1-1706623019905-4102494629269801.png')} alt="" /></div>
                            <div><Image src={require('../../public/assets/images/header-slider/98572017-918c-4b1f-98da-90a512e6808e-1707399735264-4102515828415223.png')} alt="" /></div>
                            <div><Image src={require('../../public/assets/images/header-slider/98f7205a-843e-4d4d-bae3-022b0e218280-1707740103123-4001376723323670.png')} alt="" /></div>
                        </Slider>



                        <PopularCourseComponent/>


                       
                    </div>
        </>
    );
};

export default HeaderComponent;
