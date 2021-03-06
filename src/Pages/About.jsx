import React from 'react'
import { Container } from 'react-bootstrap'
import './css/About.css'
import IMG_3364 from '../Images/IMG_3364.jpeg'

const About = () => {
    return (
    <>
      <Container>
        <figure>
          <figCaption>
          <img
          className="headerImg"
          style={{maxWidth: "12em", height: "auto"}}
          src={IMG_3364}
          alt="meProfilePic"
        />
            Hi all! My name is Nic Babineaux, I am currently located in Lafayette, Louisiana.
          I am a fullstack, front end, ui developer, certified powersports technician and musician.
          Attended and graduated MMI mechanical school in Phoenix, Arizona class of 2010.
          Then went on to study Sociology/Social Psychology at South Louisiana Community College 2010-2012. Recent graduate of fullstack academy and pursuing my career in software development. < br />
          Bored with standard educational practices, I decided to travel the country and made lifetime memories along the way. 
          Post travels I returned to my mechanical career path. Ended up in Denver, Colorado where I made some of the best friends and memories of my life.< br />
          Returning to south Louisiana some years later...still in the powersports industry, I was on the search for something bigger, better, and more rewarding. 
          I got into cryptocurrencies and day trading. Furthermore, that led to an extreme interest in web design and software development.< br/>
          I enrolled in the Fullstack Academy of software and graduated in 2021 and never looked back. 
          Actively operating as a freelance front end and fullstack developer, creating responsive and functional web applications for individual artists and local small businesses!
          </figCaption>
        </figure>
      </Container>
    </>
  )
}

export default About

