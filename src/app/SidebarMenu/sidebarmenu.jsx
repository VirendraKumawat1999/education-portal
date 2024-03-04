import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarMenu =() =>{

    // const router = useRouter();
	const pathName =usePathname();
	console.log(pathName,"pathName")
    return (
        <>
                   <aside className="dashboard scrollbar fixed top-0 left-0 z-40 w-72 lg:w-56 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 lg:translate-x-0" aria-label="Sidenav" id="drawer-navigation">
						<div className="dashboard-sidebar overflow-y-auto py-5 px-3 h-full bg-white">


							{/* <!-- Menu (It's for Lablet and Desktop) --> */}
							<ul className="hidden lg:inline ">
								<li  className={pathName.startsWith("/"+'dashboard') ? "active" : "deactive"}>
								<Link href="/dashboard"  className='flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75'>

										<i className="fa fa-sliders text-lg text-acent1  transition duration-75" aria-hidden="true"></i>
										<span className="ml-3" style={{ marginLeft: '19px' }}>Home Slider</span>
									</Link>
								</li>
								<li  className={pathName.startsWith("/"+'popularcourses') ? "active" : "deactive"}>
								
									<Link href="/popularcourses" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">

										<i className="fa fa-graduation-cap text-lg text-acent1  transition duration-75" aria-hidden="true"></i>
										<span className="flex-1 ml-3 text-left whitespace-nowrap">Popular Courses</span>
									</Link>
								
								</li>
								<li>
									<a href="student.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
										<i className="fa fa-solid fa fa-graduation-cap text-lg text-acent1 transition duration-75 "></i>
										<span className="flex-1 ml-3 text-left whitespace-nowrap">Explore courses</span>
									</a>
								</li>
								<li>
									<a href="attendance.html" type="button" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
										<i className="fa fa-globe text-lg text-acent1 transition duration-75 "></i>
										<span className="flex-1 ml-3 text-left whitespace-nowrap" style={{ marginLeft: '19px' }}>States</span>
									</a>
								</li>

								<li>
									<a href="exam.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
										<i className="fa fa-graduation-cap text-lg text-acent1 transition duration-75 "></i>
										<span className="flex-1 ml-3 text-left whitespace-nowrap">Study Materials</span>
									</a>
								</li>
								<li>
									<a href="subject.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
										<i className="fa fa-graduation-cap text-lg text-acent1 transition duration-75 "></i>
										<span className="ml-3">Find schemes</span>
									</a>
								</li>
								<li>
									<a href="result.html" className="flex items-center p-2 w-full text-base font-medium text-primary rounded-lg transition duration-75 group hover:bg-acent1">
										<i className="fa fa-graduation-cap text-lg text-acent1 transition duration-75 "></i>
										<span className="flex-1 ml-3 text-left whitespace-nowrap">Find scholorships </span>
									</a>
								</li>

								<li>
									<a href="setting.html" className="flex items-center p-2 text-base font-medium text-primary rounded-lg hover:bg-acent1 group transition duration-75">
										<i className="fa fa-sliders text-lg text-acent1 transition duration-75 "></i>
										<span className="ml-3">Setting</span>
									</a>
								</li>
							</ul>
						</div>
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
					</aside>
        </>
    );
}

export default SidebarMenu;