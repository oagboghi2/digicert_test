import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './index.css';
import DeleteBook from '../DeleteBook/DeleteBook.js';
import EditBook from '../EditBook/EditBook.js';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
    return {
        booksArray: state
    }
}


class BookView extends Component {
    state = { 
        displayDelete: false,
        matched: []
    }

    componentWillMount() {
        let routeId = this.props.match.params.id;
        console.log('Route id is: ', routeId);
        let matched = this.props.booksArray.filter((item) => item._id === routeId);
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
        console.log('bookView Props: ', this.props)
        return ( 
            <div className = 'bookview_container'>
            <div className = 'bookview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        {this.state.matched[0].title}
                    </h3>
                    <div>
                        <Link to={`/edit/${this.props.match.params.id}`} 
                            className = 'edit'
                            >   
                                Edit
                        </Link>
                        <a href='#' 
                            className = 'delete'
                            onClick={this.showModal}
                            > 
                                Delete
                        </a>
                    </div>
            </div>
                <hr></hr>
                <div className='booksList'>
                    <p className = ''>
                        {this.state.matched[0].body}
                    </p>
                </div>
                <DeleteBook
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                    toDelete={this.state.matched[0]._id}
                    history={this.props.history}
                />
            </div>
        )}
    }
export default connect(mapStateToProps, {/* Actioms Here */})(BookView);