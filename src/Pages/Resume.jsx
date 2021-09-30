import React from 'react'
import './css/Resume.css'
import NicBabineaux_resume from '../Images/Nic Babineaux_resume.jpg'

const Resume = () => {
    return (
        <div className="resumeDiv">
             <img
                className="resumeImg"
                src={NicBabineaux_resume}
                alt="resume"
            />
        </div>
    )
}

export default Resume
