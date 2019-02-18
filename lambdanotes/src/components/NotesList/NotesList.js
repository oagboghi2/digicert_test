import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import './index.css';

class NotesList extends Component {
    state = { 
        notesArray: [
            {
                _id:'1',
                title: 'First Note',
                body: 'Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.Cras mollis commodo sapien, id gravida neque condimentum dictum.Proin non magna ultricies, rhoncus elit molestie, maximus tellus.Proin ac rutrum ligula.Etiam consectetur mi sed ante finibus, eu consequat purus imperdiet.Maecenas imperdiet interdum ante vitae sodales.Praesent id tristique mauris.Aenean mollis porttitor faucibus.Morbi vitae scelerisque ex.Aenean eget placerat augue.Nam facilisis vel magna quis condimentum.Maecenas faucibus pulvinar magna, ut euismod lacus suscipit sit amet.',
                CreatedAt: 1550384469279
            },
            {
                _id: '2',
                title: 'Second Note',
                body: 'Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,',
                CreatedAt: 1550384469279
            },
            {
                _id: '3',
                title: 'Third Note',
                body: ' consectetur adipiscing',
                CreatedAt: 1550384469279
            },
            {
                _id: '4',
                title: 'Fourth Note',
                body: ' consectetur adipiscing',
                CreatedAt: 1550384469279
            },
        ]
    }

    

    render() { 
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
export default NotesList;