import React from 'react'
import './css/Portfolio.css'

const Portfolio = () => {

    const onArtCollectorClick = () => {
        window.open("https://quirky-lamport-8e798a.netlify.app/")
    }
    const onSgPhotographyClick = () => {
        window.open("https://goofy-wright-304451.netlify.app/")
    }

    const onBayouBrosClick = () => {
        window.open("https://jolly-ramanujan-7108eb.netlify.app/")
    }

    return (
        <>
        <div>
            Portfolio Page
        </div>
            <div className="artCollector" onClick={onArtCollectorClick}>Harvard Art Collector</div>
            <div className="sgPhotography" onClick={onSgPhotographyClick}>SG Photography</div>
            <div className="bayouBros" onClick={onBayouBrosClick}>Bayou Bros Meats</div>
        </>
    )
}

export default Portfolio
