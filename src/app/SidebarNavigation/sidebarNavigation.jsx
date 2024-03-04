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
            					 <nav className="bg-white shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-start items-center">
                    <button
                        data-drawer-target="drawer-navigation"
                        data-drawer-toggle="drawer-navigation"
                        aria-controls="drawer-navigation"
                        className="p-2 mr-2 text-acent1 rounded-lg cursor-pointer lg:hidden hover:bg-bgLight focus:bg-bgLight focus:ring-2 focus:ring-acent1"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="sr-only">Toggle sidebar</span>
                    </button>

                    {/* <!-- Logo --> */}
                    <Link href="/" passHref>
                        <Link className="flex items-center justify-between mr-4 logo" href="/">
                            <Image src={require('../../assets/images/Logo/vedantu-logo.svg')} alt="" />
                            {/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Enjam</span> */}
                            {/* <!-- Institute Short Name--> */}
                        </Link>
                    </Link>

                    {/* <!-- Tab Name --> */}
                    {/* <h4 className="hidden lg:block text-base lg:text-2xl font-medium text-primary ml-5">Dashboard</h4> */}
                </div>

                {/* <!-- Institute Name --> */}
                <div className="hidden lg:inline">
                    <h1 className="text-xl md:text-3xl lg:text-5xl font-medium text-primary"></h1>
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

                    {/* <!-- Notification Dropdown menu --> */}
                    {isNotificationOpen && (
                        <div className="overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" id="notification-dropdown">
                            <h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Notifications</h4>
                            <div>
                                <Link href="/" className="flex py-3 px-4 border-b border-gray-300 hover:bg-bgLight">
                                    <div className="flex-shrink-0">
                                        <Image className="w-11 h-11 rounded-full object-cover" src={require('../../assets/images/courses-Icons/coding-classes.svg')} alt="Rubel Islam" />
                                    </div>
                                    <div className="pl-3 w-full">
                                        <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
                                            New message from <span className="font-semibold text-gray">Lorem Ipsum</span>: Lorem Ipsum has been the industry's standard dummy.
                                        </div>
                                        <div className="text-xs font-medium text-primary">a few moments ago</div>
                                    </div>
                                </Link>
                            </div>
                            <Link href="/" className="block py-2 text-md font-medium text-center text-white bg-acent1 hover:bg-secondary">
                                <div className="inline-flex items-center">
                                    <i className="fa-solid fa-eye mr-2 text-lg text-white"></i>
                                    View all
                                </div>
                            </Link>
                        </div>
                    )}
                    {/* <!-- End of the Notification --> */}

                    {/* <!-- Setting --> */}
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
                    {isSettingsOpen && (
                        <div className="overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="apps-dropdown">
                            <h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Setting</h4>
                            <div className="grid grid-cols-3 gap-4 p-4">
                                {/* Menu items */}
                            </div>
                        </div>
                    )}
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
                    {isUserMenuOpen && (
                        <div className="overflow-hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="dropdown">
                            {/* Menu items */}
                        </div>
                    )}
                    {/* <!-- End of the user profile --> */}
                </div>
            </div>
        </nav>
        </>
    )
}


export default SidebarNavigation;