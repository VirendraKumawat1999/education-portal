'use client'

import Image from 'next/image'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from 'react';
export default function Home() {
    const [openTab, setOpenTab] = React.useState(1);
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
    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ]

    // const subDrop1=document.querySelector('#subDrop')


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
            {/*  Navigation start*/}
            <section className='Section-first'>
                <div className='top_sec'>
                    <div className='header_sec'>
                        <nav className="navbar">
                            <a href="#" className="navbar-logo">
                                <Image src={require('../assets/images/Logo/vedantu-logo.svg')} />
                            </a>
                            <ul className="navbar-links">
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 Header_navButton__2WGA8">
                                            Courses

                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>

                                        </div>
                                    </a>
                                    <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0" style={{ display: 'flex', left: '-75px', paddingTop: '0px' }}>
                                        <div className='dropdown-left'>
                                            <div className='tryscrollbar'>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES firstdrop" key={itemsdata} style={{ marginBottom: '4px' }}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a></div>
                                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>

                                        </div>
                                        <div className='dropdown-right dropdown-left' style={{ backgroundColor: '#fff', width: '100%', minWidth: '300px' }}>
                                            <div className='tryscrollbar'>
                                                <div className="dropdown-block Header_dropdownBlock__1By9w oureInitiative_sec_right">
                                                    <div className="dropdown-header Header_dropdownHeader__2NacE tw-flex Header_flex__2Nkvb" style={{ display: 'flex' }}>
                                                        <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Find courses by class</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec " style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Repeater</h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 12 <span class="subjectname">Science PCM</span></h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 11 <span class="subjectname">Science PCM</span></h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 10 </h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 9 </h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 8 </h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 7 </h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 6 </h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 6 </h4>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='dropdown-right dropdown-left' style={{ backgroundColor: '#fff', width: '100%', minWidth: '300px' }}>
                                            <div className='tryscrollbar'>
                                                <div className="dropdown-block Header_dropdownBlock__1By9w oureInitiative_sec_right">
                                                    <div className="dropdown-header Header_dropdownHeader__2NacE tw-flex Header_flex__2Nkvb" style={{ display: 'flex' }}>
                                                        <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Find courses by target</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec schoolTuition_secontion" style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW " style={{ position: 'relative' }}>
                                                            <h4>School tuition

                                                            </h4>
                                                            <p>For class 3-12</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="7px" height="11px"
                                                                class="dropdown-chevron Header_dropdownChevron__1TwBw"
                                                                viewBox="0 0 7 11" style={{ position: 'absolute', top: '21px', right: '20px' }}>
                                                                <path stroke="#01202B" stroke-linecap="round" stroke-linejoin="round"
                                                                    stroke-width="1.5" d="M1 1l5 4.5L1 10" opacity=".7" fill="none"></path></svg>



                                                        </a>
                                                        <div className='dropdown-right dropdown-left displaypropetry' style={{ backgroundColor: '#fff', width: '100%', minWidth: '300px', position: 'absolute', left: '912px', top: '0', paddingTop: '0px' }}>
                                                            {/* <div className='tryscrollbar'> */}
                                                            <div className='firstsubdropdown_main_div'>
                                                                <div className='tryscrollbar' style={{ minHeight: '390px' }}>

                                                                    <div>
                                                                        <a href='#'>
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px' }}>Long-term courses</h3>
                                                                            <p>Full courses that cover both competitive and school exams</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                        <a href='#' >
                                                                            <h3 className='oureInitiative' style={{ marginLeft: '0px', fontSize: '12px' }}>Crash Course</h3>
                                                                            <p style={{ fontSize: '10px' }}>Class 9-12</p>
                                                                        </a>
                                                                    </div>

                                                                </div>
                                                            </div>
                                                            {/* </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option">Courses for Kids
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>
                                        </div>
                                    </a>
                                    <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0">
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option">Free study material
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>
                                        </div>
                                    </a>
                                    <div className="dropdown new ">
                                        {/* Main dropdwon */}
                                        {
                                            [1, 2, 3, 4, 5, 6].map((maindropdown) =>
                                                <a href="#" className='SUb_dropdown subDrop1' id="subDrop" key={maindropdown}>NCERT Solutions
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                        <path stroke="#01202B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l5 4.5L1 10" opacity=".7" fill="none"></path>
                                                    </svg>

                                                    <div className="sub_sub_dropdown testing_dropdown" id="InsidesubDrop">
                                                        {/* inside sub dropdown */}
                                                        {[1, 2, 3, 4, 5].map((dropdown) =>
                                                            <a href="#" className='insideSUb_dropdown insidedropdownmenu'
                                                                style={{ paddingBottom: '10px' }} key={dropdown}>NCERT Solutions for Class 12

                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                                    <path stroke="#01202B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l5 4.5L1 10" opacity=".7" fill="none"></path>
                                                                </svg>

                                                                <div className="sub_sub_dropdown1 " id="InsidesubDrop">
                                                                    {
                                                                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itemskey) => (

                                                                            <a href="#" className='insideSUb_dropdown' key={itemskey}>NCERT Solutions for Class 12 Physics</a>

                                                                        ))
                                                                    }
                                                                </div>

                                                            </a>
                                                        )}


                                                    </div>
                                                </a>)
                                        }


                                    </div>
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option lastoptions" style={{ paddingLeft: '15px' }}>Offline Centres

                                        </div>
                                    </a>

                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option" style={{ minWidth: '0px' }}>More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>
                                        </div>
                                    </a>
                                    <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0" style={{ display: 'flex', left: '-75px', paddingTop: '0px' }}>
                                        <div className='dropdown-left'>
                                            <div className='tryscrollbar'>
                                                {
                                                    [1, 2, 3, 4, 5, 6].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES" key={itemsdata}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a></div>
                                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="dropdown-block Header_dropdownBlock__1By9w">
                                                    <div className="dropdown-header Header_dropdownHeader__2NacE tw-flex Header_flex__2Nkvb" style={{ display: 'flex' }}>
                                                        <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Our initiatives</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec">

                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Vedantu Scholarship Admission Test (VSAT)</h4>
                                                            <p>Give an online test to get up to 100% scholarship on Vedantu courses</p>
                                                        </a>
                                                        <a href="https://olympiad.vedantu.com/?itm_source=volt_home_more" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Vedantu Olympiad Litmus Test (VOLT)</h4>
                                                            <p>Online test to get a chance to prepare free for the international olympiad</p>
                                                        </a>
                                                        <a href="https://www.vedantu.com/eklavya/jee" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Eklavya JEE</h4>
                                                            <p>Get free online coaching from top teachers to crack JEE Advanced exam</p>
                                                        </a>
                                                        <a href="https://www.vedantu.com/eklavya/neet" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Eklavya NEET</h4>
                                                            <p>Get free online coaching from top teachers for NEET exam preparation</p>
                                                        </a>
                                                        <a href="https://www.vedantu.com/revise-india" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Revise India</h4>
                                                            <p>Free revision camp for Class 10 CBSE students with LIVE doubt solving</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className='dropdown-right dropdown-left' style={{ backgroundColor: '#fff' }}>
                                            <div className='tryscrollbar'>
                                                <div className="dropdown-block Header_dropdownBlock__1By9w oureInitiative_sec_right">
                                                    <div className="dropdown-header Header_dropdownHeader__2NacE tw-flex Header_flex__2Nkvb" style={{ display: 'flex' }}>
                                                        <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Resources</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec " style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Testimonials</h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>FAQs</h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Blogs</h4>
                                                        </a>
                                                        <a href="https://vsat.vedantu.com/" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>News</h4>
                                                        </a>
                                                    </div>
                                                </div>



                                                {
                                                    [1, 2, 3, 4, 5, 6].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES" key={itemsdata}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="https://www.vedantu.com/english-superstar?&amp;itm_source=new_nav_menu&amp;itm_medium=new_nav_menu&amp;itm_campaign=new_nav_menu">English Superstar</a></div>
                                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div className="Header_call_section">
                                <div className="tw-flex Header_flex__2Nkvb tw-items-center tw-justify-end" style={{ display: 'flex' }}>
                                    <a href="tel:1800-120-456-456" className="Header_headerPhone__iwy4M tw-flex Header_flex__2Nkvb tw-items-center">
                                        <div className="Header_headerPhoneIcon__3JDrA">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 16 16" fill="#01202B">
                                                <path fill-rule="evenodd" d="M3.2 6.933c1.244 2.49 3.378 4.534 5.867 5.867l1.955-1.956c.267-.266.622-.355.89-.177.977.355 2.044.533 3.2.533.532 0 .888.356.888.889v3.022c0 .533-.356.889-.889.889C6.756 16 0 9.244 0 .889 0 .356.356 0 .889 0H4c.533 0 .889.356.889.889 0 1.067.178 2.133.533 3.2.09.267 0 .622-.178.889L3.2 6.933Z" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <div className="Header_headerPhoneNumber__30Fwa  md:tw-block">
                                            <p>Talk to our experts</p>
                                            <span>1800-120-456-456</span>
                                        </div>
                                    </a>
                                    <button type="button" className="button button_button__2GW-o button--small button_buttonSmall__3aGZA     button--secondary button_buttonSecondary__10WYP Header_signInButton__2iDLl">Sign in</button>
                                </div>
                            </div>
                        </nav>

                    </div>


                    <div class="FirstFoldAILive_topBanner__1OI8e">
                        <Slider className="tarkikComandSlider" {...Sliders}>
                            <div><Image src={require('../assets/images/header-slider/1cd9c91c-edca-4151-8ac4-738632e63b54-1704979110112-4102494629269801.png')} /></div>
                            <div><Image src={require('../assets/images/header-slider/577c6e12-b46f-46a0-aa24-c86d164a52f1-1706623019905-4102494629269801.png')} /></div>
                            <div><Image src={require('../assets/images/header-slider/98572017-918c-4b1f-98da-90a512e6808e-1707399735264-4102515828415223.png')} /></div>
                            <div><Image src={require('../assets/images/header-slider/98f7205a-843e-4d4d-bae3-022b0e218280-1707740103123-4001376723323670.png')} /></div>
                        </Slider>






                        <div class="bg-white-0  PopularCoursesSection_PopularCoursesSection__3iAnZ FirstFoldAILive_PopularCoursesSection__1q8Nl">
                            <div class="PopularCoursesSection_popularCoursesText__Z084q txt-20">Popular Courses</div>
                            <div class="flex w-1/1 overflow-x-scroll" style={{gap: '24px'}}>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{ backgroundColor: 'rgb(232, 223, 255)', boxShadow: 'rgb(208, 196, 240) 0px 3px 0px' }}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 131858.png')}  />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(255, 240, 203)',boxShadow: 'rgb(229, 213, 171) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132514.png')} style={{width:'45px'}} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                {/* <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(182, 255, 228)',boxShadow: 'rgb(160, 235, 207) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132531.png')} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(252, 228, 236)',boxShadow: 'rgb(243, 207, 219) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132551.png')} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div> */}
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(255, 240, 233)',boxShadow: 'rgb(243, 207, 219) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132604.png')} style={{width:'33px'}} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(255, 240, 233)',boxShadow: 'rgb(243, 207, 219) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132604.png')} style={{width:'33px'}} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(255, 240, 233)',boxShadow: 'rgb(243, 207, 219) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132604.png')} style={{width:'33px'}} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="cursor-pointer flex-none round-8 p-12 wt-500 txt-14 lh-140p black-80 mb-4 maxw-164 w-1/1 imagesscrollbar" style={{    backgroundColor: 'rgb(255, 240, 233)',boxShadow: 'rgb(243, 207, 219) 0px 3px 0px'}}>
                                    <Image height="40" width="40" class="mb-2" src={require('../assets/images/Popular_course/Screenshot 2024-02-20 132604.png')} style={{width:'33px'}} />
                                    <div class="flex justify-content-between align-items-start">
                                        <div class="" style={{paddingBottom:'10px'}}>JEE Crash</div>
                                        <span class="box-border inline-block" data-testid="">
                                            <svg viewBox="0 0 12 7" class="mr-10 PopularCoursesCard_arrowIcon__1nuOu" xmlns="http://www.w3.org/2000/svg" fill="none" data-testid="" transform="rotate(0) scale(1)" width="10" height="100%" opacity="1">
                                                <path d="M11 1L6.35356 5.64645C6.15829 5.84171 5.84171 5.84171 5.64645 5.64645L1 1" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/*  Navigation end */}









            <div className="styles_homepageContainer__cL6dC">




                {/* Explore_courses section start */}
                <section className="Explore_courses">
                    <div className="FirstFoldAILive_courses__3RxuZ" >
                        <h1>Explore courses<span>(class 3 - 13)</span></h1>
                        <div className="FirstFoldAILive_coursesNew__3-vdo">
                            {
                                [1, 2, 3].map((items) =>
                                    <div className="ExamCourse_exam-preparation-card__3WIyX md:tw-flex" key={items}>
                                        <div className="ExamCourse_exam-prepare-desc__1X_Pc">
                                            <p className="ExamCourse_title__UA5sm">class 3 - 13 </p>
                                            <h3 className="">Competitive Exams</h3>
                                            <div className="ExamCourse_exam-button-list__3deFx"><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">JEE</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">NEET</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">JEE/NEET Foundation</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">EAMCET</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">Olympiad</a></div>
                                            <button type="button" className="Button_button__tSJmD Button_button--medium__2at61      Button_button--primary__1TO8y ExamCourse_primary-btn__TiGNo ExamCourse_explore-cta-ff__GqCje">Explore Courses</button>
                                        </div>
                                        <div className="ExamCourse_exam-prepare-img__1F_tc">
                                            <div className="tw-hidden md:tw-block"><Image loading="lazy" className='explore_imges'
                                                src={require('../assets/images/Explore-courses/92ca55f2-ef3f-4065-81af-cb6f5d46d26f-1682592753417-4102418410874681.png')} alt="exam-course" /></div>
                                            <div className="tw-block md:tw-hidden"><Image loading="lazy" className='explore_imges'
                                                src={require('../assets/images/Explore-courses/92ca55f2-ef3f-4065-81af-cb6f5d46d26f-1682592753417-4102418410874681.png')} alt="exam-course" /></div>
                                        </div>
                                    </div>)
                            }

                        </div>
                    </div>
                </section>
                {/* Explore_courses section end */}


                {/* States Section start*/}
                <section className='states_section'>

                    <div className="card-section">
                        <h3 className="heading3">
                            <Image src={require('../assets/images/states/ranking.svg')} className="sIcon" />States</h3>
                        {/* <p style={{paddingBottom:'20px',textAlign:'center',color: '#666666',fontSize: '14px',lineHeight: '21px';} }>All University updates, Results, Exam Notifications, Question Papers and more..</p> */}

                        <div className="row" style={{ display: 'flex' }}>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
                                <ul className="List-of-University">
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Andhra-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/11"> Andhra University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Nagarjuna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/15"> Acharya Nagarjuna University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Adikavi-Nannaya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1296"> Adikavi Nannaya University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-University-Srikakulam-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1017"> Dr B R Ambedkar University Srikakulam</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-Open-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/13"> Dr B R Ambedkar Open University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Hyderabad-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/42"> Hyderabad University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Anantapur-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/104"> JNTU-Anantapur</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Hyderabad-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/10"> JNTU-Hyderabad</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> JNTU-Kakinada</a></li>
                                </ul>

                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6" style={{ margin: '0 65px' }}>
                                {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
                                <ul className="List-of-University">
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Andhra-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/11"> Andhra University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Nagarjuna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/15"> Acharya Nagarjuna University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Adikavi-Nannaya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1296"> Adikavi Nannaya University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-University-Srikakulam-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1017"> Dr B R Ambedkar University Srikakulam</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-Open-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/13"> Dr B R Ambedkar Open University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Hyderabad-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/42"> Hyderabad University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Anantapur-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/104"> JNTU-Anantapur</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Hyderabad-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/10"> JNTU-Hyderabad</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> JNTU-Kakinada</a></li>
                                </ul>

                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                                {/* <h5 style={{  color: '#737373',fontSize:'14px',paddingBottom:'15px;'}}><span>10th , Inter, Diploma</span></h5> */}
                                <ul className="List-of-University">
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Andhra-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/11"> Andhra University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Nagarjuna-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/15"> Acharya Nagarjuna University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Adikavi-Nannaya-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1296"> Adikavi Nannaya University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-University-Srikakulam-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/1017"> Dr B R Ambedkar University Srikakulam</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Dr-B-R-Ambedkar-Open-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/13"> Dr B R Ambedkar Open University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../Hyderabad-University-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/42"> Hyderabad University</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Anantapur-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/104"> JNTU-Anantapur</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Hyderabad-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/10"> JNTU-Hyderabad</a></li>
                                    <li><Image src={require('../assets/images/states/AU-L.png')} /><a href="../JNTU-Kakinada-Complete-Information-Results-Notifications-Exam-Schedule-QuestionPapers/86"> JNTU-Kakinada</a></li>
                                </ul>

                            </div>

                        </div>
                    </div>
                </section>
                {/* States Section End */}

                {/*  Study material section start */}
                <section className="StudyMaterials_study-slider__196qW">
                    <div className="styles_small-container__2O3eV">
                        <h2 style={{paddingBottom:'0px'}}>Study Materials</h2>
                    </div>
                    <div className="styles_small-container__2O3eV"style={{marginTop:'40px'}} >
                        <Slider className="carousel" {...settings}>

                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_card__1JDBu2 StudyMaterialCard_newLayout__3Dxrk2">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk StudyMaterialCard_card__1JDBu3">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk StudyMaterialCard_card__1JDBu4">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk StudyMaterialCard_card__1JDBu5">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="StudyMaterialCard_card__1JDBu StudyMaterialCard_newLayout__3Dxrk StudyMaterialCard_card__1JDBu6">
                                    <div className="StudyMaterialCard_details-wrapper__1IY-L">
                                        <div className="StudyMaterialCard_card-title__-Ke-f"> Previous year</div>
                                        <div className="StudyMaterialCard_card-subtitle__SJHOj"> question papers</div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </section>
                {/* Study material section end */}

                {/*  Govt Schems Section start */}

                <section className='Govt_schems'>

                    <div className='govt_heading'>
                        <h1 className='categories'>
                            Find schemes based  <br />on categories
                        </h1>
                    </div>

                    <div className='Govt_section_data'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((govtItems) =>
                                    <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={govtItems}>
                                        <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                            <Image src={require('../assets/images/govt-schems-icons/Agriculture.svg')} />
                                        </div>
                                        <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                        <p className='schemes_section content_section'>Agriculture,Rural & Environment</p>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </section>

                {/*  Govt Schems Section end */}


                {/*  Govt Schems Section with category start */}

                <section className="styles_small-container__2O3eV FilterResult_results-container__36Rfi Govt_scholorships Govt_schems">
                    {/* tabs */}
                    <div className="tw-pb-3.5 tw-pt-14 md:tw-py-10 FilterResult_tab-controls-wrapper__3SuCU">
                        <div className="styles_tab-controls__3oB0e tw-flex">
                            <button type="button" className={"Button-normal " + (openTab === 1 ? "Button-normal-active" : "Button-normal")}
                                onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#link1" role="tablist">
                                category</button>
                            <button type="button" className={"Button-normal " + (openTab === 2 ? "Button-normal-active" : "Button-normal")}
                                onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#link2" role="tablist">
                                states</button>
                        </div>
                    </div>
                    <div className='govt_heading'>
                        <h1 className='categories'>
                            Find scholorships based  <br />on categories
                        </h1>
                    </div>

                    <div className={"Govt_section_data " + (openTab === 1 ? "block" : "hidden")} id="link1">
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>

                            {[1, 2, 3, 4, 5, 6].map((itemsdata) =>

                                <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={itemsdata}>
                                    <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                        <Image src={require('../assets/images/govt-schems-icons/Agriculture.svg')} />
                                    </div>
                                    <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                    <p className='schemes_section content_section'>Agriculture,Rural & Environment</p>
                                </div>
                            )}

                        </div>
                    </div>
                    <div className={"Govt_section_data " + (openTab === 2 ? "block" : "hidden")} id="link2">
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>

                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itemsdata) =>

                                <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={itemsdata}>
                                    <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                        <Image src={require('../assets/images/govt-schems-icons/Agriculture.svg')} />
                                    </div>
                                    <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                    <p className='schemes_section content_section'>Agriculture,Rural & Environment</p>
                                </div>
                            )}

                        </div>
                    </div>

                </section>

                {/*  Govt Schems Section category end */}





            </div>





            <div style={{ backgroundColor: '#f0f0f0' }}>
                <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto" style={{ marginTop: '80px' }}>
                    <div className="gap-6 justify-between md:flex">
                        <div className="flex-1">
                            <div className="max-w-xs">
                                {/* <Image  className="w-32" src={footerlogo} style={{width:'100px',height:'100px'}}/> */}
                                <p className="leading-relaxed mt-2 text-[15px]">
                                    Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
                                </p>
                            </div>
                            <form >
                                <label className="block pt-4 pb-2">
                                    Stay up to date
                                </label>
                                <div className="max-w-sm flex items-center border rounded-md p-1">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full p-2.5 outline-none"
                                    />
                                    <button
                                        className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                            {
                                footerNavs.map((item, idx) => (
                                    <ul
                                        className="space-y-4"
                                        key={idx}
                                    >
                                        <h4 className="text-gray-800 font-medium">
                                            {item.label}
                                        </h4>
                                        {
                                            item.items.map(((el, idx) => (
                                                <li key={idx}>
                                                    <a
                                                        href={el.href}
                                                        className="hover:underline hover:text-indigo-600"

                                                    >
                                                        {el.name}
                                                    </a>
                                                </li>
                                            )))
                                        }
                                    </ul>
                                ))
                            }
                        </div>
                    </div>
                    <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                        <div className="mt-4 sm:mt-0">
                            &copy; 2022 Float UI All rights reserved.
                        </div>
                        <div className="mt-6 sm:mt-0">
                            <ul className="flex items-center space-x-4">
                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg className="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                            <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg className="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                            <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg className="svg-icon w-6 h-6 text-blue-500" viewBox="0 0 20 20">
                                            <path fill="none" d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.29-1.175c0.209,0.404,0.405,0.813,0.579,1.236c-2.147,0.805-3.953,2.294-5.177,4.195C4.421,13.143,3.776,11.648,3.776,10 M10,16.224c-1.337,0-2.572-0.426-3.586-1.143c1.079-1.748,2.709-3.119,4.659-3.853c0.483,1.488,0.755,3.071,0.784,4.714C11.271,16.125,10.646,16.224,10,16.224 M13.075,15.407c-0.072-1.577-0.342-3.103-0.806-4.542c0.673-0.154,1.369-0.243,2.087-0.243c0.621,0,1.22,0.085,1.807,0.203C15.902,12.791,14.728,14.465,13.075,15.407 M14.356,9.378c-0.868,0-1.708,0.116-2.515,0.313c-0.188-0.464-0.396-0.917-0.621-1.359c1.294-0.612,2.492-1.387,3.587-2.284c0.798,0.97,1.302,2.187,1.395,3.517C15.602,9.455,14.99,9.378,14.356,9.378"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                                    <a href="javascript:void()">
                                        <svg className="svg-icon w-6 h-6 text-red-600" viewBox="0 0 20 20">
                                            <path fill="none" d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </footer>
            </div>




        </>



    );
}
