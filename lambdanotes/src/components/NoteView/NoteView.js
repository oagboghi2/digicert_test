import React, { Component } from 'react'
import './index.css';
import DeleteNote from '../DeleteNote/DeleteNote.js';


class NoteView extends Component {
    state = { 
        displayDelete: false,
        notesArray: [
            {
                _id: 'fhcdjnmk',
                title: 'First Note',
                body: 'Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.Cras mollis commodo sapien, id gravida neque condimentum dictum.Proin non magna ultricies, rhoncus elit molestie, maximus tellus.Proin ac rutrum ligula.Etiam consectetur mi sed ante finibus, eu consequat purus imperdiet.Maecenas imperdiet interdum ante vitae sodales.Praesent id tristique mauris.Aenean mollis porttitor faucibus.Morbi vitae scelerisque ex.Aenean eget placerat augue.Nam facilisis vel magna quis condimentum.Maecenas faucibus pulvinar magna, ut euismod lacus suscipit sit amet.',
                CreatedAt: 1550384469279
            },
            {
                _id: 'fvejnkmjnmvfem',
                title: 'Second Note',
                body: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,',
                CreatedAt: 1550384469279
            },
            {
                _id: 'fiyuouiyu',
                title: 'Third Note',
                body: ' consectetur adipiscing',
                CreatedAt: 1550384469279
            },
            {
                _id: 'jbknlkyu',
                title: 'Fourth Note',
                body: ' consectetur adipiscing',
                CreatedAt: 1550384469279
            },
        ]
    }
    /* This is toggle logic. This function flips the displayDelete property in our state
    If you click delete, the modal will show. If you click it again, the CSS attitubute will be set to hidden*/
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
    }

    render() { 
        return ( 
            <div className = 'noteview_container'>
            <div className = 'noteview_Topcontent'>
                    <h3 className = 'contentHeader'>
                        {this.state.notesArray[0].title}
                    </h3>
                    <div>
                        <a href='#' className = 'edit_delete'> Edit</a>
                        <a href='#' 
                        className = 'edit_delete'
                        onClick={this.showModal}> 
                        Delete</a>
                    </div>
            </div>
                <hr></hr>
                <div className='notesList'>
                    <p className = ''>
                        {this.state.notesArray[0].body}
                    </p>
                </div>
                <DeleteNote 
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                />
            </div>
        )}
    }
export default NoteView;