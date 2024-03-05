import React from "react";
import Image from 'next/image'
const ExploreCourseComponent = () => {

    const Exams = [
        {
            name:" Board Exams",
        },
        {
            name:"Competitive Exams",
        },
        {
            name:"Govt Exams",
        },
    ]

    return (
<>


        <section className="Explore_courses">
            <div className="FirstFoldAILive_courses__3RxuZ" >
                <h1>Exams</h1>
                <div className="FirstFoldAILive_coursesNew__3-vdo">
                    {
                        Exams.map((items , idx) =>
                            <div className="ExamCourse_exam-preparation-card__3WIyX md:tw-flex" key={idx}>
                                <div className="ExamCourse_exam-prepare-desc__1X_Pc">
                                    <p className="ExamCourse_title__UA5sm">class 3 - 13 </p>
                                    <h3 className="">{items.name}</h3>
                                    <div className="ExamCourse_exam-button-list__3deFx"><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">JEE</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">NEET</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">JEE/NEET Foundation</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">EAMCET</a><a href="#!" className="Button_button__tSJmD Button_button--small__17kTZ    Button_button--no-transition__176Hp  Button_button--secondary__1uvV5 false">Olympiad</a></div>
                                    <button type="button" className="Button_button__tSJmD Button_button--medium__2at61      Button_button--primary__1TO8y ExamCourse_primary-btn__TiGNo ExamCourse_explore-cta-ff__GqCje">Explore Courses</button>
                                </div>
                                <div className="ExamCourse_exam-prepare-img__1F_tc">
                                    <div className="tw-hidden md:tw-block"><Image loading="lazy" className='explore_imges'
                                        src={require('../../assets/images/Explore-courses/92ca55f2-ef3f-4065-81af-cb6f5d46d26f-1682592753417-4102418410874681.png')} alt="exam-course" /></div>
                                    <div className="tw-block md:tw-hidden"><Image loading="lazy" className='explore_imges'
                                        src={require('../../assets/images/Explore-courses/92ca55f2-ef3f-4065-81af-cb6f5d46d26f-1682592753417-4102418410874681.png')} alt="exam-course" /></div>
                                </div>
                            </div>)
                    }

                </div>
            </div>
        </section>
        </>
    );
};


export default ExploreCourseComponent;