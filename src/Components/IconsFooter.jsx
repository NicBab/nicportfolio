import React from 'react'
import { gitHubIconFoot, linkedinIconFoot } from '../icons/index'
import './css/IconsFooter.css'

const IconsFooter = () => {
    
const onGitHubClick = () => {
    window.open("https://github.com/NicBab")
}

const onLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/nic-babineaux/")
}

return (
    <div id="iconsFoot">
        <div className="gitHubIconFooter" onClick={onGitHubClick}>{gitHubIconFoot}</div>
        <div className="linkedinIconFooter" onClick={onLinkedinClick}>{linkedinIconFoot}</div>
    </div>
)
}

export default IconsFooter
