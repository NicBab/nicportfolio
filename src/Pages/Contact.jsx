import React from 'react'
import { phoneIcon, mailIcon } from '../icons'
import './css/Contact.css'

const Contact = () => {
    return (
      <>
        <div className="contactPg">Contact
          <div className="contactEmail">{mailIcon} nickpbab@gmail.com</div>
          <div className="contactPhone">{phoneIcon} (337) 257-9202</div>
        </div>
      </>
    )
}

export default Contact
