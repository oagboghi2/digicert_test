import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';

const mapStateToProps = (state) => {
    return {
        booksArray: state
    }
}

class NotesList extends Component {
    state = { 
        booksArray: []
    }

    componentWillMount(){
        let reversed = Array.from(this.props.booksArray).reverse()
        this.setState({ booksArray: reversed });
    }

    render() { 
        console.log('Props inside booksList', this.props)
        return ( 
            <div className = 'bookslist_container'>
                <div><h3 className = 'contentHeader'>Your Books:</h3></div>
                    <div className='booksList'>
                            {this.state.booksArray.map((book, index) => {
                                return (
                                    <Link to={'/book/'+book._id} className='button_link'>
                                        <div className='book' key={index + book._id}>
                                            <div>
                                                <h4>{book.title}</h4>
                                                <hr></hr>
                                                <p>{book.body} </p>
                                            </div>
                                        </div>
                                    </Link>
                                    )
                            })}
                    </div>
            </div>
        )}

}
export default connect(mapStateToProps, {/* ActionsHere */})(NotesList);