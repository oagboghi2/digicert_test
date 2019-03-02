import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote.js';

class EditNote extends Component {
    state = {  }
    render() { 
        return ( 
            <div className = 'noteview_container'>
            <div className = 'noteview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        Edit Note:
                    </h3>
                    
            </div>
                <hr></hr>
                <div className='createNote_form'>
                    <input 
                        type='text' 
                        className='createNote_title'
                        placeholder='Note Title'    
                    />
                    <textarea 
                        className='createNote_body'
                        placeholder='Note Content'
                        rows='15'
                    />
                    <a href='#' className='button_link'>
                        <div className='nav_button createNote_button'>Update</div>
                    </a>
                </div>
            </div>
        )}
}

export default EditNote;