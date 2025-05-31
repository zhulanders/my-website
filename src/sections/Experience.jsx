import { workExperiences } from "../constants/index.js";
import React from "react";
const Experience = () =>{
    return(
        <section id="experience" className="c-space my-20">
            <div className="w-full text-white-600 flex flex-col items-center">
                <h3 className="head-text">My Experience</h3>
                <div className="work-container flex justify-center items-center">
                    <div className="work-content">
                        <div className="sm:py-10 py-5 sm:px-5">
                            {workExperiences.map(({ id, name, pos, icon, duration, title }) => (
                            <div key={id} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py-2">
                                    <div className="work-content_logo w-24 h-24 overflow-hidden flex justify-center items-center">
                                    <img src={icon} alt="logo" className="max-w-full max-h-full object-contain" />
                                    </div>
                                <div className="work-content_bar" />
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                <p className="font-bold text-white-800">{name}</p>
                                <p
                                    className={`text-sm mb-5 ${
                                    !name && !pos ? "font-bold text-white" : ""
                                    }`}
                                >
                                    {pos} {pos && name ? " -- " : ""} {duration}
                                </p>
                                <p className="group-hover:text-white transition ease-in-out duration-500">
                                    {title.split("\n").map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                    ))}
                                </p>
                                </div>
                            </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experience