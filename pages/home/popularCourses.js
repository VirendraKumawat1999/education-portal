import React from "react";
import Image from "next/image";


const PopularCourseComponent = () =>{

    const popularCourse = [

        {
            "name":"jobs",
        },
        {
            "name":"Study material",
        },
        {
            "name":"Previous years question paper",
        },
        {
            "name":"Exams",
        },
        {
            "name":"Exam Results",
        },
        {
            "name":"Scholorships",
        },
        {
            "name":"Govt Schemes",
        },
        {
            "name":"Question papers",
        },
        {
            "name":"E books",
        },
        {
            "name":"Notification",
        }
    ]
    
    return (

        <>
             <div class="bg-white-0  PopularCoursesSection_PopularCoursesSection__3iAnZ FirstFoldAILive_PopularCoursesSection__1q8Nl">
                            <div class="PopularCoursesSection_popularCoursesText__Z084q txt-20">Popular Courses</div>
                            <div class="flex w-1/1 overflow-x-scroll" style={{ gap: '24px' }}>
                               
                               
                               {popularCourse.map((item,idx)=>
                                <div key={idx} class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{ backgroundColor: 'rgb(232, 223, 255)', boxShadow: 'rgb(208, 196, 240) 0px 3px 0px' }}>
                                    <Image height="40" width="40" class="mb-2" src={require('../../public/assets/images/Popular_course/Screenshot 2024-02-20 131858.png')} alt="" />
                                    <div class="flex justify-content-between align-items-start contentdiv">
                                        <div class="" >{item.name}</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                               
                               )}
                                




                            </div>
                        </div>
        </>
    );
};

export default PopularCourseComponent;
