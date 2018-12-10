import React from 'react';
import resume from '../data/Alex Renn-Front End Developer (2).pdf'
import './styles.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-items">
                <a className="footer-github" href="https://github.com/Arenn4"  rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
                <a className="footer-resume" href={resume} rel="noopener noreferrer" download>Click for my Resume!</a>
                <a className="footer-linkedin" href="https://www.linkedin.com/in/alexrenn/"  rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                </div>
        </div>
    );
};

export default Footer;