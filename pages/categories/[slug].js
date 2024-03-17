
import SidebarMenu from "../dashboard/sidebarMenu/sidebarMenu"
import Router, { useRouter } from "next/router"
import Table from "./table";

export default function categories(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router =useRouter();
    const SlugName  = router.query;
    console.log(SlugName,"SlugName")

    return (<>
        <div className="layout has-sidebar fixed-sidebar fixed-header" style={{display: 'grid',gridTemplateColumns:' 1fr 5fr',height:'100vh'}}>
           <SidebarMenu/> 
                <Table slug={SlugName}/>	
       </div>
            
    </>)
}