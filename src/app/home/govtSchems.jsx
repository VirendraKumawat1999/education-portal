import React from "react";
import Image from 'next/image'


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


    return (
        <>
            <section className="styles_small-container__2O3eV FilterResult_results-container__36Rfi Govt_scholorships Govt_schems">
                {/* tabs */}
                <div className="tw-pb-3.5 tw-pt-14 md:tw-py-10 FilterResult_tab-controls-wrapper__3SuCU">
                    <div className="styles_tab-controls__3oB0e tw-flex">
                        <button type="button" className={"Button-normal " + (openTab === 1 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(1); }} data-toggle="tab" href="#link1" role="tablist">
                            category</button>
                        <button type="button" className={"Button-normal " + (openTab === 2 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(2); }} data-toggle="tab" href="#link2" role="tablist">
                            states / UTs</button>
                        <button type="button" className={"Button-normal " + (openTab === 3 ? "Button-normal-active" : "Button-normal")}
                            onClick={e => { e.preventDefault(); setOpenTab(3); }} data-toggle="tab" href="#link3" role="tablist">
                            Central Ministries</button>
                    </div>
                </div>
                <div className='govt_heading'>
                    <h1 className='categories'>
                        Find schemes based  <br />on categories
                    </h1>
                </div>

                <div className={"Govt_section_data " + (openTab === 1 ? "block" : "hidden")} id="link1">
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
                <div className={"Govt_section_data " + (openTab === 3 ? "block" : "hidden")} id="link3">
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

            </section>

        </>
    );
};

export default GovtSchemsComponent;