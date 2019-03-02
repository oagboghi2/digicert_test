import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote.js';
import EditNote from '../EditNote/EditNote.js';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}


class NoteView extends Component {
    state = { 
        displayDelete: false,
        matched: []
    }

    componentWillMount() {
        let routeId = this.props.match.params.id;
        console.log('Route id is: ', routeId);
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        console.log('Matched object', matched);
        this.setState({matched})
        console.log('Matched state', this.state.matched);
    }


    /* This is toggle logic. This function flips the displayDelete property in our state
    If you click delete, the modal will show. If you click it again, the CSS attitubute will be set to hidden*/
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    render() { 
        console.log('NoteView Props: ', this.props)
        return ( 
            <div className = 'noteview_container'>
            <div className = 'noteview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        {this.state.matched[0].title}
                    </h3>
                    <div>
                        <Link to={`/edit/${this.props.match.params.id}`} 
                            className = 'edit_delete'
                            >   
                                Edit
                        </Link>
                        <a href='#' 
                            className = 'edit_delete'
                            onClick={this.showModal}
                            > 
                                Delete
                        </a>
                    </div>
            </div>
                <hr></hr>
                <div className='notesList'>
                    <p className = ''>
                        {this.state.matched[0].body}
                    </p>
                </div>
                <DeleteNote 
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                    toDelete={this.state.matched[0]._id}
                    history={this.props.history}
                />
            </div>
        )}
    }
export default connect(mapStateToProps, {/* Actioms Here */})(NoteView);