import React from 'react'
import { phoneIcon, mailIcon } from '../icons'
import './css/Contact.css'

const Contact = () => {

  const onContactLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/nic-babineaux/")
  }

  const onContactGitHubClick = () => {
    window.open("https://github.com/NicBab")
  }

    return (
      <>
        <div className="contactPg">Contact Me
          <div className="contactLinkedIn" onClick={onContactLinkedInClick}>LinkedIn</div>
          <div className="contactgitHub" onClick={onContactGitHubClick}>GitHub</div>
          <div className="contactEmail">{mailIcon}nickpbab@gmail.com</div>
          <div className="contactPhone">{phoneIcon}(337)257-9202</div>
        </div>
      </>
    )
}

export default Contact
