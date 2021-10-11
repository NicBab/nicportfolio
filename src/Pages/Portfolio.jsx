import React from 'react'
import './css/Portfolio.css'

const Portfolio = () => {

    const onSgPhotographyClick = () => {
        window.open("https://goofy-wright-304451.netlify.app/")
    }

    const onBayouBrosClick = () => {
        window.open("https://jolly-ramanujan-7108eb.netlify.app/")
    }

    const onArtCollectorClick = () => {
        window.open("https://quirky-lamport-8e798a.netlify.app/")
    }

    const onLinkeratorClick = () => {
        window.open("https://obscure-basin-06170.herokuapp.com/")
    }

    return (
        <>
          <div className="portfolioPg">
            <div className="sgPhotography" onClick={onSgPhotographyClick}>SG Photography - </div>
            <div className="linkerator" onClick={onLinkeratorClick}>The Great Linkerator</div>
            <div className="firebaseLogin">Firebase login</div>
            <div className="artCollector" onClick={onArtCollectorClick}>Harvard Art Collector</div>
            <div className="bayouBros" onClick={onBayouBrosClick}>Bayou Bros Meats</div>
          </div>
        </>
    )
}

export default Portfolio
