import React from 'react';
import './styles.css';
import html from "../data/html5.png";
import css from "../data/css3.png";
import react from "../data/reactlogo.png";
import node from "../data/node.png";
import javascript from "../data/javascript.png";
import mongodb from "../data/mongodb.png";

const ExtraInfo = () => {
    return (
        <div className="info-container">
            <div className="section-titles">Skills</div>
            <div className="project-images-container">
                <img className="skill-logos" src={html} alt="HTML"/>
                <img className="skill-logos" src={css} alt="CSS3"/>
                <img className="skill-logos" src={react} alt="React"/>
                <img className="skill-logos" src={node} alt="Nodejs"/>
                <img className="skill-logos" src={javascript} alt="JavaScript"/>
                <img className="skill-logos" src={mongodb} alt="MongoDB"/>
            </div>
        </div>
    );
};

export default ExtraInfo;