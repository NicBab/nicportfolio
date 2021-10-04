import React from 'react'
import './css/Resume.css'
import NicBab_resume from '../Images/NicBab_resume.jpg'

const Resume = () => {
    return (
        <div className="resumeDiv">
             <img
                className="resumeImg"
                style={{maxWidth: "100%", height: "auto"}}
                src={NicBab_resume}
                alt="resume"
            />
        </div>
    )
}

export default Resume
