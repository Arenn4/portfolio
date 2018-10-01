import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSkills } from '../redux';
import Skill from './Skill'

class SkillList extends Component{

    componentDidMount(){
        this.props.getSkills()
    }

    render(){
        console.log(this.props.skills.name)
    return (
        <div className="skills">
            {this.props.skills.map(skill => {
                return <Skill 
                    key={skill._id}
                    {...skill}
                />
            })}
            
        </div>
        );
    }
};

export default connect(state=>state, { getSkills }) (SkillList);