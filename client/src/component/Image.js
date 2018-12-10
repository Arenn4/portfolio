import React from 'react';
import portfolio from "../data/portfolio.jpeg";
import './styles.css';

const Image = () => {
    return (
        <div className="image-container">
            <img className="portfolio-image" src={portfolio} alt=""/>
        </div>
    );
};

export default Image;