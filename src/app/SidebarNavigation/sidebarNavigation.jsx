import Image from "next/image";
import Link from "next/link";

const SidebarNavigation = () =>{
    return (
        <>
            					<nav className="bg-white shadow-sm px-4 py-3 fixed left-0 right-0 top-0 z-50">
						<div className="flex flex-wrap justify-between items-center">
							<div className="flex justify-start items-center">
								<button data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" className="p-2 mr-2 text-acent1 rounded-lg cursor-pointer lg:hidden hover:bg-bgLight focus:bg-bgLight focus:ring-2 focus:ring-acent1">
									<svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
									</svg>
									<span className="sr-only">Toggle sidebar</span>
								</button>

								{/* <!-- Logo --> */}
								<Link href="/" className="flex items-center justify-between mr-4 logo">
									<Image src={require('../../assets/images/Logo/vedantu-logo.svg')} />

									{/* <span className="self-center text-2xl font-semibold whitespace-nowrap">Enjam</span> */}
									{/* <!-- Institute Short Name--> */}
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
								<button type="button" data-dropdown-toggle="notification-dropdown" className="flex items-center justify-center relative w-9 h-9 rounded-xl  transition-all duration-200">
									<span className="absolute flex h-5 w-6 -top-2 -right-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75"></span>
										<span className="number relative flex items-center justify-center rounded-full  text-[9px]">02</span>
									</span>
									<i className="text-lg fa fa-regular fa fa-bell"></i>
								</button>

								{/* <!-- Notification Dropdown menu --> */}
								<div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" id="notification-dropdown">
									<h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Notifications</h4>
									<div>
										<a href="#" className="flex py-3 px-4 border-b border-gray-300 hover:bg-bgLight">
											<div className="flex-shrink-0">
												<Image className="w-11 h-11 rounded-full object-cover" src={require('../../assets/images/courses-Icons/coding-classes.svg')} alt="Rubel Islam" />
											</div>
											<div className="pl-3 w-full">
												<div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
													New message from
													<span className="font-semibold text-gray">Lorem Ipsum </span>: "Lorem Ipsum has been the industry's standard dummy."
												</div>
												<div className="text-xs font-medium text-primary">a few moments ago</div>
											</div>
										</a>

									</div>
									<a href="#" className="block py-2 text-md font-medium text-center text-white bg-acent1 hover:bg-secondary">
										<div className="inline-flex items-center">
											<i className="fa-solid fa-eye mr-2 text-lg text-white"></i>
											View all
										</div>
									</a>
								</div>
								{/* <!-- End of the Notification --> */}

								{/* <!-- Setting --> */}
								<button type="button" data-dropdown-toggle="apps-dropdown" className="flex items-center justify-center relative w-9 h-9 rounded-xl  transition-all duration-200">
									<span className="absolute flex h-5 w-6 -top-2 -right-3">
										<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"></span>
										<span className="number relative flex items-center justify-center rounded-full  text-[9px] ">02</span>
									</span>
									<i className="fa fa-solid fa fa-gear text-lg setting"></i>
								</button>

								{/* <!-- Setting Dropdown menu --> */}
								<div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="apps-dropdown">
									<h4 className="block py-2 px-4 text-base font-medium text-center text-white bg-acent1">Setting</h4>
									<div className="grid grid-cols-3 gap-4 p-4">
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-graduation-cap text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Student</div>
										</a>
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-chalkboard-user text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Teacher</div>
										</a>
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-users text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Staff</div>
										</a>
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-circle-user text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Profile</div>
										</a>
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-gear text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Settings</div>
										</a>
										<a href="#" className="block p-4 text-center rounded-lg hover:bg-bgLight transition-all">
											<i className="fa-solid fa-chart-simple text-xl text-acent1"></i>
											<div className="text-sm text-gray-900">Analysis</div>
										</a>
									</div>
								</div>
								{/* <!-- End of the Setting --> */}

								{/* <!-- User Profile --> */}
								<button type="button" className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
									<span className="sr-only">Open user menu</span>
									<img className="w-8 h-8 rounded-full object-cover" src="https://cdn.pixabay.com/photo/2015/04/13/12/07/business-720429_1280.jpg" alt="user photo" />
								</button>
								{/* <!-- Dropdown menu --> */}
								<div className="hidden z-50 my-4 w-56 text-base list-none bg-white divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 rounded-xl" id="dropdown">
									<div className="py-3 px-4">
										<span className="block text-sm font-semibold text-gray-900">Adnan Kabir</span>
										<span className="block text-sm text-gray-900 truncate">Admin</span>
									</div>
									<ul className="py-1 text-gray-700" aria-labelledby="dropdown">
										<li>
											<a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">My profile</a>
										</li>
										<li>
											<a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">Account settings</a>
										</li>
									</ul>
									<ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
										<li>
											<a href="#" className="flex items-center py-2 px-4 text-sm hover:bg-bgLight"><svg className="mr-2 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
												<path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
											</svg>
												Shedule</a>
										</li>
										<li>
											<a href="#" className="flex justify-between items-center py-2 px-4 text-sm hover:bg-bgLight">
												<span className="flex items-center">
													<i className="fa-solid fa-dollar-sign mr-2 text-md text-primary-600 dark:text-primary-500"></i>
													Payments
												</span>
												<i className="fa-solid fa-chevron-right text-base text-gray-400"></i>
											</a>
										</li>
									</ul>
									<ul className="py-1 text-gray-700 dark:text-gray-300" aria-labelledby="dropdown">
										<li>
											<a href="#" className="block py-2 px-4 text-sm hover:bg-bgLight">Log out</a>
										</li>
									</ul>
								</div>
								{/* <!-- End of the user profile --> */}
							</div>

						</div>
					</nav>
        </>
    )
}


export default SidebarNavigation;