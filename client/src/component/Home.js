import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="title-container">
                <div className="title-name">Alexander Renn</div>
                <div className="title-class">Full-Stack Web Developer</div>
                <div className="home-contact"><Link to="/contact">Business Inquiries</Link></div>
            </div>
        </div>
    );
};

export default Home;