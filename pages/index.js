import Image from "next/image";
import { Inter } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  Calling component 
import Footercomponent from './home/footer';
import ExploreCourseComponent from './home/exploreCourse';
import StudyMaterialComponent from './home/studyMaterial'
import StateComponent from './home/state'
import GovtSchemsComponent from './home/govtSchems'
import ScholorshipsComponent from './home/scholorshipsCat'
import HeaderComponent from './home/header'
import MenuBar from './home/menubar';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    {/*  Navigation start*/}
<section className='Section-first'>
<div className='top_sec'>

<MenuBar/>
<HeaderComponent/>


</div>
</section>
{/*  Navigation end */}

<section className="styles_homepageContainer__cL6dC">

<StateComponent />
<ExploreCourseComponent />
<StudyMaterialComponent />
<GovtSchemsComponent />
<ScholorshipsComponent />
</section>




{/* Footer start*/}
<Footercomponent />
{/* Footer End */}



</>

  );
}
