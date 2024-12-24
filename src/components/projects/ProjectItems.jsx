import React, { useState } from 'react';
import { HiOutlineArrowSmRight,  HiX } from "react-icons/hi";

const ProjectItems = ({ item }) => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const projectDetails = {
        1: {
            title: "Student Information Management System",
            description: "A comprehensive web app to manage student information.",
            services: [
                "Designed a responsive UI using modern frameworks, improving user experience and engagement by 30% through user feedback and interaction metrics, boosting operational efficiency.",
                "Developed server-side logic and integrated APIs to streamline data processing, improving user authentication speed by 40% and reducing server response time, demonstrating strong problem-solving skills and adaptability.",
                "Established a secure database structure for efficient storage and retrieval of student records, increasing data access speed by 25%, ensuring compliance with security standards, and optimizing system performance and reliability across the platform, improving overall operational efficiency."
            ]
        },
        2: {
            title: "Blood Group Detection Using Image Processing",
            description: "An image processing project to detect blood groups from images.",
            services: [
                "Developed a web application for accurate blood group detection using image processing techniques, achieving over 95% accuracy through training.",
                "Created an intuitive user interface that enhanced user experience and streamlined interaction, leading to a 40% increase in user engagement.",
                "Ensured efficient data management, demonstrating strong skills in data analysis and software development, improving processing speed by 30% in health technology applications through careful execution and judgment."
            ]
        }
    };

    return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <span className="project__button" onClick={() => toggleTab(1)}>
                more<HiOutlineArrowSmRight className="project__button-icon" />
            </span>

            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                    <h3 className="services__modal-title fs-4">{projectDetails[item.id]?.title}</h3>
                    <p className="services__modal-description fs-6">{projectDetails[item.id]?.description}</p>
                    <ul className="services__modal-services grid">
                        {projectDetails[item.id]?.services.map((service, index) => (
                            <li key={index} className="services__modal-service">
                               
                                <p className="services__modal-info fs-6">{service}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectItems;
