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

    // const onNicPortfolioClick = () => {
    //     window.open("https://github.com/NicBab/nicportfolio")
    // }

    return (
        <>
          <div className="portfolioPg">
            <div className="sgPhotography" onClick={onSgPhotographyClick}>SG Photography</div>
            <div className="bayouBros" onClick={onBayouBrosClick}>Bayou Bros Meats</div>
            <div className="artCollector" onClick={onArtCollectorClick}>Harvard Art Collector</div>
          </div>
        </>
    )
}

export default Portfolio
