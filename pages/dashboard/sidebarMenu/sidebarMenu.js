import { usePathname } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect, useRef } from 'react';
import SidebarMenuObj from "./sidebarMenuObj";
// import sidebarmenucontent from './sidebarmenucontent'


const SidebarMenu = () => {

	// console.log(contentDatafortheroute,"contentDatafortheroutecontentDatafortheroutecontentDatafortheroute")
	// get url path 
	const pathNamev = usePathname();
	// set dropdown menu
	const [openDropdownId, setOpenDropdownId] = useState(null);
	// const router = useRouter();

	// style
	const [isClassAdded, setIsClassAdded] = useState(false)
	//  add class 
	const [isdropdownclassadd, setisdropdownclassadd] = useState(false)
	const ref = useRef(null);
	// const [activeMenu, setActiveMenu] = useState(null);

	const handleDropdownToggle = (id) => setOpenDropdownId(openDropdownId === id ? null : id)
	// Set active menu based on current route on page load
	useEffect(() => {
		SidebarMenuObj.forEach((menu) => {
			menu.dropdownmenu.forEach((item) => {
				if (item.url === pathNamev) {
					setOpenDropdownId(menu.id);
				}
			});
		});
	}, [(usePathname())]);


	useEffect(() => {
		const handleClickOutside = (event) => {
			if (ref.current && !ref.current.contains(event.target)) {
               setIsClassAdded(false); // Set the class to false when clicking outside the div
            }};document.addEventListener('mousedown', handleClickOutside);
		return () => {document.removeEventListener('mousedown', handleClickOutside);};
	}, []);

	const opensidedropdown = () => setisdropdownclassadd(!isdropdownclassadd)
	const handleClickevent = () => {
		if (isClassAdded) {opensidedropdown();}
		setIsClassAdded(!isClassAdded);
	};

	return (
		<>


			<aside ref={ref} id="sidebar" className={`sidebar break-point-sm has-bg-image ${isClassAdded ? 'collapsed' : ''}`}>
				<a id="btn-collapse" className="sidebar-collapser" onClick={handleClickevent}>
					<i className="fa fa-angle-left"></i>
				</a>
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
									{SidebarMenuObj.map((menu) => (
										<li key={menu.id} className={`menu-item sub-menu ${openDropdownId === menu.id ? 'open' : 'close'}`} onClick={() => handleDropdownToggle(menu.id)}>
											<a onClick={opensidedropdown}>
												<span className="menu-icon" >
													<i className={`fa  ${menu.icon}`}></i>
												</span>
												<span className="menu-title">{menu.name}</span>
												
											</a>
											<div className={`sub-menu-list ${openDropdownId === menu.id || isdropdownclassadd ? 'sidebardropdown' : 'containerStyle'} `} style={{ display: openDropdownId === menu.id ? 'block' : 'none', }}>
												{openDropdownId === menu.id && (
													<ul>
														{menu.dropdownmenu.map((item, index) => (
															<li key={index} className="menu-item ">
																<Link href={item.slug}>
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
							</ul>
						</nav>
					</div>

				</div>
			</aside>



		</>
	);
}

export default SidebarMenu;