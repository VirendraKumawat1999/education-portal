
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const studyMaterialComponent = () =>{

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            }
        ]
    };

    const StudyMatrial =[
        {
            "name":"Previous year",
            "image1":'../../assets/images/Study_material/ncert-solutions.webp'
         },
        {
           "name":"solved papers",
           "image1":'../../assets/images/Study_material/ncert-solutions.webp'
            
        },
        {"name":"NCERT" ,
        "image1":'../../assets/images/Study_material/ncert-solutions.webp'
        
        },
        {"name":"Sample Paper",
        "image1":'../../assets/images/Study_material/ncert-solutions.webp'
    },
        {"name":"NCERT",
        "image1":'../../assets/images/Study_material/ncert-solutions.webp'
    },
        {"name":"Important",
        "image1":'../../assets/images/Study_material/ncert-solutions.webp'
    }
    ]
    return(

        <>

<section className="StudyMaterials_study-slider__196qW">
                    <div className="styles_small-container__2O3eV">
                        {/* <Image src= {require('../../')} /> */}
                        <h2 style={{paddingBottom:'0px'}}>Study Materials</h2>
                    </div>
                    <div className="styles_small-container__2O3eV"style={{marginTop:'40px'}} >
                        <Slider className="carousel" {...settings}>

                            {
                                StudyMatrial.map((items,idx)=>
                                <div key={idx}>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk" >
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> {items.name}</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>

                                )
                            }
                            

                        </Slider>
                    </div>
                </section>
        </>
    );
}

export default studyMaterialComponent;