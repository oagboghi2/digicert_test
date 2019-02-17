import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList.js';
import NoteView from '../NoteView/NoteView.js';
import CreateNote from '../CreateNote/CreateNote.js';

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'main_container'>
            <CreateNote />
        </div> );
    }
}
 
export default MainContent;