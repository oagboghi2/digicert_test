import React, { Component } from 'react'
import './index.css';

class DeleteNote extends Component {
    state = {  }
    /* We use a ternary operator to 'toggle' between different class names 
    for the div that is holding the modal */
    render() { 
        let toggle = this.props.toggle;
        return ( 
        <div className={toggle ? 'delete_wrapper' : 'hidden'}>
            <div>
                <h4>Are you sure you want to delete this?</h4>
            </div>
            <div className = 'delete_buttons_wrapper'>
                <div 
                    className = 'button button--danger'
                    onClick={this.props.showModal}
                >
                    DELETE
                </div>
                <div 
                    className = 'button'
                    onClick={this.props.showModal}
                >
                    CANCEL
                </div>
            </div>
        </div>
        );
    }
}

export default DeleteNote;