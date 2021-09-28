import React from 'react'
import { gitHubIcon, linkedinIcon } from '../icons/index'
import './css/SocialIcons.css'

const SocialIcons = () => {

    const onGitHubClick = () => {
        window.open("https://github.com/NicBab")
    }

    const onLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/nic-babineaux/")
    }
    
    return (
        <div id="icons">
            <div className="gitHubIcon" onClick={onGitHubClick}>{gitHubIcon}</div>
            <div className="linkedinIcon" onClick={onLinkedinClick}>{linkedinIcon}</div>
        </div>
    )
}

export default SocialIcons
