import React, { Component } from 'react'
import './index.css';
import BooksList from '../BooksList/BooksList.js';
import BookView from '../BooksView/BookView.js';
import CreateBook from '../CreateBook/CreateBook.js';
import EditBook from '../EditBook/EditBook.js';
import { Route, Switch } from 'react-router-dom'

class MainContent extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'main_container'>
            <Switch>
                <Route path='/' exact component={BooksList} />
                <Route path='/book/:id' exact component={BookView} />
                <Route path='/create' exact component={CreateBook} />
                <Route path='/edit/:id' exact component={EditBook} />
            </Switch>
        </div> 
        );
    }
}
export default MainContent;