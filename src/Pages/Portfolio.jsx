import React from 'react'
import './css/Portfolio.css'

const Portfolio = () => {

    const onLinkClick = () => {
        window.open("https://quirky-lamport-8e798a.netlify.app/")
    }

    return (
        <>
        <div>
            Portfolio Page
        </div>
            <div className="artCollector" onClick={onLinkClick}>Harvard Art Collector</div>
        </>
    )
}

export default Portfolio
