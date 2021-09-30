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

  const onContactPhoneClick = () => {
    window.location = "tel:+3372579202"
  }

  const onContactEmailClick = () => {
    window.location.href="mailto: nickpbab@gmail.com"
  }

    return (
      <>
        <div className="contactPg">Contact Me
          <div className="contactLinkedIn" onClick={onContactLinkedInClick}>LinkedIn</div>
          <div className="contactGitHub" onClick={onContactGitHubClick}>GitHub</div>
          <div className="contactEmail" onClick={onContactEmailClick}>{mailIcon}nickpbab@gmail.com</div>
          <div className="contactPhone" onClick={onContactPhoneClick}>{phoneIcon}(337)257-9202</div>
        </div>
      </>
    )
}

export default Contact
