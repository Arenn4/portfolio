import React, { Component } from 'react';
import './styles.css';

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
            <div className="navbar-container">
                Alex Renn
                {/* <div>
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
                </div>*/}
            </div> 
        </div>
        );
    }
};

export default Navbar;