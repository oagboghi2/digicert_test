import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList.js';
import NoteView from '../NoteView/NoteView.js';
import CreateNote from '../CreateNote/CreateNote.js';
import EditNote from '../EditNote/EditNote.js';
import DeleteNote from '../DeleteNote/DeleteNote.js';


class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'main_container'>
            <NoteView />
            <DeleteNote />
        </div> );
    }
}
 
export default MainContent;