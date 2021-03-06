import React from 'react';
import './styles.css';
import gspfinder from "../data/gspfinder.png";
import ecommerce from "../data/E-commerce.png";
import makadistro from "../data/makadistro.png";

const Projects = () => {
    return (
        <div className="project-container">
            <div className="section-titles">Projects</div>
            <div className="project-images-container">
                <a href="http://gspfinder.surge.sh/" target="_blank" rel="noopener noreferrer"><img  className="project-images"  src={gspfinder} alt="GSP Finder"></img></a>
                <img className="project-images" src={ecommerce} alt="Shirt E-commerce website"></img>
                <a href="http://www.ajmakadistributors.com/" target="_blank" rel="noopener noreferrer"><img  className="project-images"  src={makadistro} alt="Maka Distributing"></img></a>
            </div>
        </div>
    );
};

export default Projects;