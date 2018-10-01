import React, { Component } from 'react';
import portfolio from "./data/portfolio.jpeg";
import reduxGet from './data/reduxGet.png';
import frontendGet from './data/frontendGet.png';
import SkillList from './SkillList';


class About extends Component{
    constructor(){
        super()
        this.state = {
            status: false
        }
    }
    
    changeDisplay = e => {
        this.setState(prevState => {
            return {
                status: !prevState.status
            }
        })
    }


    render(){
    return (
        <div className="about-container">
            <div className="img-container">
                <img className="port-image" src={portfolio} alt=""/>
            </div>
            <div className="about-me">
                <p className="about-desc">Hello and welcome to my portfolio! I am a Management Information Systems major from Eastern Illinois University. I have spent the past few years as a Business Analyst/Scrum Master in the IT field. I recently completed a Full-Stack JavaScript immersive program and now begin my next adventure in programming!</p>
                <p className="project-intro">A few of my projects are listed below:</p>
                {/* <a className="projects">ajmakadistributing.com</a> */}
                <a className="projects" href="http://www.gspfinder.surge.sh">www.gspfinder.surge.sh</a>
            </div>
            <div className="skills-container">
                <div className="btn-cont"><a onClick={this.changeDisplay} className="skills-btn waves-effect z-depth-5 #424242 grey darken-3 waves-light btn-large">Get Skills</a></div>
                {this.state.status
                ?
                <div className="skill-container"><SkillList /></div>
                
                :
                <div className="skills-container">
                
                </div>
                }
                
            </div>
            {this.state.status
            ?
            <div className="code-container">
                <img className="code-image" src={frontendGet} alt=""/>
                <img className="code-image" src={reduxGet} alt=""/>
            </div>
            :
            <div></div>
            }
            
        </div>
        );
    }
};

export default About;