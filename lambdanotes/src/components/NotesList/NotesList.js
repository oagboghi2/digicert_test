import React, { Component } from 'react'
import './index.css';

class NotesList extends Component {
    state = {  }
    render() { 
        return ( 
        <div className = 'noteslist_container'>
        <div><h3 className = 'contentHeader'>Your Notes:</h3></div>
        <div className = 'notesList'>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum </p>
                    </div>
                </div>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.</p>
                    </div>
                </div>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.</p>
                    </div>
                </div>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.</p>
                    </div>
                </div>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.</p>
                    </div>
                </div>
                <div className = 'note'>
                    <div>
                        <h4>Note Title</h4>
                        <hr></hr>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet tortor eu ex varius bibendum a malesuada risus. Sed facilisis orci ac bibendum imperdiet. Integer non lectus tincidunt eros elementum consectetur vel quis nibh. Cras a dapibus lectus. Integer id pulvinar quam, vitae sollicitudin lorem. Nulla et elementum risus. Aliquam molestie, justo a sodales dictum, ligula ante fermentum quam, id vulputate ligula leo id mi. Mauris pretium metus in nunc ornare, vitae rutrum massa tincidunt.</p>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}
 
export default NotesList;