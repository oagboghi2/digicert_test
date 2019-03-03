import React, { Component } from 'react'
import { connect } from 'react-redux';
import { editNote } from '../../actions';
import './index.css';


const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}


class EditNote extends Component {
    constructor() {
        super();
        this.state = {
            matched: []
        }
    }    

    componentWillMount() {
        let routeId = this.props.match.params.id;
        console.log('Route id is: ', routeId);
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        console.log('Matched object', matched);
        this.setState({ matched })
        console.log('Matched state', this.state.matched);
    }

    handleUpdate = () => {
        // Todo: FIre action here
        this.props.editNote(this.state.matched[0]);
        this.props.history.push('/');

    }

    handleChange = (e) => {
        let temp = Array.from(this.state.matched);
        temp[0][e.target.name] = e.target.value;
        this.setState({ matched: temp });
                
        //this.setState({ matched: e.target.value });
    }

    render() { 
        console.log(this)
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
                        name='title'
                        value={this.state.matched[0].title}
                        onChange={this.handleChange}    
                    />
                    <textarea 
                        className='createNote_body'
                        name='body'
                        value={this.state.matched[0].body }
                        rows='15'
                        onChange={this.handleChange}  
                    />
                    <div 
                        className='nav_button createNote_button'
                        onClick={this.handleUpdate}
                        >
                    Update </div>
                </div>
            </div>
        )}
}

export default connect(mapStateToProps, {editNote})(EditNote);