"use client";

import React from "react";
import SidebarMenu from '../SidebarMenu/sidebarmenu'
import { usePathname} from "next/navigation";
import "../../css/sidebar.scss"
const Dashboard=({ children })=>{
	const PathName=usePathname();

    return (
		<>
		
		<div className="layout has-sidebar fixed-sidebar fixed-header" style={{display: 'grid',gridTemplateColumns:' 1fr 5fr',height:'100%'}}>
						<SidebarMenu/>
						{  (PathName === '/dashboard')
						?
							<h1 >Welcome to the Dashboard</h1> : 
							
							<main>{children}</main>	
						}
					
						{/* style={{    background: '#dee2ec80'}} */}
				</div>
		



			
		</>
	);
}

export default Dashboard ;