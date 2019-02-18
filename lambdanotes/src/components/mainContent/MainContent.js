import React, { Component } from 'react'
import './index.css';
import NotesList from '../NotesList/NotesList.js';
import NoteView from '../NoteView/NoteView.js';
import CreateNote from '../CreateNote/CreateNote.js';
import EditNote from '../EditNote/EditNote.js';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import { Route, Switch } from 'react-router-dom'

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'main_container'>
            <Switch>
                <Route path='/' exact component={NotesList} />
                <Route path='/note/:id' exact component={NoteView} />
                <Route path='/create' exact component={CreateNote} />
                <Route path='/edit/:id' exact component={EditNote} />
            </Switch>
        </div> );
    }
}
 
export default MainContent;