import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createNote } from '../../actions'
import './index.css';

class CreateNote extends Component {
    state = { 
        note : {
            title: '',
            body: '',
        }
    }

    handleSave =() => {
        console.log('My Note is: ', this.state.note)
        let craftedNote = { ...this.state.note };
        craftedNote['_id'] = Date.now() + craftedNote.title;
        craftedNote.createdAt = Date.now();
        console.log('My Crafted Note is: ', craftedNote);
        this.props.createNote(craftedNote);
        this.props.history.push('/');


    }

    handleChange = (e) => {
        let temp = { ...this.state.note };
        temp[e.target.name] = e.target.value;
        console.log('pre temp -> note', this.state.note)
        this.setState({ note: temp })
        console.log('post temp -> note', this.state.note)
        console.log('post temp -> note', temp)

    }

    render() { 
        return ( 
            <div className = 'noteview_container'>
            <div className = 'noteview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        Create New Note:
                    </h3>
                    
            </div>
                <hr></hr>
                <div className='createNote_form'>
                    <input 
                        type='text' 
                        className='createNote_title'
                        name='title'
                        placeholder='Note Title' 
                        value={this.state.note.title} 
                        onChange={this.handleChange}
                    />
                    <textarea 
                        className='createNote_body'
                        name='body'
                        placeholder='Note Content'
                        rows='15'
                        value={this.state.note.body}
                        onChange={this.handleChange}
                    />
                    <a href='#' className='button_link'>
                        <div 
                        className='nav_button createNote_button'
                        onClick = {this.handleSave}
                        >Save</div>
                    </a>
                </div>
            </div>
        )}
}
export default connect(null, { createNote })(CreateNote);