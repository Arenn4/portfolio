import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './styles.css'

class Navbar extends Component{
    constructor(){
        super()
        this.state = {
            status: true
        }
    }

    changeDisplay = e =>{
        this.setState(prevState =>{
          return{
          status: !prevState.status
          }
        })
      }
    

    render(){
    return (
        <div>
            <div className="nav-container">
                <div><Link to="/" className="title">Alex Renn</Link></div>
                <div></div>
                <div className="nav-items"><Link to="/">Home </Link></div>
                <div className="nav-items"><Link to="/about">About </Link></div>
                <div className="nav-items"><Link to="/contact">Contact</Link></div>
                <div>
                {this.state.status
                ?
                
                    <button onClick={this.changeDisplay} className='hambutt'>
                        <div className='hamMenu'></div>
                        <div className='hamMenu'></div>
                        <div className='hamMenu'></div>
                    </button>
                :
                    <div className='sideMenu' >
                        <ul onMouseLeave={this.changeDisplay}>
                        <Link className='menuOptions'to="/"><span>Home</span></Link>
                        <Link className='menuOptions'to="/about"><span>About</span></Link>
                        <Link className='menuOptions'to="/contact"><span>Contact Us</span></Link>
                        </ul>
                    </div>
                    
                }
                </div>
            </div>
        </div>
        );
    }
};

export default Navbar;