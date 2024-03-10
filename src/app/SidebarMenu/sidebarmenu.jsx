import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect,useRef } from 'react';
// import "../../css/dashboard.sccs"
const SidebarMenu = ({ isVisible }) => {


	const Dashboardmenu = [
		{
			id: 1,
			name: 'Settings',
			icon: '',
			dropdownmenu: [
				{
					name: 'Home page settings',
					icons: '',
					url: '/settings/homepagesettings',
				},
				{
					name: 'General settings',
					icons: '',
					url: '/settings/generalsettings',
				}
			],
		},
		{
			id: 2,
			name: 'Categories',
			icon: '',
			dropdownmenu: [
				{
					name: 'Jobs',
					icons: '',
					url: '/categories/jobs',
				},
				{
					name: 'Study materials',
					icons: '',
					url: '/categories/studymaterials',
				},
				{
					name: 'Previous years question papers',
					icons: '',
					url: '/categories/previousyearsquestionpaper',
				},
				{
					name: 'Exams',
					icons: '',
					url: '/categories/exams',
				},
				{
					name: 'Exam Results',
					icons: '',
					url: '/categories/examresults',
				},
				{
					name: 'Scholarships',
					icons: '',
					url: '/categories/scholarships',
				},
				{
					name: 'Govt Schemes',
					icons: '',
					url: '/categories/govtschems',
				},
				{
					name: 'Question papers',
					icons: '',
					url: '/categories/questionpapers',

				},
				{
					name: 'E books',
					icons: '',
					url: '/categories/ebooks',

				},
				{
					name: 'Notifications',
					icons: '',
					url: '/categories/notifications',

				}
			],
		},
		{
			id: 3,
			name: 'Articles',
			icon: '',
			dropdownmenu: [
				{
					name: 'ALL',
					icons: '',
					url: '/articles/all',

				},
				{
					name: 'Add',
					icons: '',
					url: '/articles/add',

				}
			],
		},
		{
			id: 4,
			name: 'Menu',
			icon: '',
			dropdownmenu: [],
		},
	];

	const router = useRouter();
	const pathNamev = usePathname();
	const [openDropdownId, setOpenDropdownId] = useState(null);
	// const [activeMenu, setActiveMenu] = useState(null);

	const handleDropdownToggle = (id) => {
		setOpenDropdownId(openDropdownId === id ? null : id);
	};
	// Set active menu based on current route on page load
	console.log(usePathname(), "routerrouter.pathname")
	useEffect(() => {
		// const currentRoute =router.pathName;

		Dashboardmenu.forEach((menu) => {
			menu.dropdownmenu.forEach((item) => {
				if (item.url === pathNamev) {
					console.log("fgfdgfgdfgd")
					setOpenDropdownId(menu.id);
				}
			});
		});
	}, [(usePathname())]);

	// const router = useRouter();
	const pathName = usePathname();

	// style
	const [isClassAdded, setIsClassAdded] = useState(false)
	const [isdropdownclassadd, setisdropdownclassadd] = useState(false)
	const ref = useRef(null);
	useEffect(() => {
		const handleClickOutside = (event) => {
		  if (ref.current && !ref.current.contains(event.target)) {
			setIsClassAdded(false); // Set the class to false when clicking outside the div
		  }
		};
	
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
		  document.removeEventListener('mousedown', handleClickOutside);
		  
		};
	  }, []);

	  const opensidedropdown =()=>{
		setisdropdownclassadd(!isdropdownclassadd)
	  }
	const handleClickevent = () => {
		if(isClassAdded)
		{
			  opensidedropdown();
		}
		setIsClassAdded(!isClassAdded);
		
	  };
	  
	return (
		<>

			
				<aside ref={ref} id="sidebar" className={`sidebar break-point-sm has-bg-image ${isClassAdded ? 'collapsed' : ''}`}>
					<a id="btn-collapse" className="sidebar-collapser" onClick={handleClickevent}>
				      	<i className="fa fa-angle-left"></i>
					</a>
					{/* <div className="image-wrapper">
						<img src="assets/images/sidebar-bg.jpg" alt="sidebar background" />
					</div> */}
					<div className="sidebar-layout">
						<div className="sidebar-header">
							<div className="pro-sidebar-logo">
								<div>L</div>
								<h5>LOGO</h5>
							</div>
						</div>
						<div className="sidebar-content">
							<nav className="menu open-current-submenu">
								<ul>
									<li className="menu-header"><span> GENERAL </span></li>
									
									<>
									{Dashboardmenu.map((menu) => (
									<li key={menu.id} className={`menu-item sub-menu ${openDropdownId === menu.id ? 'open' : 'close'}`}  onClick={() => handleDropdownToggle(menu.id)}>
										<a onClick={opensidedropdown}>
											<span className="menu-icon" >
												<i className="fa fa-diamond"></i>
											</span>
											<span className="menu-title">{menu.name}</span>
											<span className="menu-suffix">
												<span className="badge primary">Hot</span>
											</span>
										</a>
										<div className={`sub-menu-list ${openDropdownId === menu.id || isdropdownclassadd ? 'sidebardropdown' : 'containerStyle'} `} style={{display:openDropdownId === menu.id ? 'block' : 'none' , }}>
										{openDropdownId === menu.id && (
											<ul>
											{menu.dropdownmenu.map((item, index) => (
												<li key={index} className="menu-item ">
												<Link href={item.url}>
														<span className={`menu-title ${openDropdownId === menu.id ? 'colorchange' : ''}`}>{item.name}</span>
												</Link>
												</li>
												))}
											</ul>
											)}
										</div>
									</li>
									))}
									</>
									
									
									<li className="menu-header" style={{ paddingTop: '20px' }}><span> EXTRA </span></li>
									<li className="menu-item">
										<a href="#">
											<span className="menu-icon">
												<i className="ri-book-2-fill"></i>
											</span>
											<span className="menu-title">Documentation</span>
											<span className="menu-suffix">
												<span className="badge secondary">Beta</span>
											</span>
										</a>
									</li>
									<li className="menu-item">
										<a href="#">
											<span className="menu-icon">
												<i className="ri-calendar-fill"></i>
											</span>
											<span className="menu-title">Calendar</span>
										</a>
									</li>
									
								</ul>
							</nav>
						</div>

					</div>
				</aside>

		
			{/* bottom sidebar icons */}
			{/* <div class="bottom-siderbar-icons hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white z-20">
							<a href="setting.html" data-tooltip-target="tooltip-settings" class="inline-flex w-9 h-9 justify-center items-center ">
								<i class="fa fa-solid fa fa-gear text-md"></i>
							</a>
							<div id="tooltip-settings" role="tooltip" class="inline-block  invisible z-10 py-2 px-3  opacity-0 transition-opacity duration-300 tooltip">
								Settings page
								<div class="tooltip-arrow" data-popper-arrow></div>
							</div>
							<a href="#" data-tooltip-target="tooltip-tutorial" class="inline-flex w-9 h-9 justify-center items-center ">
								<i class="fa fa-video-camera text-md"></i>
							</a>
							<div id="tooltip-tutorial" role="tooltip" class="inline-block  invisible z-10 py-2 px-3  opacity-0 transition-opacity duration-300 tooltip">
								Tutorials
								<div class="tooltip-arrow" data-popper-arrow></div>
							</div>
							<a href="#" data-tooltip-target="tooltip-support" class="inline-flex w-9 h-9 justify-center items-center ">
								<i class="fa fa-headphones text-md"></i>
							</a>
							<div id="tooltip-support" role="tooltip" class="inline-block  invisible z-10 py-2 px-3  opacity-0 transition-opacity duration-300 tooltip">
								Support
								<div class="tooltip-arrow" data-popper-arrow></div>
							</div>
						</div> */}




		</>
	);
}

export default SidebarMenu;