import React, { Component } from 'react'
import { deleteBook } from '../../actions';
import { connect } from 'react-redux';
import './index.css';

class DeleteBook extends Component {
    handleDelete = () => {
        this.props.deleteBook(this.props.toDelete);
        this.props.history.push('/');
    }
    /* We use a ternary operator to 'toggle' between different class names 
    for the div that is holding the modal */
    render() { 
        console.log('Delete Book Props:', this.props)
        let toggle = this.props.toggle;
        return ( 
        <div className={toggle ? 'delete_wrapper' : 'hidden'}>
            <div>
                <h4>Are you sure you want to delete this?</h4>
            </div>
            <div className = 'delete_buttons_wrapper'>
                <div 
                    className = 'button button--danger'
                    onClick={this.handleDelete}
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

export default connect(null, { deleteBook })(DeleteBook);