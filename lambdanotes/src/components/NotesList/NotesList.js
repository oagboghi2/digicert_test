import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class NotesList extends Component {
    state = { 
        notesArray: []
    }

    componentWillMount(){
        let reversed = Array.from(this.props.notesArray).reverse()
        this.setState({ notesArray: reversed });
    }

    render() { 
        console.log('Props inside notesList', this.props)
        return ( 
            <div className = 'noteslist_container'>
                <div><h3 className = 'contentHeader'>Your Notes:</h3></div>
                    <div className='notesList'>
                            {this.state.notesArray.map((note, index) => {
                                return (
                                    <Link to={'/note/'+note._id} className='button_link'>
                                        <div className='note' key={index + note._id}>
                                            <div>
                                                <h4>{note.title}</h4>
                                                <hr></hr>
                                                <p>{note.body} </p>
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