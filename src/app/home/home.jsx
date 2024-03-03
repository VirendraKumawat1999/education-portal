'use client'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';


//  Calling component 
import Footercomponent from './footer';
import ExploreCourseComponent from './exploreCourse';
import StudyMaterialComponent from './studyMaterial'
import StateComponent from './state'
import GovtSchemsComponent from './govtSchems'
import ScholorshipsComponent from './scholorshipsCategories'
import HeaderComponent from './header'
import MenuBar from './menubar';


const Home= ()=>{
    return (
        <>
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
        </>
    );
}

export default Home;