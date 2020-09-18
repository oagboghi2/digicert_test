import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createBook } from '../../actions'
import './index.css';

class CreateBook extends Component {
    state = { 
        book : {
            title: '',
            body: '',
        }
    }

    handleSave =() => {
        let craftedBook = { ...this.state.book };
        craftedBook['_id'] = Date.now() + craftedBook.title;
        craftedBook.createdAt = Date.now();
        this.props.createBook(craftedBook);
        this.props.history.push('/');


    }

    handleChange = (e) => {
        let temp = { ...this.state.book };
        temp[e.target.name] = e.target.value;
        console.log('pre temp -> book', this.state.book)
        this.setState({ book: temp })
        console.log('post temp -> book', this.state.book)
        console.log('post temp -> book', temp)

    }

    render() { 
        return ( 
            <div className = 'bookview_container'>
            <div className = 'bookview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        Create New Book:
                    </h3>
                    
            </div>
                <hr></hr>
                <div className='createBook_form'>
                    <input 
                        type='text' 
                        className='createBook_title'
                        name='title'
                        placeholder='Book Title' 
                        value={this.state.book.title} 
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className='createBook_body'
                        name='body'
                        placeholder='Book Content'
                        rows='15'
                        value={this.state.book.body}
                        onChange={this.handleChange}
                    />
                    <a href='#' className='button_link'>
                        <div 
                        className='nav_button createBook_button'
                        onClick = {this.handleSave}
                        >Save</div>
                    </a>
                </div>
            </div>
        )}
}
export default connect(null, { createBook })(CreateBook);