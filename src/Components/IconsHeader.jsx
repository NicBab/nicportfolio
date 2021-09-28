import React from 'react'
import { gitHubIconHead, linkedinIconHead } from '../icons/index'
import './css/IconsHeader.css'

const IconsHeader = () => {

    const onGitHubClick = () => {
        window.open("https://github.com/NicBab")
    }

    const onLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/nic-babineaux/")
    }
    
    return (
        <div id="iconsHead">
            <div className="gitHubIconHeader" onClick={onGitHubClick}>{gitHubIconHead}</div>
            <div className="linkedinIconHeader" onClick={onLinkedinClick}>{linkedinIconHead}</div>
        </div>
    )
}

export default IconsHeader
