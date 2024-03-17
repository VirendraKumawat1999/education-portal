import React from "react";
import Image from "next/image";
import StateComponent from './state'

const ScholorshipsComponent = () =>{

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
                                States</button>
                        </div>
                    </div>
                    <div className='govt_heading'>
                        <h1 className='categories'>
                        scholorships
                            {/* Find scholorships based  <br />on categories */}
                        </h1>
                    </div>

                    <div className={"Govt_section_data " + (openTab === 1 ? "block" : "hidden")} id="link1">
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 md:gap-x-10 gap-y-6 '>

                            {categoryTabs.map((item, idx) =>

                                <div className="govt_group group cursor-pointer" title="Agriculture,Rural &amp; Environment" key={idx}>
                                    <div style={{ marginBottom: '24px' }} className='govt_icons transition ease-in-out group-hover:animate-bounceOnce block relative text-sky-500 text-2xl leading-none p-4 z-0 after:absolute after:content[] after:bottom-0 after:left-0 after:w-[110%] after:h-2/5 after:bg-sky-50 after:dark:bg-gray-800 after:rounded-50% after:-rotate-12 after:-z-1 '>
                                        <Image src={require('../../public/assets/images/govt-schems-icons/Agriculture.svg')} alt="" />
                                    </div>
                                    <a className='schemes_section text-sm md:text-base text-green-600 dark:text-green-500 leading-none group-hover:text-green-400 pt-3 pb-1.5 m-0 transition-all ease-in-out font-mono'>230 Schemes</a>
                                    <p className='schemes_section content_section'>{item.name}</p>
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
                        <StateComponent />
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
}

export default ScholorshipsComponent;