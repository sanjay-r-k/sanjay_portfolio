import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title fs-4">Frontend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">HTML</h3>
                            <span className="skills__level text-lg">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">CSS</h3>
                            <span className="skills__level text-lg">Advanced</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">Bootstrap</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">JavaScript</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">React</h3>
                            <span className="skills__level text-lg">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">JQuery</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Frontend;