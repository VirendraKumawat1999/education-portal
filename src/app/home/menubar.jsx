import React from "react";
import Image from "next/image";

const MenuBar = () =>{
    return (
        <>
            <div className='header_sec'>
                        <nav className="navbar">
                            <a href="#" className="navbar-logo">
                                <Image src={require('../../assets/images/Logo/vedantu-logo.svg')} />
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
                                    {/* <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0" style={{ display: 'flex', left: '-195px', paddingTop: '0px' }}>
                                        <div className='dropdown-left'>
                                            <div className='tryscrollbar'>
                                                {
                                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES firstdrop" key={itemsdata} style={{ marginBottom: '4px' }}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="#">English Superstar</a></div>
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
                                                        <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Find courses by class</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec " style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Repeater</h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 12 <span class="subjectname">Science PCM</span></h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 11 <span class="subjectname">Science PCM</span></h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 10 </h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 9 </h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 8 </h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 7 </h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>class 6 </h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
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
                                                        <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Find courses by target</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec schoolTuition_secontion" style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW " style={{ position: 'relative' }}>
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
                                                           
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option">Courses for Kids
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>
                                        </div>
                                    </a>
                                    {/* <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0">
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="#">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="#">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="#">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Header_vskCard__2IXES">
                                            <div className="Header_vskCardWrapper__2E4mt">
                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                <div className="Header_vskCardDetails__2hUSE">
                                                    <div className="Header_vskheading__2HUQV">
                                                        <a onclick="return false;" href="#">English Superstar</a> <br /><span>Age 4 - 8</span></div>
                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                </div>
                                            </div>
                                        </div>

                                    </div> */}
                                </li>
                                <li className="navbar-dropdown">
                                    <a href="#">
                                        <div className="Header_navLink__1xm71 second_option">Free study material
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="7" viewBox="0 0 11 7" fill="none">
                                                <path d="M 10 1 L 5.5 6 L 1 1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                ></path></svg>
                                        </div>
                                    </a>
                                    {/* <div className="dropdown new ">
                                      
                                        {
                                            [1, 2, 3, 4, 5, 6].map((maindropdown) =>
                                                <a href="#" className='SUb_dropdown subDrop1' id="subDrop" key={maindropdown}>NCERT Solutions
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                                                        <path stroke="#01202B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M1 1l5 4.5L1 10" opacity=".7" fill="none"></path>
                                                    </svg>

                                                    <div className="sub_sub_dropdown testing_dropdown" id="InsidesubDrop">
                                                        {/* inside sub dropdown */}
                                                        {/* {[1, 2, 3, 4, 5].map((dropdown) =>
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


                                    </div> */} 
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
                                    {/* <div className=" dropdown dropdown-menu Header_dropdownMenu__3Wuc6 Header_singleDropdownCol__8O4B0" style={{ display: 'flex', left: '-200px', paddingTop: '0px' }}>
                                        <div className='dropdown-left'>
                                            <div className='tryscrollbar'>
                                                {
                                                    [1, 2, 3, 4, 5, 6].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES" key={itemsdata}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="#">English Superstar</a></div>
                                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                <div className="dropdown-block Header_dropdownBlock__1By9w">
                                                    <div className="dropdown-header Header_dropdownHeader__2NacE tw-flex Header_flex__2Nkvb" style={{ display: 'flex' }}>
                                                        <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Our initiatives</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec">

                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Vedantu Scholarship Admission Test (VSAT)</h4>
                                                            <p>Give an online test to get up to 100% scholarship on Vedantu courses</p>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Vedantu Olympiad Litmus Test (VOLT)</h4>
                                                            <p>Online test to get a chance to prepare free for the international olympiad</p>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Eklavya JEE</h4>
                                                            <p>Get free online coaching from top teachers to crack JEE Advanced exam</p>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Eklavya NEET</h4>
                                                            <p>Get free online coaching from top teachers for NEET exam preparation</p>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
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
                                                        <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px', marginLeft: '13px' }} />
                                                        <div>
                                                            <h3 className='oureInitiative'>Resources</h3>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown-content Header_dropdownContent__3FGsy oureInitiative_sec " style={{ marginLeft: '23px', paddingBottom: '1px' }}>

                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Testimonials</h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>FAQs</h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>Blogs</h4>
                                                        </a>
                                                        <a href="#" target="_blank" className="Header_singleDropdownContent__CyisW">
                                                            <h4>News</h4>
                                                        </a>
                                                    </div>
                                                </div>



                                                {
                                                    [1, 2, 3, 4, 5, 6].map((itemsdata) =>
                                                        <div className="Header_vskCard__2IXES" key={itemsdata}>
                                                            <div className="Header_vskCardWrapper__2E4mt">
                                                                <Image src={require('../../assets/images/courses-Icons/Screenshot 2024-02-19 190416.png')} style={{ width: '42px' }} />
                                                                <div className="Header_vskCardDetails__2hUSE">
                                                                    <div className="Header_vskheading__2HUQV">
                                                                        <a onclick="return false;" href="#">English Superstar</a></div>
                                                                    <div className="Header_vskSubHeading__34A-W">Level based holistic English program</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                }

                                            </div>
                                        </div>
                                    </div> */}
                                </li>
                            </ul>
                            {/* <div className="Header_call_section">
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
                            </div> */}
                        </nav>

            </div>
        </>
    );
}

export default MenuBar;