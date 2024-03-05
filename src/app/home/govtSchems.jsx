import React from "react";
import Image from 'next/image';
import StateComponent from './state'


const GovtSchemsComponent = () => {

    const [openTab, setOpenTab] = React.useState(1);
    const categoryTabs = [

        {
            href: 'javascript:void()',
            name: 'School'
        },
        {
            href: 'javascript:void()',
            name: 'Undergraduate'
        },
        {
            href: 'javascript:void()',
            name: 'Postgraduate'
        },
        {
            href: 'javascript:void()',
            name: 'Higher Studies & Research'
        },
        {
            href: 'javascript:void()',
            name: 'National'
        },
        {
            href: 'javascript:void()',
            name: 'State-Specific'
        },
        {
            href: 'javascript:void()',
            name: 'International'
        },

    ]

    const centralMinistries = [
        { name: 'Agriculture,Rural & Environment' },
        { name: 'Ministry Of Agriculture and Farmers Welfare' },
        { name: 'Ministry Of Chemicals And Fertilizers' },
        { name: 'Ministry Of Commerce And Industry' },
        { name: 'Ministry Of Communication' },
        { name: 'Ministry Of Consumer Affairs, Food And Public Distribution' },
        { name: 'Ministry of Corporate Affairs' },
        { name: 'Ministry Of Culture' },
        { name: 'Ministry Of Defence' },
        { name: 'Ministry Of Development Of North Eastern Region' },
        { name: 'Ministry of Education' },
        { name: 'Ministry of Electronics and Information Technology' },
        { name: 'Ministry Of Environment,forests and climate change' },
        { name: 'Ministry Of External Affairs' },
        { name: 'Ministry Of Finance' }
    ];


    return (
        <>
            <section className="styles_small-container__2O3eV FilterResult_results-container__36Rfi Govt_scholorships Govt_schems">
                {/* tabs */}
                <div className="tw-pb-3.5 tw-pt-14 md:tw-py-10 FilterResult_tab-controls-wrapper__3SuCU">
                    <div className="styles_tab-controls__3oB0e tw-flex">
                        <button type="button" className={"Button-normal " + (openTab === 1 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#link1" role="tablist">
                            Category</button>
                        <button type="button" className={"Button-normal " + (openTab === 2 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#link2" role="tablist">
                            States / UTs</button>
                        <button type="button" className={"Button-normal " + (openTab === 3 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#link3" role="tablist">
                            Central Ministries</button>
                    </div>
                </div>
                

                <div className={"Govt_section_data " + (openTab === 1 ? "block" : "hidden")} id="link1">
                <div className='govt_heading'>
                    <h1 className='categories'>
                        Find schemes based  <br />on categories
                    </h1>
                </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itemsdata) =>

                            <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={itemsdata}>
                                <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                    <Image src={require('../../assets/images/govt-schems-icons/Agriculture.svg')} />
                                </div>
                                <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                <p className='schemes_section content_section'>Agriculture,Rural & Environment</p>
                            </div>
                        )}

                    </div>
                </div>
                <div className={"Govt_section_data " + (openTab === 2 ? "block" : "hidden")} id="link2">
                    {/* <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>

                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((itemsdata) =>

                            <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={itemsdata}>
                                <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                    <Image src={require('../../assets/images/govt-schems-icons/Agriculture.svg')} />
                                </div>
                                <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                <p className='schemes_section content_section'>Agriculture,Rural & Environment</p>
                            </div>
                        )}

                    </div> */}
                    <div className='govt_heading'>
                    <h1 className='categories'>
                    Explore schemes of <br/> States/UTs
                    </h1>
                </div>
                    <StateComponent />
                    <div className="viewallButton">
                        <a class="mt-6 text-center justify-center flex  normal-case " >
                            <button aria-label="View All" class=" flex items-center px-4 py-2 text-sm  rounded-md    border border-solid !bg-transparent text-secondary hover:text-primary border-primary hover:border-primary  green   transition ease-in-out font-medium leading-none  
                        " title="" style={{ borderColor: '#ff693d', color: '#ff693d' }}>View All<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="ml-2 inline-block   w-6 h-6 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ff693d' }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button></a>
                    </div>
                </div>


                <div className={"Govt_section_data " + (openTab === 3 ? "block" : "hidden")} id="link3">
                <div className='govt_heading'>
                    <h1 className='categories'>
                    Explore schemes of <br/>Central Schemes
                    </h1>
                </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 mt-4'>

                        {centralMinistries.map((itemsdata, index) =>

                            <div className="group min-h-[6rem] md:min-h-[6.5rem]  py-3 md:py-3 px-3 text-left md:px-2 rounded-lg bg-white  shadow hover:shadow-md relative overflow-hidden cursor-pointer group transition-all ease-in-out duration-500 w-full
                                " title={itemsdata.name} key={index}>
                                <div style={{ marginBottom: '24px', borderLeftColor: 'green' }} className='border-0 border-l-2 h-full border-solid border-gray-200 dark:border-l-gray-700 z-0 px-4 relative before:absolute before:top-0 before:left-[-2px] before:h-[55%] before:w-[2px] before:bg-green-700 dark:before:bg-white before:z-10 '>
                                    <div className="py-2">
                                        <h2 className="  transition-all ease-in-out duration-500 group-hover:text-black-700 dark:text-black dark:group-hover:text-black font-semibold text-sm line-clamp-1 sm:line-clamp-2">{itemsdata.name}</h2></div>
                                    <div className="flex flex-row items-start">
                                        <p className="transition-all ease-in-out duration-500 text-black-500 text-sm group-hover:text-green-700 dark:text-black-300 dark:group-hover:text-black mt-2 mb-0 pb-3">1 Schemes</p></div>
                                    <div className="absolute -right-1 bottom-0 z-10 h-11 w-11 opacity-20 dark:opacity-60 "><span

                                        style={{
                                            boxSizing: 'border-box',
                                            display: 'block',
                                            overflow: 'hidden',
                                            width: 'initial',
                                            height: 'initial',
                                            background: 'none',
                                            opacity: 1,
                                            border: '0px',
                                            margin: '0px',
                                            padding: '0px',
                                            position: 'absolute',
                                            inset: 0
                                        }}
                                    >
                                        <img alt="Comptroller And Auditor General Of India" decoding="async" data-nimg="fill" className="border-0 " srcset="https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 640w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 750w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 828w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 1080w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 1200w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 1920w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 2048w, https://cdn.myscheme.in/images/ministries/vectors/dark/Comptroller.svg 3840w" sizes="100vw" style={{
                                            position: 'absolute',
                                            inset: 0,
                                            boxSizing: 'border-box',
                                            padding: 0,
                                            border: 'none',
                                            margin: 'auto',
                                            display: 'block',
                                            width: 0,
                                            height: 0,
                                            minWidth: '100%',
                                            maxWidth: '100%',
                                            minHeight: '100%',
                                            maxHeight: '100%'
                                        }} /></span></div>
                                </div>

                            </div>
                        )}

                    </div>

                    <div className="viewallButton">
                        <a class="mt-6 text-center justify-center flex  normal-case " >
                            <button aria-label="View All" class=" flex items-center px-4 py-2 text-sm  rounded-md    border border-solid !bg-transparent text-secondary hover:text-primary border-primary hover:border-primary  green   transition ease-in-out font-medium leading-none  
                        " title="" style={{ borderColor: '#ff693d', color: '#ff693d' }}>View All<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="ml-2 inline-block   w-6 h-6 " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ color: '#ff693d' }}>
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </button></a>
                    </div>
                </div>






            </section>

        </>
    );
};










export default GovtSchemsComponent;