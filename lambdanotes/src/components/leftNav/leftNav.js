import React, { Component } from 'react'
import './index.css';

class LeftNav extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'nav_container'>
            <div>
            <h1 className = 'nav_header'>Lambda Notes</h1>
            </div>
            <div className = 'nav_buttons_container'>
                <a href='#'>
                    <div className='nav_button'>VIEW YOUR NOTES</div>
                </a>
                <a href='#'>
                    <div className='nav_button'>+CREATE NEW NOTE</div>
                </a>
            </div>
        </div> );
    }
}

export default LeftNav;