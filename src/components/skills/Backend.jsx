import React from "react";
import { HiCheckBadge } from "react-icons/hi2";

const Backend = () => {
    return (
        <div className="skills__content ">
            <h3 className="skills__title fs-4">Backend Developer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">Python</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">Flask</h3>
                            <span className="skills__level text-lg">Basic</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">MySQL</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">


                    <div className="skills__data">
                        <HiCheckBadge />
                        <div>
                            <h3 className="skills__name fs-5">Git/Github</h3>
                            <span className="skills__level text-lg">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Backend;