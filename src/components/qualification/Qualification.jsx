import React, { useState } from "react";
import "./qualification.css";

import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title fs-1">Qualification</h2>
            <span className="section__subtitle text-md">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs fs-4">
                    <div className={toggleState === 1 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex light"} onClick={() => toggleTab(1)}>
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    <div className={toggleState === 2 ? "qualification__button button--flex qualification__active"
                        : "qualification__button button--flex light"} onClick={() => toggleTab(2)}>
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                </div>


                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                            <div className="codemac">
                                <div className=" toolbar-shadow">
                                    <h3 className="qualification__title">B.E - Computer Science and Engineering</h3>
                                    <div class="termynal" data-termynal="">
                                        <span data-ty="input">Mailam Engineering College</span>
                                        <span data-ty="info">CGPA : 8.49</span>
                                    </div>
                                </div>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2020-2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className="codemac">
                                <div className=" toolbar-shadow">
                                    <h3 className="qualification__title">HSC</h3>
                                    <div class="termynal" data-termynal="">
                                        <span data-ty="input">St.Ann's Higher Secondary School</span>
                                        <span data-ty="info">Percentage : 54.4%</span>
                                    </div>
                                </div>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2019-2020
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                        <div className="codemac">
                                <div className=" toolbar-shadow">
                                    <h3 className="qualification__title">SSLC</h3>
                                    <div class="termynal" data-termynal="">
                                        <span data-ty="input">St.Ann's Higher Secondary School</span>
                                        <span data-ty="info">Percentage : 67.4%</span>
                                    </div>
                                </div>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2017-2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                        : "qualification__content"}>
                        <div className="qualification__data">
                        <div className="codemac">
                                <div className=" toolbar-shadow">
                                    <h3 className="qualification__title">Internship</h3>
                                    <div class="termynal" data-termynal="">
                                        <span data-ty="input">Vei Technology Pvt Ltd</span>
                                        <span data-ty="info">Web Developer</span>
                                    </div>
                                </div>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                   July 2023 - Aug 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                            <div className="codemac">
                                <div className=" toolbar-shadow">
                                    <h3 className="qualification__title">Internship</h3>
                                    <div class="termynal" data-termynal="">
                                        <span data-ty="input">Netaxis Pvt Ltd</span>
                                        <span data-ty="info">Junior Full Stack Developer</span>
                                    </div>
                                </div>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                   July 2024 - Aug 2024
                                </div>
                            </div>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;