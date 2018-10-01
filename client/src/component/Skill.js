import React, { Component } from 'react';
import './styles.css'

class Skill extends Component{

    render(){
    return (
        <div className='tech-skills'>
            {this.props.name}
        </div>
        );
    }
};

export default Skill;