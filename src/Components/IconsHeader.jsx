import React from 'react'
import './css/IconsHeader.css'
import { 
    gitHubIconHead,
    linkedinIconHead,
    facebookIconHead,
    instaIconHead 
} from '../icons/index'


const IconsHeader = () => {

    const onLinkedinClick = () => {
        window.open("https://www.linkedin.com/in/nic-babineaux/")
    }

    const onGitHubClick = () => {
        window.open("https://github.com/NicBab")
    }

    const onFacebookIconClick = () => {
        window.open("")
    }

    // const onInstaClick = () => {
    //     window.open("")
    // }
    
    return (
        <div id="iconsHead">
            <div className="linkedinIconHeader" onClick={onLinkedinClick}>{linkedinIconHead}</div>
            <div className="gitHubIconHeader" onClick={onGitHubClick}>{gitHubIconHead}</div>
            <div className="facebookIconHeader" onClick={onFacebookIconClick}>{facebookIconHead}</div>
            {/* <div className="instaIconHeader" onClick={onInstaClick}>{instaIconHead}</div> */}
        </div>
    )
}

export default IconsHeader
