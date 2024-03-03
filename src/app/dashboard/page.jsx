"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";
import SidebarMenu from '../SidebarMenu/sidebarmenu'
import SidebarNavigation from '../SidebarNavigation/sidebarNavigation'

const Dashboard=()=>{

	const router = useRouter();
	const pathName =usePathname();
    return (
		<>
			<div className="w-full h-auto lg:h-screen bg-sitebg">
				<div className="antialiased">
					{/* <!-- Navbar --> */}
						<SidebarNavigation/>
					{/* <!-- End of the Navbar --> */}

					{/* <!-- Sidebar --> */}
						<SidebarMenu/>
					{/* <!-- End of the Sidebar --> */}

					<main className=" lg:px-5  h-auto pt-20 " style={{ marginLeft: '240px' }}>
						<h1 className="form-heading">Add Slider </h1>

						{/*  Slider form */}
						<form>
							<div class="upload-files-container">
								<div class="drag-file-area">
									<span class="material-icons-outlined upload-icon"> file_upload </span>
									
									<label class="label"><span class="browse-files"> <input type="file" class="default-file-input" /> <span class="browse-files-text">browse file</span> <span>from device</span> </span> </label>
								</div>
								<span class="cannot-upload-message"> <span class="material-icons-outlined" style={{paddingRight:'20px'}}>Error :-</span> Please select a file first <span class="material-icons-outlined cancel-alert-button"  style={{paddingLeft:'20px'}}>cancel</span> </span>
								
								<button type="button" class="upload-button"> Upload </button>
							</div>
						</form>
					  {/*  Slider form end */}

						
						
					</main>
				</div>
			</div>
		</>
	);
}

export default Dashboard ;