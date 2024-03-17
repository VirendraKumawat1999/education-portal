import React from "react";
import SidebarMenu from './sidebarMenu/sidebarMenu'
import { usePathname} from "next/navigation";


const  Dashboard = () => {
    const PathName=usePathname();

    return (
        <>
            <div className="layout has-sidebar fixed-sidebar fixed-header" style={{display: 'grid',gridTemplateColumns:' 1fr 5fr',height:'100vh'}}>
                <SidebarMenu/>
                    <h1 >Welcome to the Dashboard</h1> 	
            </div>
        </>

    );
}


export default Dashboard ;