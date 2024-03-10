import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'

const SidebarNavigation = () =>{

	const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleNotification = () => setIsNotificationOpen(!isNotificationOpen);
    const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);


    return (
        <>
         <nav className=" shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50" style={{background:'#ff693d1c'}}>
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                   

                    {/* <!-- Logo --> */}
                    <Link href="/" passHref>
                        <Link className="flex items-center justify-between mr-4 logo" href="/">
                          <h1 style={{  fontSize: '25px',fontFamily: 'Poppins',color: '#ff693d',fontWeight: 'bold'}}>LOGO</h1>   
                        </Link>
                    </Link>

                    
                </div>


                <div className="flex items-center gap-3 lg:order-2 dashboard-siderbar-icon">
                    {/* <!-- Notification icon --> */}
                    <button
                        type="button"
                        onClick={toggleNotification}
                        className="flex items-center justify-center relative w-9 h-9 rounded-xl  transition-all duration-200"
                    >
                        <span className="absolute flex h-5 w-6 -top-2 -right-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"></span>
                            <span className="number relative flex items-center justify-center rounded-full  text-[9px]">02</span>
                        </span>
                        <i className="text-lg fa fa-regular fa fa-bell"></i>
                    </button>

                  

                    {/* <!-- Setting icon--> */}
                    <button
                        type="button"
                        onClick={toggleSettings}
                        className="flex items-center justify-center relative w-9 h-9 rounded-xl  transition-all duration-200"
                    >
                        <span className="absolute flex h-5 w-6 -top-2 -right-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
                            <span className="number relative flex items-center justify-center rounded-full  text-[9px] ">02</span>
                        </span>
                        <i className="fa fa-solid fa fa-gear text-lg setting"></i>
                    </button>

                    {/* <!-- Setting Dropdown menu --> */}
                    {/* {isSettingsOpen && (
                        <div className="overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="apps-dropdown">
                            <h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Setting</h4>
                            <div className="grid grid-cols-3 gap-4 p-4">
                            </div>
                        </div>
                    )} */}
                    {/* <!-- End of the Setting --> */}

                    {/* <!-- User Profile --> */}
                    <button
                        type="button"
                        onClick={toggleUserMenu}
                        className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg" alt="user photo" />
                    </button>
                   
                   
                    {/* <!-- Dropdown menu --> */}
                    {/* {isUserMenuOpen && (
                        <div className="overflow-hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="dropdown">
                        </div>
                    )} */}
                    {/* <!-- End of the user profile --> */}
                </div>
            </div>
        </nav>
        </>
    )
}


export default SidebarNavigation;