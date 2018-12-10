import React, { Component } from 'react';
import './styles.css';
// import portfolio from "./data/portfolio.jpeg";
// import reduxGet from './data/reduxGet.png';
// import frontendGet from './data/frontendGet.png';
// import SkillList from './SkillList';

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
            Experienced Scrum Master turned full stack React developer, who enjoys problem solving. I believe two heads are better than one and finding the value in opposing viewpoints. I enjoy playing basketball and giving myself carpal tunnel via computer games. 
        </div>
        );
    }
};

export default About;

// eslint-disable-next-line
{/* <div className="skills-container">
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
} */}