import React from "react";
import Home from './home/home'
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
export default function page() {
    
    // const router = useRouter();
    // const {slug} = router.push;



    return (

        <>
        
            {/* <DashboardComponent/> */}
            
            <Home/>
        </>



    );
}
