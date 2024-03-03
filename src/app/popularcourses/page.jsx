"use client";
import React from "react";
import SidebarMenu from '../SidebarMenu/sidebarmenu'
import SidebarNavigation from '../SidebarNavigation/sidebarNavigation'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const popularcourses =() =>{
    return (<>
    <div className="w-full h-auto lg:h-screen bg-sitebg">
				<div className="antialiased">
					{/* <!-- Navbar --> */}
						<SidebarNavigation/>
					{/* <!-- End of the Navbar --> */}

					{/* <!-- Sidebar --> */}
						<SidebarMenu/>
					{/* <!-- End of the Sidebar --> */}

            <main className=" lg:px-5  h-auto pt-20 " style={{ marginLeft: '240px' }}>
                <div className="Popularcourse">
                                <h1 className="form-heading">Popular Courses </h1>
                                    <form >
                                        {/* onSubmit={handleSubmit} */}
                                        <div>
                                            <div className="labelName">
                                                <label htmlFor="email">Upload SVG Image :</label>
                                            </div>
                                            <div className="field-name">
                                            <input type="file" name="file" id="file" class="file"/>

                                                </div>
                                        </div>
                                        <div>
                                            <div className="labelName">
                                                <label htmlFor="email">Course Name:</label>
                                            </div>
                                            <div className="field-name">
                                                <input type="text" id="text" required />
                                                    </div>
                                        </div>

                                        <div className="text-center">
                                        <button type="button" class="upload-button"> Submit </button>
                                        </div>
                                    </form>
                </div>
            </main>
            </div>
			</div>
    </>)
}

export default popularcourses;